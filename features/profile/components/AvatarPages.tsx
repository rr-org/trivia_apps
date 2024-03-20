import React, { ChangeEvent } from "react";
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
  HStack,
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

interface IAvatar {
  avatar: string,
  kode: string
}

interface IInputAvatar {
  avatar: string,
  name: string
}

export const AvatarPages = ({ navigation }:NavigateType ) => {
 const [ data, setData] = React.useState("")
 const [ name, setName ] = React.useState("")
 const setAvatar = useStoreUser((state)=> state.setAvatar)
 const setUsername = useStoreUser((state) => state.setUsername)
 const setEmail = useStoreUser((state)=> state.setEmail)
 const [ aa, setAA ] = React.useState<IInputAvatar>({
  avatar:"",
  name:""
 })
 const [ avatar, setAvatars ] = React.useState<IAvatar[]>([])

 // for to get email address
 const { user } = useUser()
 const emailAddress =  user?.emailAddresses[0]!.emailAddress
//  console.log("login", emailAddress)


 React.useEffect(() => {
  setAvatars(AV)
}, [])



const handleSubmit = () => {

  setEmail(emailAddress!.toString())
  setAvatar(data)
  setUsername(name)
  if(name){
    navigation.navigate('home')
  } else {
    Alert.alert('Error', 'Username dont empty')
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
              <Pressable key={index} onPress={()=> setData(items.kode)}>
                <Avatar bgColor="$amber600" size={ data === items.kode ? "lg" : "md"} borderRadius="$full">
                  <AvatarImage
                    alt="igame"
                    source={require("../../../assets/fotoAI.jpg")}
                  
                    />                  
                </Avatar>
                { data === items.kode && 
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
