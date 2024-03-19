import { Heading } from '@gluestack-ui/themed'
import React from 'react'

interface Inext {
    nextPage: () => void;
}

export const TimerFInd = ({ nextPage }: Inext) => {
    const [ second, setSecond ] = React.useState(5)
    React.useEffect(() => {
        const interval = setInterval(() =>{
            setSecond((prev) => prev - 1)
        }, 1000)
        
        if ( second === 0 ) {
            clearInterval(interval)
            nextPage()
        }
        return () =>  clearInterval(interval)

    }, [ second ])

  return (
    <Heading size="5xl" color="$amber600">
    {second}
    </Heading>
  )
}
