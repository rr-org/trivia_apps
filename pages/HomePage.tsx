import React from 'react'
import { Layout } from '../layout/Layout'
import { Home } from '../features/home/component/Home'
import { StatusBar } from 'expo-status-bar'

export const HomePage = () => {
  return (
    <Layout>
        <Home/>
        <StatusBar style="auto" />
    </Layout>
  )
}
