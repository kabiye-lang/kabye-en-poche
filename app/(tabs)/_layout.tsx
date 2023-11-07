import { Pressable, useColorScheme } from 'react-native'

import { Link, Tabs } from 'expo-router'

import FontAwesome from '@expo/vector-icons/FontAwesome'

import { Article, BookOpenText, Lightbulb } from '@/components/icons'

import Colors from '../../constants/Colors'

export default function TabLayout() {
  const colorScheme = useColorScheme()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Leçons',
          tabBarIcon: ({ color }) => <Lightbulb color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="dictionary"
        options={{
          title: 'Dictonnaire',
          tabBarIcon: ({ color }) => <BookOpenText color={color} />,
        }}
      />
      <Tabs.Screen
        name="resources"
        options={{
          title: 'Ressources',
          tabBarIcon: ({ color }) => <Article color={color} />,
        }}
      />
    </Tabs>
  )
}
