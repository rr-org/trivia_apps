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
  VStack,
} from "@gluestack-ui/themed";
import { NavigateType } from "../../../types/TypeNavigate";

export const Stand = ({ navigation }: NavigateType) => {
  return (
    <>
      <Center>
        <Heading fontSize={"$3xl"} marginBottom={30} mt={80} color="$white">
          Better luck next time
        </Heading>
        <HStack justifyContent="space-between" gap={40} mt={'$10'}>
          <Avatar bgColor="$amber600" size="lg" borderRadius="$full" mt={80}>
            <AvatarFallbackText>Sandeep Srivastava</AvatarFallbackText>
          </Avatar>
          <Avatar bgColor="$amber600" size="lg" borderRadius="$full" mb={100}>
            <AvatarFallbackText>Sandeep Srivastava</AvatarFallbackText>
          </Avatar>
          <Avatar bgColor="$amber600" size="lg" borderRadius="$full" mt={110}>
            <AvatarFallbackText>Sandeep Srivastava</AvatarFallbackText>
          </Avatar>
        </HStack>
        <VStack>
          <Center>
            <Image
              source={require("../../../assets/stand.png")}
              alt="gambar"
              w={'$72'}
              h={'$64'}
              mt={'-$10'}
            />
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
                    <AvatarFallbackText>Sandeep Srivastava</AvatarFallbackText>
                  </Avatar>
                  <Heading color="white">UserName</Heading>
                  <Heading color="$white" ml={30}>
                    Score
                  </Heading>
                </HStack>
              </Box>
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
                    <AvatarFallbackText>Sandeep Srivastava</AvatarFallbackText>
                  </Avatar>
                  <Heading color="white">UserName</Heading>
                  <Heading color="$white" ml={30}>
                    Score
                  </Heading>
                </HStack>
              </Box>
            </VStack>
          </Center>
        </VStack>
        <Box flexDirection="row" justifyContent="space-between" w={'80%'} p={'$2'} gap={10}>
          <Button rounded={'$md'} bg="red" w={'50%'} onPress={()=> navigation.navigate('home')}>
            <ButtonText>Return to Home</ButtonText>
          </Button>
          <Button rounded={'$md'} bg="$emerald500" w={'50%'} onPress={()=> navigation.navigate('finding')}>
            <ButtonText>Play Again</ButtonText>
          </Button>
        </Box>
      </Center>
    </>
  );
};

