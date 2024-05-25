import React from 'react'
import { useTranslation } from 'react-i18next'
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { Card, Colors, Text, View } from 'react-native-ui-lib'

import { LinearGradient } from 'expo-linear-gradient'
import { Link } from 'expo-router'

import { CaretRight } from '@/components/icons'

const HomeScreen = () => {
  const { t } = useTranslation()

  return (
    <View flex useSafeArea style={{ backgroundColor: Colors.bgGrey }}>
      <ScrollView contentContainerStyle={{ paddingVertical: 20, paddingHorizontal: 10 }}>
        <View flex paddingH-10 paddingT-20>
          {/* Redesigned Top Card */}
          <Card marginB-20 padding-0 style={styles.cardShadow}>
            <LinearGradient colors={[Colors.primary, Colors.secondary]} style={styles.gradient}>
              <View style={styles.cardContent}>
                <Text text50 white marginB-10 style={styles.boldText}>
                  {t('home.screen.learn_kabiye')}
                </Text>
                <Text text70 white marginT-10>
                  {t('home.screen.learn_description')}
                </Text>
              </View>
            </LinearGradient>
          </Card>

          <View marginB-20>
            <Text text60 marginB-10 style={{ fontWeight: 'bold', color: Colors.textDark }}>
              {t('home.screen.learning_modules')}
            </Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
              <View style={{ width: '48%', marginBottom: 10 }}>
                <Card
                  padding-20
                  style={{
                    backgroundColor: Colors.white,
                    borderRadius: 12,
                    height: 150,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.2,
                    shadowRadius: 4,
                  }}
                >
                  <Link href="/module/alphabet">
                    <TouchableOpacity>
                      <View>
                        <Text text70 marginT-10 style={{ fontWeight: 'bold', color: Colors.primary }}>
                          {t('home.screen.alphabet')}
                        </Text>
                        <Text text80 marginT-10 style={{ color: Colors.textGrey }}>
                          {t('home.screen.alphabet_description')}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </Link>
                </Card>
              </View>
              <View style={{ width: '48%', marginBottom: 10 }}>
                <Card
                  padding-20
                  style={{
                    backgroundColor: Colors.white,
                    borderRadius: 12,
                    height: 150,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.2,
                    shadowRadius: 4,
                  }}
                >
                  <Link href="/module/basics">
                    <TouchableOpacity>
                      <View>
                        <Text text70 marginT-10 style={{ fontWeight: 'bold', color: Colors.primary }}>
                          {t('home.screen.basics')}
                        </Text>
                        <Text text80 marginT-10 style={{ color: Colors.textGrey }}>
                          {t('home.screen.basics_description')}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </Link>
                </Card>
              </View>
              <View style={{ width: '48%', marginBottom: 10 }}>
                <Card
                  padding-20
                  style={{
                    backgroundColor: Colors.white,
                    borderRadius: 12,
                    height: 150,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.2,
                    shadowRadius: 4,
                  }}
                >
                  <Link href="/module/vocabulary">
                    <TouchableOpacity>
                      <View>
                        <Text text70 marginT-10 style={{ fontWeight: 'bold', color: Colors.primary }}>
                          {t('home.screen.vocabulary')}
                        </Text>
                        <Text text80 marginT-10 style={{ color: Colors.textGrey }}>
                          {t('home.screen.vocabulary_description')}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </Link>
                </Card>
              </View>
              <View style={{ width: '48%', marginBottom: 10 }}>
                <Card
                  padding-20
                  style={{
                    backgroundColor: Colors.accent,
                    borderRadius: 12,
                    height: 150,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.2,
                    shadowRadius: 4,
                  }}
                >
                  <Link href="/learning">
                    <TouchableOpacity>
                      <View
                        style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '100%' }}
                      >
                        <Text text70 white style={{ fontWeight: 'bold' }}>
                          {t('home.screen.show_more')}
                        </Text>
                        <CaretRight size={24} color={Colors.textLight} style={{ marginLeft: 10 }} />
                      </View>
                    </TouchableOpacity>
                  </Link>
                </Card>
              </View>
            </View>
          </View>

          <View marginB-20>
            <Text text60 marginB-10 style={{ fontWeight: 'bold', color: Colors.textDark }}>
              {t('home.screen.tips_resources')}
            </Text>
            <Card
              marginB-10
              padding-20
              style={{
                backgroundColor: Colors.white,
                borderRadius: 12,
                flexDirection: 'row',
                alignItems: 'center',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
              }}
            >
              <Link
                href="/resources/tips"
                style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                  <View style={{ flex: 1 }}>
                    <Text text70 marginT-10 style={{ fontWeight: 'bold', color: Colors.primary }}>
                      {t('home.screen.learning_tips')}
                    </Text>
                    <Text text80 marginT-10 style={{ color: Colors.textGrey }}>
                      {t('home.screen.learning_tips_description')}
                    </Text>
                  </View>
                  <CaretRight size={24} />
                </TouchableOpacity>
              </Link>
            </Card>
            <Card
              marginB-10
              padding-20
              style={{
                backgroundColor: Colors.white,
                borderRadius: 12,
                flexDirection: 'row',
                alignItems: 'center',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
              }}
            >
              <Link
                href="/resources/materials"
                style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                  <View style={{ flex: 1 }}>
                    <Text text70 marginT-10 style={{ fontWeight: 'bold', color: Colors.primary }}>
                      {t('home.screen.reference_materials')}
                    </Text>
                    <Text text80 marginT-10 style={{ color: Colors.textGrey }}>
                      {t('home.screen.reference_materials_description')}
                    </Text>
                  </View>
                  <CaretRight size={24} />
                </TouchableOpacity>
              </Link>
            </Card>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  cardShadow: {
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  gradient: {
    borderRadius: 12,
    padding: 20,
  },
  cardContent: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  boldText: {
    fontWeight: 'bold',
  },
})

export default HomeScreen
