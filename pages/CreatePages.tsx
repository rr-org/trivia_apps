import React from 'react'
import { AvatarPages } from '../features/profile/components/AvatarPages'
import { NavigateType } from '../types/TypeNavigate'
import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet } from 'react-native'

export const CreatePages = ({ navigation}: NavigateType) => {
  return (
    <LinearGradient
    colors={['#5ecdb8', '#569cdf', '#560be5']}
    style={styles.container}
    >
      <AvatarPages navigation={navigation} />
      
  </LinearGradient>
  )
}
const styles = StyleSheet.create({
  container: {
  width:'100%',
  height:'100%'
  },
});
