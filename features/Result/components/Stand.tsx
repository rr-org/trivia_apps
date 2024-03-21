import {
  Avatar,
  AvatarFallbackText,
  Box,
  Button,
  ButtonText,
  Center,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { NavigateType } from "../../../types/TypeNavigate";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import React from "react";


const data = [
  {
    name: "bang",
    score: 1000
  },
  {
    name: "iya dah",
    score: 1200
  },
  {
    name: "baya",
    score: 5000
  },
  {
    name: "whts",
    score: 1150
  },
  {
    name: "gass",
    score: 4000
  }
]

export const Stand = ({ navigation }: NavigateType) => {
  //state for winner or lose text
  const [ winner, setWinner ] = React.useState(false)

  //sort for to data max to min
  const sortedData = [...data].sort((a, b) => b.score - a.score);
  //sort for to data min to max( reverse )
  const reversedData = [...sortedData].reverse();
  //set data to 2 index
  const topTwoData = reversedData.slice(0, 2);


  
  return (
    <Box w={'$full'} h={'$full'} alignItems="center" > 
        <Box w={'$full'} h={'50%'}  mt={'$24'}>
          { winner ?

            <Box h={'$20'}>
              <Text fontSize={"$3xl"}   color="$white" textAlign="center">
                !! Congrats !!
              </Text>
              <Text fontSize={"$3xl"}  color="$white" textAlign="center">
                your get <Text fontSize={"$3xl"} color="$red">1</Text> Diamond
              </Text>
            </Box>

            :

            <Box h={'$20'}>
              <Text fontSize={"$3xl"}  color="$white" textAlign="center">
                Better luck next time
              </Text>
            </Box>
            
          }


          <Box w={'100%'}  pt={'$10'} >

            <Box flexDirection="row" h={'auto'}  width={'$full'} justifyContent="center" gap={'$10'}>
              <Box alignItems="center" mt={'$16'}>
                <Avatar bgColor="$amber600" size="lg" borderRadius="$full" >
                  <AvatarFallbackText>{sortedData[1].name}</AvatarFallbackText>
                </Avatar>
                  <Text color="$white" size="2xl">{sortedData[1].name}</Text>
              </Box>
              <Box alignItems="center" mt={'-$5'}>
                <FontAwesomeIcon icon={faCrown} size={30} color="gold"/>
                <Avatar bgColor="$amber600" size="lg" borderRadius="$full" >
                  <AvatarFallbackText>{sortedData[0].name}</AvatarFallbackText>
                </Avatar>
                <Text color="$white" size="2xl">{sortedData[0].name}</Text>
              </Box>
              <Box alignItems="center"  mt={'$20'}>
                <Avatar bgColor="$amber600" size="lg" borderRadius="$full" >
                  <AvatarFallbackText>{sortedData[2].name}</AvatarFallbackText>
                </Avatar>
                <Text color="$white" size="2xl">{sortedData[2].name}</Text>
              </Box>
            </Box>

            <Box w={'$full'} alignItems="center" h={'$full'} mt={'-$16'} >
            <Image
                source={require("../../../assets/stand.png")}
                alt="gambar"
                w={'$72'}
                h={'$64'}
                />
            </Box>
          </Box>
        </Box>

        <Box h={'$48'} mt={'$12'} >
          
            <VStack
              borderColor="white"
              borderWidth={2}
              py={15}
              px={15}
              width={350}
              borderRadius={5}
              gap={5}
              backgroundColor="white"
            >

              {topTwoData.map((items, index)=> (
                <Box
                  borderColor="white"
                  borderWidth={2}
                  py={10}
                  px={15}
                  w={"$full"}
                  borderRadius={5}
                  backgroundColor="rgba(0, 0, 0, 0.3)"
                >
                  <HStack alignItems="center" gap={10}>
                    <Avatar bgColor="$amber600" size="md" borderRadius="$full">
                      <AvatarFallbackText>{items.name}</AvatarFallbackText>
                    </Avatar>
                    <Box flexDirection="row" gap={65} >
                      <Text color="white" size="2xl">{items.name}</Text>
                      <Text color="$white"  size="2xl">
                      Score: {items.score}
                      </Text>
                    </Box>
                    </HStack>
                </Box>
              ))}

              
              
            </VStack>
          
        </Box>
        <Box flexDirection="row" justifyContent="space-between" w={'100%'} p={'$4'}  >
          <Button rounded={'$md'} bg="red" w={'45%'} onPress={()=> navigation.navigate('home')}>
            <ButtonText>Return to Home</ButtonText>
          </Button>
          <Button rounded={'$md'} bg="$emerald500" w={'45%'} onPress={()=> navigation.navigate('finding')}>
            <ButtonText>Play Again</ButtonText>
          </Button>
        </Box>
      
    </Box>
  );
};

