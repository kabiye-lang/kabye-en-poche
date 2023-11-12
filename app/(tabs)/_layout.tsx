import { useTranslation } from 'react-i18next'

import { Tabs } from 'expo-router'

import { Article, BookOpenText, Keyboard, Lightbulb } from '@/components/icons'
import CustomTabBar from '@/components/navigation/tab-bar'

export default function TabLayout() {
  const { t } = useTranslation()
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      // screenOptions={{
      //   tabBarActiveTintColor: colorScheme === 'light' ? brandColors._tintColorLight : brandColors._tintColorDark,
      // }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: t('navigation.home.title'),
          tabBarIcon: ({ color, focused }) => <Lightbulb color={color} weight={focused ? 'fill' : 'light'} />,
          // headerRight: () => (
          //   <Link href="/modal" asChild>
          //     <Pressable>
          //       {({ pressed }) => (
          //         <FontAwesome
          //           name="info-circle"
          //           size={25}
          //           color={Colors[colorScheme ?? 'light'].text}
          //           style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
          //         />
          //       )}
          //     </Pressable>
          //   </Link>
          // ),
        }}
      />
      <Tabs.Screen
        name="dictionary"
        options={{
          title: t('navigation.dictionary.title'),
          tabBarIcon: ({ color, focused }) => <BookOpenText color={color} weight={focused ? 'fill' : 'light'} />,
        }}
      />
      <Tabs.Screen
        name="keyboard"
        options={{
          title: t('navigation.keyboard.title'),
          tabBarIcon: ({ color, focused }) => <Keyboard color={color} weight={focused ? 'fill' : 'light'} />,
        }}
      />
      <Tabs.Screen
        name="resources"
        options={{
          title: t('navigation.resources.title'),
          tabBarIcon: ({ color, focused }) => <Article color={color} weight={focused ? 'fill' : 'light'} />,
        }}
      />
    </Tabs>
  )
}
