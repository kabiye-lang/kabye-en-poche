import React, { useEffect, useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Colors, Text } from 'react-native-ui-lib'

// Utility function to shuffle an array
const shuffleArray = (array: string[]): string[] => {
  return array.sort(() => Math.random() - 0.5)
}

interface MatchPairsProps {
  question: {
    pairs: [string, string][]
    correctAnswer: string
  }
  onAnswerSelected: (_answer: string) => void
  showFeedback: boolean
}

interface SelectedItem {
  item: string
  index: number
  type: 'country' | 'capital'
}

const MatchPairs: React.FC<MatchPairsProps> = ({ question, onAnswerSelected, showFeedback }) => {
  const [selectedItems, setSelectedItems] = useState<SelectedItem[]>([])
  const [matchedPairs, setMatchedPairs] = useState<string[]>([])
  const [shuffledCountries, setShuffledCountries] = useState<string[]>([])
  const [shuffledCapitals, setShuffledCapitals] = useState<string[]>([])

  useEffect(() => {
    const countries = question.pairs.map((pair) => pair[0])
    const capitals = question.pairs.map((pair) => pair[1])

    setShuffledCountries(shuffleArray(countries))
    setShuffledCapitals(shuffleArray(capitals))
  }, [question])

  const handleSelect = (item: string, index: number, type: 'country' | 'capital') => {
    if (selectedItems.length === 0 || (selectedItems.length === 1 && selectedItems[0].type !== type)) {
      setSelectedItems([...selectedItems, { item, index, type }])
    }

    if (selectedItems.length === 1) {
      const isCorrect = question.pairs.some(
        (pair) =>
          (pair[0] === selectedItems[0].item && pair[1] === item) ||
          (pair[1] === selectedItems[0].item && pair[0] === item)
      )

      if (isCorrect) {
        setMatchedPairs([...matchedPairs, selectedItems[0].item, item])
        setSelectedItems([])
        if (matchedPairs.length + 2 === question.pairs.length * 2) {
          onAnswerSelected(question.correctAnswer)
        }
      } else {
        setTimeout(() => setSelectedItems([]), 1000)
      }
    }
  }

  const renderOption = (item: string, index: number, type: 'country' | 'capital') => {
    const isSelected = selectedItems.some((selected) => selected.item === item)
    const isMatched = matchedPairs.includes(item)

    return (
      <TouchableOpacity
        key={`${item}-${index}`}
        style={[styles.itemButton, isSelected && styles.selectedItemButton, isMatched && styles.matchedItemButton]}
        onPress={() => handleSelect(item, index, type)}
        disabled={showFeedback || isMatched || isSelected}
      >
        <Text style={styles.itemText}>{item}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.instructionText}>Match the pairs:</Text>
      <View style={styles.columns}>
        <View style={styles.column}>
          {shuffledCountries.map((item, index) => renderOption(item, index, 'country'))}
        </View>
        <View style={styles.column}>{shuffledCapitals.map((item, index) => renderOption(item, index, 'capital'))}</View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  instructionText: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  columns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  column: {
    width: '45%',
  },
  itemButton: {
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
  },
  selectedItemButton: {
    backgroundColor: Colors.blue70,
  },
  matchedItemButton: {
    backgroundColor: Colors.green60,
  },
  itemText: {
    textAlign: 'center',
    color: Colors.textDark,
  },
})

export default MatchPairs
