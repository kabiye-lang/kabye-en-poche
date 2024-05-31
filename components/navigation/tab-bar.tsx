import type { BottomTabBarProps } from '@react-navigation/bottom-tabs'

import { useEffect } from 'react'
import { Dimensions, Platform, TouchableOpacity } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { usePathname } from 'expo-router'

import { useTheme } from '@react-navigation/native'

import { Text, View } from '@/components/themed'
import { fonts } from '@/utils/design-system'

const SCREEN_WIDTH = Math.min(Dimensions.get('screen').width, 500)
export default function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  // descriptors[0].options.tabBarActiveTintColor
  const { colors: navColors } = useTheme()

  const translateX = useSharedValue(0)
  const pathname = usePathname()
  const safeAreaInsets = useSafeAreaInsets()
  useEffect(() => {
    const currentTabIdx = state.routes.findIndex((item) => {
      // console.log(item.name + ' - ' + pathname)
      return (pathname === '/' && item.name === 'index') || item.name.indexOf(pathname.substring(1)) === 0
    })

    if (currentTabIdx > -1) {
      translateX.value = withTiming(currentTabIdx, { duration: 350 })
    }
  }, [pathname])

  const animationStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: (translateX.value * SCREEN_WIDTH) / state.routes.length,
      },
    ],
  }))
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingBottom: safeAreaInsets.bottom + (Platform.OS === 'ios' ? 0 : 10),
        paddingTop: 8,
        borderTopColor: navColors.border,
        borderTopWidth: 0.5,
        backgroundColor: navColors.background,
      }}
    >
      <Animated.View
        style={[
          {
            height: 2,
            position: 'absolute',
            top: -1,
            left: 0,
            backgroundColor: navColors.primary,
            borderRadius: 5,
            width: SCREEN_WIDTH / state.routes.length,
          },
          animationStyle,
        ]}
      />
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const label =
          // options.tabBarLabel !== undefined
          //   ? options.tabBarLabel
          // :
          options.title !== undefined ? options.title : route.name

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate(route.name)
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          })
        }

        return (
          <TouchableOpacity
            activeOpacity={0.6}
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[{ flex: 1, alignItems: 'center' }]}
          >
            {options.tabBarIcon &&
              options.tabBarIcon({
                focused: isFocused,
                color: isFocused ? navColors.primary : navColors.text,
                size: 20,
              })}
            <Text
              style={{
                color: isFocused ? navColors.primary : navColors.text,
                fontSize: 12,
                fontFamily: isFocused ? fonts.ibm5 : fonts.ibm4,
              }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}
