import { Box, Heading } from '@gluestack-ui/themed'
import React from 'react'
import { socket } from '../../../socket';
import { Image } from '@gluestack-ui/themed';
import { AntDesign } from "@expo/vector-icons";
import { NavigateType } from '../../../types/TypeNavigate';
import useStoreRoom from '../../../store/roomStore';



export const TimerFInd = ({ navigation }: NavigateType) => {
  const { room, username} = useStoreRoom((state)=> state.room)

  const leave = () =>  {
    socket.emit("leaveRoom",{ username: username, room: room })
    navigation.navigate('home')
    console.log(room)
  }
  
  return (
    <Box p={10} flexDirection="row" justifyContent="space-between" >
    <Image
      source={require("../../../assets/rr.png")}
      alt="gambar"
    />
    <Box p={15}>
      <AntDesign name="closecircle" size={24} color="white" onPress={()=>  leave()}/>
    </Box>
  </Box>
  )
}
