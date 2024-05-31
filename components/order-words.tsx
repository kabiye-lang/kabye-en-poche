import React, { useState } from 'react'
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated'
import { Button, Colors, Text } from 'react-native-ui-lib'

interface OrderWordsProps {
  question: {
    words: string[]
  }
  onAnswerSelected: (_answer: string) => void
  showFeedback: boolean
}

interface Word {
  key: string
  label: string
}

const OrderWords: React.FC<OrderWordsProps> = ({ question, onAnswerSelected, showFeedback }) => {
  const [words, setWords] = useState<Word[]>(question.words.map((word, index) => ({ key: `${index}`, label: word })))
  const [selectedWords, setSelectedWords] = useState<Word[]>([])
  const [isValidated, setIsValidated] = useState(false)

  const handleWordSelect = (word: Word) => {
    setWords(words.filter((w) => w.key !== word.key))
    setSelectedWords([...selectedWords, word])
  }

  const handleWordDeselect = (word: Word) => {
    setSelectedWords(selectedWords.filter((w) => w.key !== word.key))
    setWords([...words, word])
  }

  const handleValidate = () => {
    const userAnswer = selectedWords.map((item) => item.label).join(' ')
    onAnswerSelected(userAnswer)
    setIsValidated(true)
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.wordContainer}>
        {words.map((word) => (
          <TouchableOpacity
            key={word.key}
            style={styles.wordButton}
            onPress={() => handleWordSelect(word)}
            disabled={showFeedback || isValidated}
          >
            <Animated.View entering={FadeIn} exiting={FadeOut}>
              <Text style={styles.wordText}>{word.label}</Text>
            </Animated.View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.selectedContainer}>
        {selectedWords.map((word) => (
          <TouchableOpacity
            key={word.key}
            style={styles.selectedWordButton}
            onPress={() => handleWordDeselect(word)}
            disabled={showFeedback || isValidated}
          >
            <Animated.View entering={FadeIn} exiting={FadeOut}>
              <Text style={styles.wordText}>{word.label}</Text>
            </Animated.View>
          </TouchableOpacity>
        ))}
      </View>
      {!isValidated && <Button label="Validate" onPress={handleValidate} style={styles.validateButton} />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  wordContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  wordButton: {
    backgroundColor: Colors.grey70,
    borderRadius: 8,
    padding: 10,
    margin: 5,
  },
  selectedContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
  },
  selectedWordButton: {
    backgroundColor: Colors.blue70,
    borderRadius: 8,
    padding: 10,
    margin: 5,
  },
  wordText: {
    textAlign: 'center',
    color: Colors.textDark,
  },
  validateButton: {
    marginTop: 20,
  },
})

export default OrderWords
