import Sign from "../features/sign/comonents/Sign"
import { LinearGradient } from "expo-linear-gradient"
import { StyleSheet } from "react-native"


export const SignPage = () => {
  return (
    <LinearGradient
    colors={['#5ecdb8', '#569cdf', '#560be5']}
    style={styles.container}
    >
        <Sign  />
  </LinearGradient>

  )
}
const styles = StyleSheet.create({
  container: {
  width:'100%',
  height:'100%'
  },
});

