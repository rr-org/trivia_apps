import { StatusBar } from "expo-status-bar"
import Sign from "../features/sign/comonents/Sign"
import { Layout } from "../layout/Layout"
import { NavigateType } from "../types/TypeNavigate"


export const SignPage = ({ navigation }: NavigateType) => {
  return (
    <Layout>
        <Sign navigation={navigation} />
        <StatusBar style="auto" />
    </Layout>
  )
}

