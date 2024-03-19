import { Box, Text } from '@gluestack-ui/themed'
import React from 'react'

interface Timeprops {
    onTimeout: ()=> void,
    validate: () => void,
    timeAgain: () => void
}
export const Timeout = ({ onTimeout, validate, timeAgain }: Timeprops) => {
    const [ sec, setSec ] = React.useState(5)
    // const [ sec2, setSec2 ] = React.useState(5)


    

    React.useEffect(() => {
        const interval = setInterval(() =>{
            setSec(prev => prev - 1)
        }, 1000)


        if ( sec === 0) {
            clearInterval(interval)
            validate()
            setTimeout(()=> {
                setSec(5)
                onTimeout()
                timeAgain()
            }, 5000)

        }


        return () =>  clearInterval(interval)
        
    },[sec])
    // console.log(sec2)



  return (
    
      <Text size='5xl' color='$emerald300'>00 : {sec}</Text>

  )
}
