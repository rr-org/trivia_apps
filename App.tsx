
import { StyleSheet, Text, View } from 'react-native';
import { SignPage } from './pages/SignPage';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomePage } from './pages/HomePage';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <GluestackUIProvider config={config}>      
              <NavigationContainer>
                <Stack.Navigator>
                  <Stack.Screen name='sign' component={SignPage} options={{ headerShown : false}}/>
                  <Stack.Screen name='home' component={HomePage} options={{ headerShown : false}}/>


                </Stack.Navigator>
              </NavigationContainer>       
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  container: {
  width:'100%',
  height:'100%'
  },
});
