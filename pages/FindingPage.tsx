import React from 'react'
import { NavigateType } from '../types/TypeNavigate'
import { StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import FindOpp from '../features/Finding/components/FindOpp'

export const FindingPage = ({ navigation} : NavigateType) => {
  return (
    <LinearGradient
    colors={['#5ecdb8', '#569cdf', '#560be5']}
    style={styles.container}
    >
      <FindOpp navigation={navigation}/>
  </LinearGradient>
  )
}
const styles = StyleSheet.create({
  container: {
  width:'100%',
  height:'100%'
  },
});