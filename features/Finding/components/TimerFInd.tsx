import { Heading } from '@gluestack-ui/themed'
import React from 'react'
import { socket } from '../../../App';

interface Inext {
    nextPage: () => void;
}

export const TimerFInd = ({ nextPage }: Inext) => {
    const [ second, setSecond ] = React.useState(0)


    socket.on("matching", (seconds)=> {
        setSecond(seconds)
      })

    React.useEffect(() => {

        
        if ( second === 0 ) {
        
            nextPage()
        }


    }, [ second ])
    console.log('bang', second)


  return (
    <Heading size="5xl" color="$amber600">
    {second}
    </Heading>
  )
}
