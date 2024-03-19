import React from 'react'
import { Layout } from '../layout/Layout'
import{ FindOpp } from '../features/Finding/components/FindOpp'
import { NavigateType } from '../types/TypeNavigate'

export const FindingPage = ({ navigation} : NavigateType) => {
  return (
    <Layout>
        <FindOpp navigation={navigation}/>
    </Layout>
  )
}
