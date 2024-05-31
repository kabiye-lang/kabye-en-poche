import { Stack } from 'expo-router'

export default function TabDictionnaryLayout() {
  // const { t } = useTranslation()

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="search"
        options={{
          title: '',
          headerTransparent: true,
          headerBackTitleVisible: false,
        }}
      />
    </Stack>
  )
}
