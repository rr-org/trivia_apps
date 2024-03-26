import React, { useState } from "react";
import { Box, HStack, Heading, Image } from "@gluestack-ui/themed";
import FindOppCard from "../../components/FindOppCard";
import { NavigateType } from "../../../types/TypeNavigate";
import { socket } from "../../../socket";
import useStoreRoom from "../../../store/roomStore";
import useStoreUser from "../../../store/store";
import { TimerFInd } from "./TimerFInd";

interface Iroom {
  id:string,
  room:string,
  username:string,
  avatar:string
}

const FindOpp = ({ navigation }: NavigateType) => {
  const [ list , setList ] = useState<Iroom[]>([])
  const [ seconds, setSeconds ] = useState<number>(0)
  const setRoom = useStoreRoom((state)=> state.setRoom)
  const { username } = useStoreUser((state)=> state.user)
  

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

  React.useEffect(()=> {
    const index = list.findIndex((val)=> val.username === username)
    const nameRoom = list[index]?.room
    setRoom(nameRoom)
    // console.log("nameRome",nameRoom)
    // console.log(list)
  }, [list])

  return (
    <Box top={30}>
      <TimerFInd navigation={navigation}/>
      <Box gap={10} alignItems="center" mt="$10" mb="auto"  h={'100%'}>
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
          <FindOppCard data={items} key={index}/>
        ))}
        

      </Box>
    </Box>
  );
};

export default FindOpp
