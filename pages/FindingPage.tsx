import React from 'react'
import { Layout } from '../layout/Layout'
import{ FindOpp } from '../features/Finding/components/FindOpp'
import { NavigateType } from '../types/TypeNavigate'
import { StatusBar } from 'expo-status-bar'

export const FindingPage = ({ navigation} : NavigateType) => {
  return (
    <Layout>
        <FindOpp navigation={navigation}/>
        <StatusBar style="auto" />
    </Layout>
  )
}
