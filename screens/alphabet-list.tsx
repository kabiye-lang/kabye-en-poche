import { useTranslation } from 'react-i18next'
import { FlatList } from 'react-native'
import { Badge, Card } from 'react-native-ui-lib'

import { router } from 'expo-router'

import Markdown from '@jonasmerlin/react-native-markdown-display'

import { ScreenTitle } from '@/components/screen-title'
import { Text, View } from '@/components/themed'
import alphabetList from '@/utils/data/alphabet.json'
import { LETTER_TYPE_COLORS, MARKDOWN_STYLE } from '@/utils/design-system'

export default function AlphabetListScreen() {
  const { t } = useTranslation()
  return (
    <View flex>
      <FlatList
        numColumns={3}
        data={alphabetList}
        contentContainerStyle={{ paddingHorizontal: 15, gap: 5, paddingBottom: 20 }}
        columnWrapperStyle={{ maxWidth: '33.33%', gap: 5 }}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => (
          <>
            <ScreenTitle title={t('alphabet.screen.title')} />
            <View>
              <Markdown
                style={MARKDOWN_STYLE}
              >{`Le **Kabiyè** est écrit de façon qu'en général il y ait un seul symbole (graphème) pour chaque son utile
                (phonème). Pour des raisons d'économie, certains sons sont symbolisés par deux lettres. Par exemple: kp,
                **gb, aɣ, eɣ, iɣ, et ɩɣ**. Comme chacun de ces symboles représente un son distinct des autres, ils sont
                introduits dans l'alphabet.

Il y a des lettres dans l'orthographe du kabiyè qui n'existent pas en français. Chaque lettre est là pour représenter un son utile dans le parler Kabiyè et pour éliminer des ambiguïtés dans l'écriture. Donc, parmi les voyelles vous trouvez **ɛ, ɩ, ɔ, et ʋ**. Parmi les consonnes vous trouvez **ɖ, ñ et ŋ**.

Le symbole **ɣ** (appelé «gamma») marque en général une modification et une longueur des voyelles qu'il suit. Mais dans quelques mots il a la fonction d'une consonne. (Par exemple: **sooɣa** «petit mortier», **hoɣa** «enceinte»).

**Les mots dans le dictionnaire Kabiyè sont rangées dans l'ordre suivant:**
            `}</Markdown>
            </View>
          </>
        )}
        renderItem={({ item }) => (
          <View style={[{ position: 'relative', width: '100%', alignItems: 'center' }]}>
            <Card
              flex
              center
              bg-$backgroundElevated
              onPress={() =>
                router.push({
                  pathname: '/alphabet/[letter]',
                  params: { letter: item.id },
                })
              }
              elevation={2}
              style={{ width: '100%', height: 100 }}
            >
              <View center>
                <Badge
                  // @ts-expect-error string not found
                  label={t(`alphabet.letter_type.${item.type}`)}
                  size={16}
                  // @ts-expect-error string index
                  backgroundColor={LETTER_TYPE_COLORS[item.type]}
                />

                <Text h2 family="fig5" textAlign="center">
                  {item.id}
                </Text>
              </View>
            </Card>
          </View>
        )}
      />
    </View>
  )
}
