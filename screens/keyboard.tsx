import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Dimensions } from 'react-native'
import { Colors, TextField } from 'react-native-ui-lib'

import * as Clipboard from 'expo-clipboard'

import { ArrowFatLinesUp, ArrowFatLineUp, Backspace, Dot, KeyReturn } from '@/components/icons'
import { ScreenTitle } from '@/components/screen-title'
import { Button, View } from '@/components/themed'
import alphabetList from '@/utils/data/alphabet/list'
import { fonts } from '@/utils/design-system'

const OTHER_CHARACTERS = [
  {
    id: '(',
    caps: '1',
  },
  {
    id: ':',
    caps: '2',
  },
  {
    id: ',',
    caps: '3',
  },
  {
    id: ';',
    caps: '4',
  },
  {
    id: '!',
    caps: '5',
  },
  {
    id: '?',
    caps: '6',
  },
  {
    id: '-',
    caps: '7',
  },
  {
    id: '+',
    caps: '8',
  },
  {
    id: '*',
    caps: '9',
  },
  {
    id: '=',
    caps: '0',
  },
  {
    id: ')',
    caps: '`',
  },
]
export default function KeyboardScreen() {
  const { t } = useTranslation()
  const [capsLock, setCapsLock] = useState<0 | 1 | 2>(0)
  const [content, setContent] = useState('')
  const changeText = (letter: Partial<(typeof alphabetList)[0]>) => {
    setContent((oldContent) => oldContent + (capsLock ? letter.caps || letter.id : letter.id))
    setCapsLock((capsLockOld) => (capsLockOld === 2 ? capsLockOld : 0))
  }
  const buttonWidth = (Dimensions.get('screen').width - 10) / 11 - 5

  return (
    <View flex paddingH-5 paddingB-20>
      <ScreenTitle title={t('keyboard.title')} />
      <View flex style={{ justifyContent: 'flex-end' }}>
        <TextField
          value={content}
          multiline
          fieldStyle={{
            borderWidth: 1,
            width: '100%',
            borderRadius: 10,
            borderColor: Colors.grey40,
            minHeight: 100,
            maxHeight: 100,
            padding: 5,
          }}
        />
        <View style={{ flexWrap: 'wrap', gap: 5 }} row centerH marginB-10 marginT-20>
          <Button
            title="clear"
            label={t('keyboard.clear')}
            marginV-0
            marginH-0
            paddingH-0
            paddingT-0
            paddingB-0
            outline
            style={{ width: 90, minWidth: 90, height: 35 }}
            borderRadius={5}
            onPress={() => setContent('')}
          />
          <Button
            title="copy"
            label={t('keyboard.copy')}
            marginV-0
            marginH-0
            paddingH-0
            paddingT-0
            paddingB-0
            outline
            style={{ width: 90, minWidth: 90, height: 35 }}
            borderRadius={5}
            onPress={async () => await Clipboard.setStringAsync(content)}
          />
        </View>

        <View style={{ flexWrap: 'wrap', gap: 5, justifyContent: 'center' }} row marginT-10>
          {OTHER_CHARACTERS.concat(alphabetList)
            // @ts-expect-error hideInKeyboard doesn't exist on tpe
            .filter((letter) => !letter.hideInKeyboard)
            .map((letter) => (
              <Button
                key={letter.id}
                title={letter.id}
                label={capsLock > 0 ? letter.caps : letter.id}
                marginV-0
                marginH-0
                paddingH-0
                paddingT-0
                paddingB-0
                style={{ width: buttonWidth, minWidth: buttonWidth, height: 35 }}
                labelStyle={{ fontFamily: fonts.fig5 }}
                borderRadius={5}
                onPress={() => changeText(letter)}
              />
            ))}
        </View>
        <View style={{ flexWrap: 'wrap', gap: 5 }} row centerH marginT-10>
          <Button
            title="cap lock"
            label=""
            marginV-0
            marginH-0
            paddingH-0
            paddingT-0
            paddingB-0
            style={{ width: 50, minWidth: 50, height: 35 }}
            borderRadius={5}
            onPress={() => setCapsLock((capsLockOld) => (capsLockOld > 0 ? 0 : 1))}
            onLongPress={() => setCapsLock((capsLockOld) => (capsLockOld > 0 ? 0 : 2))}
          >
            {capsLock === 2 ? (
              <ArrowFatLinesUp weight="fill" color={Colors.white} />
            ) : (
              <ArrowFatLineUp weight={capsLock === 1 ? 'fill' : 'light'} color={Colors.white} />
            )}
          </Button>
          <Button
            title="dot"
            label=""
            marginV-0
            marginH-0
            paddingH-0
            paddingT-0
            paddingB-0
            style={{ width: 50, minWidth: 50, height: 35 }}
            borderRadius={5}
            onPress={() => changeText({ id: '.' })}
          >
            <Dot color={Colors.white} />
          </Button>
          <Button
            title="space"
            label={t('keyboard.space')}
            marginV-0
            marginH-0
            paddingH-0
            paddingT-0
            paddingB-0
            style={{ width: 90, minWidth: 90, height: 35 }}
            borderRadius={5}
            onPress={() => changeText({ id: ' ' })}
          />
          <Button
            title="backspace"
            label=""
            marginV-0
            marginH-0
            paddingH-0
            paddingT-0
            paddingB-0
            style={{ width: 50, minWidth: 50, height: 35 }}
            borderRadius={5}
            onPress={() => setContent((content) => content.substring(0, content.length - 1))}
          >
            <Backspace color={Colors.white} />
          </Button>
          <Button
            title="enter"
            label=""
            marginV-0
            marginH-0
            paddingH-0
            paddingT-0
            paddingB-0
            style={{ width: 50, minWidth: 50, height: 35 }}
            borderRadius={5}
            onPress={() => {
              changeText({ id: '\n' })
              setCapsLock(1)
            }}
          >
            <KeyReturn color={Colors.white} />
          </Button>
        </View>
      </View>
    </View>
  )
}
