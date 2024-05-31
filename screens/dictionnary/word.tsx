import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { Card, Colors } from 'react-native-ui-lib'

import { Text, View } from '@/components/themed'

const sampleWordDetails = {
  word: 'Kabiyè Word 1',
  translation: 'Translation 1',
  pronunciation: 'Pronunciation 1',
  usageExamples: [
    'Usage example 1',
    'Usage example 2',
    // Add more examples as needed
  ],
  relatedWords: [
    { id: '1', word: 'Related Word 1' },
    { id: '2', word: 'Related Word 2' },
    // Add more related words as needed
  ],
}

const WordDetailsScreen: React.FC = () => {
  //   const { id } = useLocalSearchParams()

  const wordDetails = sampleWordDetails // Replace with actual data fetching logic

  return (
    <View useSafeArea flex>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.word}>{wordDetails.word}</Text>
        <Text style={styles.translation}>{wordDetails.translation}</Text>
        <Text style={styles.pronunciation}>{wordDetails.pronunciation}</Text>

        <Text style={styles.sectionTitle}>Usage Examples</Text>
        {wordDetails.usageExamples.map((example, index) => (
          <Text key={index} style={styles.usageExample}>
            {example}
          </Text>
        ))}

        <Text style={styles.sectionTitle}>Related Words</Text>
        {wordDetails.relatedWords.map((relatedWord) => (
          <Card key={relatedWord.id} style={styles.relatedWordCard}>
            <Text style={styles.relatedWordText}>{relatedWord.word}</Text>
          </Card>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgGrey,
    padding: 20,
  },
  word: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 10,
  },
  translation: {
    fontSize: 20,
    color: Colors.textDark,
    marginBottom: 10,
  },
  pronunciation: {
    fontSize: 18,
    color: Colors.textGrey,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.textDark,
    marginBottom: 10,
  },
  usageExample: {
    fontSize: 16,
    color: Colors.textGrey,
    marginBottom: 5,
  },
  relatedWordCard: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: Colors.white,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  relatedWordText: {
    fontSize: 16,
    color: Colors.textDark,
  },
})

export default WordDetailsScreen
