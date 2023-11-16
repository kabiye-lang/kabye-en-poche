import { Stack } from 'expo-router'

export default function TabHomeLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="alphabet"
        options={{
          title: '',
          headerTransparent: true,
        }}
      />
    </Stack>
  )
}
