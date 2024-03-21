import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet } from 'react-native'
import Home from '../features/home/component/Home'
import { NavigateType } from '../types/TypeNavigate'




export const HomePage = ({ navigation}: NavigateType) => {
  return (
    <LinearGradient
    colors={['#5ecdb8', '#569cdf', '#560be5']}
    style={styles.container}
    >
      <Home navigation={navigation}/>
  </LinearGradient>
  )
}
const styles = StyleSheet.create({
  container: {
  width:'100%',
  height:'100%'
  },
});