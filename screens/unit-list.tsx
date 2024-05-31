import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native'
import { Card, Colors, Text, View } from 'react-native-ui-lib'

import { Link } from 'expo-router'

import { units } from '@/utils/units'

const UnitListScreen = () => {
  return (
    <View flex useSafeArea style={{ backgroundColor: Colors.bgGrey }}>
      <ScrollView contentContainerStyle={{ paddingVertical: 20, paddingHorizontal: 10 }}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {units.map((unit) => (
            <View style={{ width: '48%', marginBottom: 10 }} key={unit.id}>
              <Card
                paddingH-15
                paddingV-10
                style={{
                  backgroundColor: Colors.white,
                  borderRadius: 12,
                  height: 160,
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.2,
                  shadowRadius: 4,
                }}
              >
                <Link href={`/unit/${unit.id}`} asChild>
                  <TouchableOpacity>
                    <View>
                      <Text text70 marginT-10 style={{ fontWeight: 'bold', color: Colors.primary }}>
                        {unit.name}
                      </Text>
                      <Text text80 marginT-10 style={{ color: Colors.textGrey }}>
                        {unit.description}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </Link>
              </Card>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

export default UnitListScreen
