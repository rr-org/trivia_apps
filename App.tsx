
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { SignPage } from './pages/SignPage';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomePage } from './pages/HomePage';
import { QuizPage } from './pages/QuizPage';
import { CreatePages } from './pages/CreatePages';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import Constants from 'expo-constants';
import { FindingPage } from './pages/FindingPage';
import { WinnerPage } from './pages/WinnerPage';





const Stack = createNativeStackNavigator();

const clerkKey = Constants?.expoConfig?.extra?.clerkPublishableKey
export default function App() {

  return (
    <GluestackUIProvider config={config}>     
    <ClerkProvider publishableKey={clerkKey}>
        <SignedIn>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name='winner' component={WinnerPage} options={{ headerShown : false}}/>
              <Stack.Screen name='create' component={CreatePages} options={{ headerShown : false}}/>
              <Stack.Screen name='home' component={HomePage} options={{ headerShown : false}}/>
              <Stack.Screen name='finding' component={FindingPage} options={{ headerShown : false}}/>
              <Stack.Screen name='quiz' component={QuizPage} options={{ headerShown : false}}/>

            </Stack.Navigator>
          </NavigationContainer>      
        </SignedIn>
        <SignedOut>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name='sign' component={SignPage} options={{ headerShown : false}}/>
            </Stack.Navigator>
          </NavigationContainer>
        </SignedOut>
    </ClerkProvider>
    </GluestackUIProvider>  
  );
}

// const styles = StyleSheet.create({
//   container: {
//   width:'100%',
//   height:'100%'
//   },
// });
