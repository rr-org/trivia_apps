import React from 'react'
import { Layout } from '../layout/Layout'
import { AvatarPages } from '../features/profile/components/AvatarPages'
import { NavigateType } from '../types/TypeNavigate'
import { StatusBar } from 'expo-status-bar'

export const CreatePages = ({ navigation }: NavigateType) => {
  return (
    <Layout>
        <AvatarPages navigation={navigation}/>
        <StatusBar style="auto" />
    </Layout>
  )
}
