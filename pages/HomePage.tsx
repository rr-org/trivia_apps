import React from 'react'
import { Layout } from '../layout/Layout'
import { Home } from '../features/home/component/Home'
import { StatusBar } from 'expo-status-bar'
import { NavigateType } from '../types/TypeNavigate'

export const HomePage = ({ navigation }: NavigateType) => {
  return (
    <Layout>
        <Home navigation={navigation}/>
        <StatusBar style="auto" />
    </Layout>
  )
}
