import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { StyleSheet } from 'react-native'

export const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <LinearGradient
    colors={['#5ecdb8', '#569cdf', '#560be5']}
    style={styles.container}
    >
          {children} 
  </LinearGradient>
  )
}
const styles = StyleSheet.create({
    container: {
    width:'100%',
    height:'100%'
    },
  });

