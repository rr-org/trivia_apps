import React from 'react'
import { Quiz } from '../features/question/component/Quiz'
import { NavigateType } from '../types/TypeNavigate'
import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet } from 'react-native'

export const QuizPage = ({ navigation } : NavigateType) => {
  return (
    <LinearGradient
    colors={['#5ecdb8', '#569cdf', '#560be5']}
    style={styles.container}
    >
      <Quiz navigation={navigation}/>
  </LinearGradient>
  )
}
const styles = StyleSheet.create({
  container: {
  width:'100%',
  height:'100%'
  },
});

