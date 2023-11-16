import { useTranslation } from 'react-i18next'
import { Image } from 'react-native-ui-lib'

import { Link } from 'expo-router'

import { Button, View } from '@/components/themed'

export default function HomeScreen() {
  const { t } = useTranslation()
  return (
    <View center flex>
      <Image
        source={require('@/assets/in-app-logo.png')}
        style={{ maxHeight: 200, maxWidth: '50%', objectFit: 'contain', marginBottom: 20 }}
      />
      <Link href="/(tabs)/(home)/alphabet" asChild>
        <Button title={t('home.screen.alphabet_cta')} label={t('home.screen.alphabet_cta')} />
      </Link>
    </View>
  )
}
