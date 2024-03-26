import { Box, Text } from '@gluestack-ui/themed'
import React from 'react'
import { socket } from '../../../socket'
import { play } from 'react-native-track-player/lib/trackPlayer'
import useTime from '../../../store/timeQuestion'

interface Timeprops {
    validate: () => void,
    timeAgain: () => void,
    playaudio:()=> void
}
export const Timeout = ({ validate, timeAgain, playaudio }: Timeprops) => {
    // const [ sec, setSec ] = React.useState(0)
    const setTime = useTime((state) => state.setTime)
    const time = useTime((state) => state.data)
    React.useEffect(()=> {
        socket.on("timer", (seconds)=> {
            setTime(seconds)
            if( seconds === 14 ){
                playaudio()
            }
            if( seconds === 0 ){
                validate()
                setTimeout(()=> {
                    timeAgain()
                },6000)
            }
        })
    }, [time.time])

    


  return (
    
      <Text size='5xl' color='$emerald300'>00 : {time.time}</Text>

  )
}
