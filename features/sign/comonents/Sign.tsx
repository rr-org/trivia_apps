import { Box, Button, ButtonText, Image, Text } from '@gluestack-ui/themed'
import React from 'react'
// import {  View } from 'react-native'
import * as WebBroser from "expo-web-browser"
import * as Google from "expo-auth-session/providers/google"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useNavigation } from '@react-navigation/native'
import { NavigateType } from '../../../types/TypeNavigate'
import { HooksSgin } from '../hooks/HooksSgin'
import * as WebBrowser from 'expo-web-browser'
import { useAuth, useClerk, useOAuth, useUser } from '@clerk/clerk-expo'

WebBroser.maybeCompleteAuthSession();

const Sign = () => {
  // sign with google in web
  // const [ data, setData ] = React.useState(null)
  // const [ request, response, prompt] = Google.useAuthRequest({
  //   webClientId: "673624967462-ch83n92itr6hcd4v8eumcs3g261jd5jq.apps.googleusercontent.com",
  //   iosClientId: "673624967462-3lu1jtovqgpiovqqnkv0lp339ob4ck7s.apps.googleusercontent.com",
  //   androidClientId: "673624967462-ujej49o65gb9ar22lv22oc8k5nlb4sr4.apps.googleusercontent.com"
  // });
  // // const { setSign } = HooksSgin()

  // React.useEffect(() => {
  //   AsyncStorage.removeItem("@user");
  //   setData(null)
  // },[])
  
  // React.useEffect(() => {
  //   handleSignWithGoogle();
  // }, [response])

  // async function handleSignWithGoogle() {
  //   const user = await AsyncStorage.getItem("@user");
  //   if (!user) {
  //     if(response?.type === "success"){
  //       await getUser(response.authentication?.accessToken);
  //     }
  //     // console.log("token",response.authentication?.accessToken)
  //   } else {
  //     setData(JSON.parse(user))
  //   }
  // }

  // const getUser = async (token:string | undefined) => {
  //   // console.log("token",token)
  //   if (!token) return;
  //   try {
  //     const response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
  //       headers: {
  //         Authorization: `Bearer ${token}`
  //       },
  //     })
  //     const user = await response.json();
  //     await AsyncStorage.setItem("@user", JSON.stringify(user))
  //     setData(user)
  //     // setSign(user)
  //     navigation.navigate('home')
  //   } catch (error) {
  //     console.log("bang eror bang di get user")
  //   }
  // }

  // console.log("sign",data)

  // const haous = async () => {
     
    
  // }

  React.useEffect(() => {
    void WebBrowser.warmUpAsync();
    return () => {
      void WebBrowser.coolDownAsync();
    };
  }, [])

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google"})

  const onPress = React.useCallback(async() => {
    try {
      const result = await startOAuthFlow()
      const { createdSessionId, signIn, signUp, setActive  } = result;
      if (createdSessionId) {
        if (setActive) {
          setActive({ session: createdSessionId });



        } else {
          console.error("setActive is undefined");
        }

      } else {
        // Use signIn or signUp for next steps such as MFA
      }


    } catch (err) {
      console.error("OAuth error", err);
    }
  }, [])

  




  return (
    <Box width={'100%'} h={'100%'} display='flex' justifyContent='center' alignItems='center'>

      
        
        <Image 
        size='2xl' 
        source={require('../../../assets/rr.png')}
        alt='gambar'
        />

        
        <Button size='xl' bgColor='white' rounded={30} mt={100} top={3*0} onPress={() => onPress()}>
            <Image source={require('../../../assets/googleicon.png')} size='xs' alt='google'/>
            <Text color='black'>Continue Sign with Google</Text>
        </Button>

        {/* <Button size='xl' bgColor='white' rounded={30}  onPress={() => navigation.navigate('create')}>
             <Image source={require('../../../assets/googleicon.png')} size='xs' alt='google'/> 
            <Text color='black'>Continue Sign with Google</Text>
        </Button> */} 

        {/* <Button onPress={haous}>
          hapus
          
        </Button> */}
        {/* {data && <Text>{JSON.stringify(data)}</Text>} */}
        <Box position='absolute' bottom={50}>
            <Text color='$white' >by continue, you agree to the Terms and Privacy</Text>
        </Box>
            

    </Box>
  )
}
export default Sign;