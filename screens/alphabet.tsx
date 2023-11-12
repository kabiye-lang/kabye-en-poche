import { useTranslation } from 'react-i18next'
import { FlatList } from 'react-native'
import { Card } from 'react-native-ui-lib'

import { router } from 'expo-router'

import { Text, View } from '@/components/themed'

const ALPHABET_LIST = ['a', 'b']

export default function AlphabetScreen() {
  const { t } = useTranslation()
  return (
    <View flex>
      <FlatList
        numColumns={2}
        data={ALPHABET_LIST}
        contentContainerStyle={{ paddingHorizontal: 15, gap: 5 }}
        columnWrapperStyle={{ maxWidth: '50%', gap: 5 }}
        keyExtractor={(item) => item}
        ListHeaderComponent={() => <Text style={{ paddingVertical: 20 }}>{t('alphabet.screen.title')}</Text>}
        renderItem={({ item, index }) => (
          <View
            style={[
              { position: 'relative', width: '100%', alignItems: 'center' },
              index % 2 === 0 ? { paddingRight: 8 } : { paddingLeft: 8 },
            ]}
          >
            <Card
              flex
              center
              bg-$backgroundElevated
              onPress={() =>
                router.push({
                  pathname: '/alphabet/[letter]',
                  params: { letter: item },
                })
              }
              elevation={2}
              style={{ width: '100%', height: 100 }}
            >
              <View>
                <Text h2 family="fig5">
                  {item}
                </Text>
              </View>
            </Card>
          </View>
        )}
      />
    </View>
  )
}
