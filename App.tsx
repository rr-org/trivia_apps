
import { SignPage } from './pages/SignPage';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomePage } from './pages/HomePage';
import { QuizPage } from './pages/QuizPage';
import { CreatePages } from './pages/CreatePages';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import Constants from 'expo-constants';
import { FindingPage } from './pages/FindingPage';
import { WinnerPage } from './pages/WinnerPage';







const Stack = createNativeStackNavigator();

const clerkKey = Constants?.expoConfig?.extra?.clerkPublishableKey
export default function App() {

  return (
    
       
    <ClerkProvider publishableKey={clerkKey}>
        <SignedIn>
          <GluestackUIProvider config={config}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name='create' component={CreatePages} options={{ headerShown : false}}/>
              <Stack.Screen name='home' component={HomePage} options={{ headerShown : false}}/>
              <Stack.Screen name='finding' component={FindingPage} options={{ headerShown : false}}/>
              <Stack.Screen name='quiz' component={QuizPage} options={{ headerShown : false}}/>
              <Stack.Screen name='winner' component={WinnerPage} options={{ headerShown : false}}/>
            </Stack.Navigator>
          </NavigationContainer>      
          </GluestackUIProvider>
        </SignedIn>
        <SignedOut>
          <GluestackUIProvider config={config}>  
            <SignPage/>
          </GluestackUIProvider>
        </SignedOut>
    </ClerkProvider>
  );
}

