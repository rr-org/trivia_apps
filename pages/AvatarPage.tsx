import React from 'react'
import { Layout } from '../layout/Layout'
import {AvatarPages} from '../features/profile/components/AvatarPages'
import { StatusBar } from 'expo-status-bar'
import { NavigateType } from '../types/TypeNavigate'

export const AvatarPage = ({ navigation }: NavigateType) => {
  return (
    <Layout>
        <AvatarPages navigation={navigation}/>
        <StatusBar style="auto" />
    </Layout>
  )
}
