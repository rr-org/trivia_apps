import { Box, Text } from '@gluestack-ui/themed'
import React from 'react'

interface Timeprops {
    onTimeout: ()=> void,
    validate: () => void,
    timeAgain: () => void
}
export const Timeout = ({ onTimeout, validate, timeAgain }: Timeprops) => {
    const [ sec, setSec ] = React.useState(6)

    React.useEffect(() => {
        const interval = setInterval(() =>{
            setSec(prev => prev - 1)
        }, 1000)

        if( sec === 15){
            timeAgain()
        }

        if( sec === 5 ){
            validate();
        }
        if ( sec === 0) {
            clearInterval(interval)
            setSec(5)
            onTimeout()
        }
        return () =>  clearInterval(interval)
        
    },[sec])


  return (
    
      <Text size='5xl' color='$emerald300'>00 : {sec}</Text>

  )
}
