import React from 'react'
import { Stand } from '../features/Result/components/Stand'
import { NavigateType } from '../types/TypeNavigate'
import { StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

export const WinnerPage = ({ navigation }: NavigateType) => {
  return (
    <LinearGradient
    colors={['#5ecdb8', '#569cdf', '#560be5']}
    style={styles.container}
    >
        <Stand navigation={navigation} />
  </LinearGradient>
  )
}
const styles = StyleSheet.create({
  container: {
  width:'100%',
  height:'100%'
  },
});