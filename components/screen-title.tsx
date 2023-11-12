import type { ViewProps } from 'react-native'

import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Text, View } from './themed'

type ScreenTitleProps = {
  title: string
  fixed?: boolean
} & Pick<ViewProps, 'style'>

export function ScreenTitle({ title }: ScreenTitleProps) {
  const safeAreaInsets = useSafeAreaInsets()

  return (
    <View style={{ paddingTop: 40 + safeAreaInsets.top, paddingBottom: 20 }}>
      <Text h1>{title}</Text>
    </View>
  )
}
