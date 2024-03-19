import React from 'react'
import { Layout } from '../layout/Layout'
import { Stand } from '../features/Result/components/Stand'
import { NavigateType } from '../types/TypeNavigate'

export const WinnerPage = ({ navigation }: NavigateType) => {
  return (
    <Layout>
        <Stand navigation={navigation}/>
    </Layout>
  )
}
