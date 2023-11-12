import { useTranslation } from 'react-i18next'
import { FlatList } from 'react-native'
import { Card } from 'react-native-ui-lib'

import { router } from 'expo-router'

import { ScreenTitle } from '@/components/screen-title'
import { Text, View } from '@/components/themed'
import alphabetList from '@/utils/data/alphabet/list'

export default function AlphabetScreen() {
  const { t } = useTranslation()
  return (
    <View flex>
      <FlatList
        numColumns={3}
        data={alphabetList}
        contentContainerStyle={{ paddingHorizontal: 15, gap: 5 }}
        columnWrapperStyle={{ maxWidth: '33.33%', gap: 5 }}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => <ScreenTitle title={t('alphabet.screen.title')} />}
        renderItem={({ item }) => (
          <View style={[{ position: 'relative', width: '100%', alignItems: 'center' }]}>
            <Card
              flex
              center
              bg-$backgroundElevated
              onPress={() =>
                router.push({
                  pathname: '/alphabet/[letter]',
                  params: { letter: item.id },
                })
              }
              elevation={2}
              style={{ width: '100%', height: 100 }}
            >
              <View>
                <Text h2 family="fig5">
                  {item.id}
                </Text>
              </View>
            </Card>
          </View>
        )}
      />
    </View>
  )
}
