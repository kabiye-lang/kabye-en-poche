import { useTranslation } from 'react-i18next'
import { StyleSheet } from 'react-native'

import { Text, View } from '@/components/themeds'

export default function TabOneScreen() {
  const { t } = useTranslation()

  return (
    <View style={styles.container}>
      <Text>{t('Welcome to React')}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
