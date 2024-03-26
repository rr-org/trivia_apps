import React from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
} from "react-native";
import {
  Button,
  ButtonText,
  Avatar,
  Box,
  Center,
  VStack,
  Input,
  InputField,
  Heading,
  AvatarImage,
  Image,
  
} from "@gluestack-ui/themed";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigateType } from "../../../types/TypeNavigate";
import AV from "../../../mocks/avatar.json"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import useStoreUser from "../../../store/store";
import { useUser } from "@clerk/clerk-expo";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";



interface Iuser {
  id: string,
  avatar: string | null,
  username: string | null,
  email:string,
  score:number,
  diamond:number
}

interface IAvatar {
  _id: string,
  image: string,
  price: string,
  isLocked:boolean,
  eqquiped: boolean,
}


export const AvatarPages = ({ navigation}: NavigateType) => {
 const [ data, setData] = React.useState("")
 const [ name, setName ] = React.useState("")
 const setId = useStoreUser((state)=> state.setId)
 const setAvatar = useStoreUser((state)=> state.setAvatar)
 const setUsername = useStoreUser((state) => state.setUsername)
 const setEmail = useStoreUser((state)=> state.setEmail)
 const setDiamond = useStoreUser((state)=> state.setDiamond)
 const [ avatar, setAvatars ] = React.useState<IAvatar[]>([])
 const [ aa, setAA ] = React.useState<Iuser>({
  id: "",
  avatar: "",
  username: "",
  email:"",
  score:0,
  diamond:0
 })

 
 // for to get email address
 const { user } = useUser()
 const emailAddress =  user?.emailAddresses[0]!.emailAddress
 const userName = user?.firstName
//  console.log("login",userName )
const regis = async() => {
  try {
    const response = await axios.post("https://4211-2404-8000-1095-99a-25dc-eab5-fc6d-55a0.ngrok-free.app/api/register", {
      email:emailAddress
    })

    setAA(response.data.data)
    setId(response.data.data.id)
    setAvatar(response.data.data.avatar)
    setUsername(response.data.data.username)
    setEmail(emailAddress!.toString())
    setDiamond(response.data.data.diamond)

    // console.log("state", aa)
    if ( response.data.data.username ){
      navigation.navigate('home')
    }

  } catch (error) {
    console.log("eror",error)
  }
}

const avatarImage = async( ) => {
  try{
    const response = await axios.get("https://1951-2404-8000-1095-99a-25dc-eab5-fc6d-55a0.ngrok-free.app/api/avatar ")
    // console.log("response", response.data)
    setAvatars(response.data)
  } catch (error) {
    console.log("eror get data avatar")
  }
}

const postQuiped = async() => {
  try {
    const response = await axios.patch("https://4211-2404-8000-1095-99a-25dc-eab5-fc6d-55a0.ngrok-free.app/api/user/first", {
      email:emailAddress,
      username:name,
      avatar:data
    })
    if( response.data ){
      navigation.navigate('home')
    }
  } catch (error) {
    
  }
}

 React.useEffect(() => {
  regis()
  avatarImage()

}, [])



const handleSubmit = () => {

  setAvatar(data)
  setUsername(name)
  postQuiped()
  if ( !name ){
    Alert.alert("username gk boleh kosong")
  }
}

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView  >
        <Box py={"$6"} mt={"$10"}>
          <Center >
            <Image
              source={require("../../../assets/rr.png")}
              w={'$40'}
              h={'$40'}
              mt={'$10'}
              alt="igame"
            />
          </Center>
          <Center my={20}>
            <Heading color="white" fontSize={"$3xl"}>
              Choose Your Avatar
            </Heading>
          </Center>
          <Center>
          <Box flexDirection="row" flexWrap="wrap" gap={20} justifyContent="center" w={'70%'} >
            {avatar.map((items, index) => (
              <Pressable key={index} onPress={()=> setData(items.image)}>
                <Avatar bgColor="$amber600" size={ data === items.image ? "lg" : "md"} borderRadius="$full">
                  <AvatarImage
                    alt="igame"
                    source={{ uri: items.image}}
                    />                  
                </Avatar>
                { data === items.image && 
                <Box w={'$5'} h={'$5'} bg="white" rounded={'$full'} p={'$1'} alignItems="center"  ml={'$10'} mt={'-$5'}>
                  <FontAwesomeIcon icon={faCheck} />
                </Box>
                }
              </Pressable>
            ))}
          </Box>
          </Center>
          

          <Center>
            <VStack gap={10} mt={"$10"} width={"$64"}>
              <Input
                variant="outline"
                size="lg"
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}
              >
                <MaterialCommunityIcons
                  name="pencil-box-outline"
                  size={41}
                  color="gray"
                  backgroundColor="white"
                  marginTop="auto"
                  marginBottom="auto"
                />
                <InputField type="text" placeholder="Your Name" backgroundColor="$white"  onChangeText={(value)=> setName(value)} />
                
              </Input>
              <Button 
              backgroundColor="$green500" 
              onPress={() => 
                handleSubmit()
              }>
                <ButtonText fontWeight={"$extrabold"} fontSize={"$xl"}>
                  Continue
                </ButtonText>
              </Button>
            </VStack>
          </Center>
        </Box>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
