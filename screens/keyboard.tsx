import { useTranslation } from 'react-i18next'

import { Text, View } from '@/components/themed'

export default function KeyboardScreen() {
  const { t } = useTranslation()
  return (
    <View flex center>
      <Text>{t('keyboard.title')}</Text>
    </View>
  )
}
