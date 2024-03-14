import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
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
  Image,
} from "@gluestack-ui/themed";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function AvatarPages() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView>
        <Box py={"$6"} mt={"$20"}>
          <Center>
            <Image
              source={require("../../../assets/logo.png")}
              w={'$40'}
              h={'$40'}
            />
          </Center>
          <Center my={20}>
            <Heading color="white" fontSize={"$3xl"}>
              Choose Your Avatar
            </Heading>
          </Center>
          <VStack gap={20}>
            <HStack gap={20} justifyContent="center">
              <Avatar bgColor="$amber600" size="md" borderRadius="$full">
                <Image
                  source={require("../../../assets/AVATAR/Ellipse 1.png")}
                />
              </Avatar>
              <Avatar bgColor="$amber600" size="md" borderRadius="$full">
                <Image
                  source={require("../../../assets/AVATAR/Ellipse 2.png")}
                />
              </Avatar>
              <Avatar bgColor="$amber600" size="md" borderRadius="$full">
                <Image
                  source={require("../../../assets/AVATAR/Ellipse 3.png")}
                />
              </Avatar>
              <Avatar bgColor="$amber600" size="md" borderRadius="$full">
                <Image
                  source={require("../../../assets/AVATAR/Ellipse 4.png")}
                />
              </Avatar>
            </HStack>
            <HStack gap={20} justifyContent="center">
              <Avatar bgColor="$amber600" size="md" borderRadius="$full">
                <Image
                  source={require("../../../assets/AVATAR/Ellipse 5.png")}
                />
              </Avatar>
              <Avatar bgColor="$amber600" size="md" borderRadius="$full">
                <Image
                  source={require("../../../assets/AVATAR/Ellipse 6.png")}
                />
              </Avatar>
              <Avatar bgColor="$amber600" size="md" borderRadius="$full">
                <Image
                  source={require("../../../assets/AVATAR/Ellipse 7.png")}
                />
              </Avatar>
              <Avatar bgColor="$amber600" size="md" borderRadius="$full">
                <Image
                  source={require("../../../assets/AVATAR/Ellipse 8.png")}
                />
              </Avatar>
            </HStack>
            <HStack gap={20} justifyContent="center">
              <Avatar bgColor="$amber600" size="md" borderRadius="$full">
                <Image
                  source={require("../../../assets/AVATAR/Ellipse 9.png")}
                />
              </Avatar>
              <Avatar bgColor="$amber600" size="md" borderRadius="$full">
                <Image
                  source={require("../../../assets/AVATAR/Ellipse 10.png")}
                />
              </Avatar>
              <Avatar bgColor="$amber600" size="md" borderRadius="$full">
                <Image
                  source={require("../../../assets/AVATAR/Ellipse 12.png")}
                />
              </Avatar>
              <Avatar bgColor="$amber600" size="md" borderRadius="$full">
                <Image
                  source={require("../../../assets/AVATAR/Ellipse 13.png")}
                />
              </Avatar>
            </HStack>
          </VStack>
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
                <InputField placeholder="Your Name" backgroundColor="$white" />
              </Input>
              <Button backgroundColor="$green500">
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
