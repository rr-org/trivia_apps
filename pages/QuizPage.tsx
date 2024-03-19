import React from 'react'
import { Layout } from '../layout/Layout'
import { StatusBar } from 'expo-status-bar'
import { Quiz } from '../features/question/component/Quiz'
import { NavigateType } from '../types/TypeNavigate'

export const QuizPage = ({ navigation } : NavigateType) => {
  return (
    <Layout>
        <Quiz navigation={navigation} />
        <StatusBar style="auto" />
    </Layout>
  )
}


