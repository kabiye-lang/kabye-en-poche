import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ActivityIndicator } from 'react-native'
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Colors } from 'react-native-ui-lib'

import { router, useLocalSearchParams } from 'expo-router'

import { CaretLeft } from '@/components/icons'
import { Button, Text, View } from '@/components/themed'

// import { useRefreshOnFocus } from '@/hooks/useRefreshOnFocus'

export default function AlphabetLetterScreen() {
  const { t } = useTranslation()
  const { letter } = useLocalSearchParams()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)
  const safeAreaInsets = useSafeAreaInsets()

  const sv = useSharedValue<number>(0)
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      'worklet'
      sv.value = event.contentOffset.y
    },
  })
  const animatedHeaderStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(sv.value, [0, 100, 200], ['transparent', 'transparent', '#FFFFFF']),
      borderBottomWidth: interpolate(sv.value, [0, 120, 220], [0, 0, 1]),
    }
  })
  const animatedHeaderTitleStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(sv.value, [0, 220, 250], [0, 0, 1]),
    }
  })

  const alphabetLetter = { title: 'letter here' }

  useEffect(() => {
    console.log(letter)
    if (!letter) {
      setError(true)
      setIsLoading(false)
    } else {
      setIsLoading(false)
    }
  }, [])

  if (isLoading) {
    return (
      <View flex center>
        <ActivityIndicator />
      </View>
    )
    // return <LoaderScreen message={'Chargement en cours'} loaderColor={Colors.primary} />
  }

  if (error) {
    return (
      <View flex paddingT-20 useSafeArea>
        <Text paddingT-20>{t('common.error.general')}</Text>
      </View>
    )
  }

  return (
    <View flex style={{ paddingBottom: 70 + safeAreaInsets.top, backgroundColor: Colors.white }}>
      <Animated.View
        style={[
          {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            backgroundColor: Colors.white,
            zIndex: 10,
            borderBottomColor: Colors.$textDisabled,
          },
          animatedHeaderStyle,
        ]}
      >
        <View style={{ height: safeAreaInsets.top }} />
        <View
          style={[
            {
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              height: 70,
              paddingHorizontal: 10,
            },
          ]}
        >
          <View>
            <Button
              title="Retour"
              round
              iconSource={() => <CaretLeft size={20} weight="bold" color={Colors.black} />}
              backgroundColor={Colors.white}
              style={{ width: 30, height: 30 }}
              onPress={() => router.back()}
            />
          </View>

          <Animated.View
            style={[
              {
                flex: 1,
                paddingLeft: 10,
              },
              animatedHeaderTitleStyle,
            ]}
          >
            <Text numberOfLines={1} lg family="fig5">
              {alphabetLetter.title}
            </Text>
          </Animated.View>
        </View>
      </Animated.View>
      <Animated.ScrollView onScroll={scrollHandler} scrollEventThrottle={16}>
        <View center style={{ height: 200, paddingTop: safeAreaInsets.top }}>
          <Text h1>{letter}</Text>
        </View>
        <View paddingV-10 paddingH-15>
          <Text h4 family="fig6">
            {alphabetLetter.title}
          </Text>

          <Text family="fig6" marginT-30 marginB-10 lg $textNeutralHeavy>
            Description
          </Text>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, repudiandae. Facilis unde quo sunt
            porro voluptas. Expedita aspernatur quas natus, sed debitis quibusdam, dignissimos similique excepturi nulla
            corporis libero sapiente! Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat architecto
            debitis inventore ut quam nulla ad odit autem sequi officia eveniet ratione dolorum illum voluptas
            cupiditate, ipsam perspiciatis temporibus quas.
          </Text>

          <Text family="fig6" marginT-30 marginB-10 lg $textNeutralHeavy>
            Description
          </Text>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, repudiandae. Facilis unde quo sunt
            porro voluptas. Expedita aspernatur quas natus, sed debitis quibusdam, dignissimos similique excepturi nulla
            corporis libero sapiente! Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat architecto
            debitis inventore ut quam nulla ad odit autem sequi officia eveniet ratione dolorum illum voluptas
            cupiditate, ipsam perspiciatis temporibus quas.
          </Text>

          <Text family="fig6" marginT-30 marginB-10 lg $textNeutralHeavy>
            Description
          </Text>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, repudiandae. Facilis unde quo sunt
            porro voluptas. Expedita aspernatur quas natus, sed debitis quibusdam, dignissimos similique excepturi nulla
            corporis libero sapiente! Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat architecto
            debitis inventore ut quam nulla ad odit autem sequi officia eveniet ratione dolorum illum voluptas
            cupiditate, ipsam perspiciatis temporibus quas.
          </Text>

          <Text family="fig6" marginT-30 marginB-10 lg $textNeutralHeavy>
            Description
          </Text>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, repudiandae. Facilis unde quo sunt
            porro voluptas. Expedita aspernatur quas natus, sed debitis quibusdam, dignissimos similique excepturi nulla
            corporis libero sapiente! Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat architecto
            debitis inventore ut quam nulla ad odit autem sequi officia eveniet ratione dolorum illum voluptas
            cupiditate, ipsam perspiciatis temporibus quas.
          </Text>

          <Text family="fig6" marginT-30 marginB-10 lg $textNeutralHeavy>
            Description
          </Text>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, repudiandae. Facilis unde quo sunt
            porro voluptas. Expedita aspernatur quas natus, sed debitis quibusdam, dignissimos similique excepturi nulla
            corporis libero sapiente! Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat architecto
            debitis inventore ut quam nulla ad odit autem sequi officia eveniet ratione dolorum illum voluptas
            cupiditate, ipsam perspiciatis temporibus quas.
          </Text>
        </View>
        <View style={{ height: 70 }} />
      </Animated.ScrollView>
    </View>
  )
}
