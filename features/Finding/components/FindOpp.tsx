import React, { useState, useEffect } from "react";
import { Box, HStack, Heading, Image, VStack } from "@gluestack-ui/themed";
import { Text } from "@gluestack-ui/themed";
import FindOppCard from "../../components/FindOppCard";
import { AntDesign } from "@expo/vector-icons";
import { NavigateType } from "../../../types/TypeNavigate";
import { TimerFInd } from "./TimerFInd";



export const FindOpp = ({ navigation }: NavigateType) => {
  const [timer, setTimer] = useState<number>(10); // Initial timer value in seconds

  // useEffect(() => {
  //   // Function to decrement timer every second
  //   const countdown: any = setInterval(() => {
  //     setTimer((prevTimer) => {
  //       // Decrement timer by 1 unless it's already at 0
  //       if (prevTimer > 0) {
  //         return prevTimer - 1;
  //       } else {
  //         clearInterval(countdown);
  //         navigation.navigate('quiz') // Stop the countdown if timer reaches 0
  //         return 0;
  //       }
  //     });
  //   }, 1000);

    // Clear interval when component unmounts
  //   return () => clearInterval(countdown);
  // }, []); // Empty dependency array ensures the effect runs only once
  const nextPage = () => {
    navigation.navigate('quiz')
  }

  return (
    <>
      <HStack p={10} justifyContent="space-between">
        <Image
          source={require("../../../assets/rr.png")}
          alt="gambar"
        />
        <Box p={15}>
          <AntDesign name="closecircle" size={24} color="white" />
        </Box>
      </HStack>
      <VStack gap={10} alignItems="center" mt="auto" mb="auto">
        <TimerFInd nextPage={nextPage}/>
        <Heading size="3xl" color="white">
          Finding Opponent
        </Heading>
        <Heading size="3xl" color="white">
          4/5
        </Heading>
        <FindOppCard />
        <FindOppCard />
        <FindOppCard />
        <FindOppCard />
      </VStack>
    </>
  );
};


