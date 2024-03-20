import React, { useState, useEffect } from "react";
import { Box, HStack, Heading, Image, VStack } from "@gluestack-ui/themed";
import { Text } from "@gluestack-ui/themed";
import FindOppCard from "../../components/FindOppCard";
import { AntDesign } from "@expo/vector-icons";
import { NavigateType } from "../../../types/TypeNavigate";
import { TimerFInd } from "./TimerFInd";
import { socket } from "../../../App";
import useStoreUser from "../../../store/store";

interface Iroom {
  id:string,
  room:string,
  username:string
}

export const FindOpp = ({ navigation }: NavigateType) => {
  const [ list , setList ] = useState<Iroom[]>([])
  const [ seconds, setSeconds ] = useState<number>(0)


  socket.on("usersList", (data) => {
    setList(data)
  })

  socket.on("matching", (seconds)=> {
    setSeconds(seconds)
    if ( seconds === 0 ){

      setTimeout(()=> {
      navigation.navigate('quiz')
      }, 1000)
    }
  })


  // console.log("list user matching", list, seconds)


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
        {/* <TimerFInd nextPage={nextPage}/> */}
        <Heading size="5xl" color="$amber600">
          {seconds}
        </Heading>
        <Heading size="3xl" color="white">
          Finding Opponent
        </Heading>
        <Heading size="3xl" color="white">
          {list.length}/5
        </Heading>
        {list.map((items, index) => (
          <FindOppCard username={items.username}/>
        ))}
        

      </VStack>
    </>
  );
};


