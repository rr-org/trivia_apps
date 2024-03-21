import { Box, Text } from '@gluestack-ui/themed'
import React from 'react'
import { socket } from '../../../App'

interface Timeprops {
    validate: () => void,
    timeAgain: () => void
}
export const Timeout = ({ validate, timeAgain }: Timeprops) => {
    const [ sec, setSec ] = React.useState(0)

    socket.on("timer", (seconds)=> {
        setSec(seconds)
        if( seconds === 0 ){
            validate()
            setTimeout(()=> {
                timeAgain()
            },6000)
        }
    })
    


  return (
    
      <Text size='5xl' color='$emerald300'>00 : {sec}</Text>

  )
}
