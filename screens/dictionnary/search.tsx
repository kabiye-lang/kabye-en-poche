import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { Card, Colors, View } from 'react-native-ui-lib'

import { Link, useLocalSearchParams } from 'expo-router'

import { Text } from '@/components/themed'

const sampleResults = [
  { id: '1', word: 'Kabiyè Word 1', translation: 'Translation 1' },
  { id: '2', word: 'Kabiyè Word 2', translation: 'Translation 2' },
  // Add more sample data as needed
]

const SearchResultsScreen: React.FC = () => {
  const { s: query } = useLocalSearchParams()

  const renderItem = ({ item }: { item: { id: string; word: string; translation: string } }) => (
    <Link asChild href={`/word/${item.id}`}>
      <Card style={styles.card}>
        <Text style={styles.word}>{item.word}</Text>
        <Text style={styles.translation}>{item.translation}</Text>
      </Card>
    </Link>
  )

  return (
    <View flex backgroundColor={Colors.bgGrey} useSafeArea>
      <Text h4 family="ibm6" marginL-10 marginB-10>
        Search Results for "{query}"
      </Text>
      <FlatList
        data={sampleResults}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 20,
  },
  card: {
    padding: 15,
    marginBottom: 15,
    backgroundColor: Colors.white,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  word: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.textDark,
  },
  translation: {
    fontSize: 16,
    color: Colors.textGrey,
    marginTop: 5,
  },
})

export default SearchResultsScreen
