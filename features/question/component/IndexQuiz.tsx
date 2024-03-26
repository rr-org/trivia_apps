import { Text } from '@gluestack-ui/themed'
import React from 'react'
import { NavigateType } from '../../../types/TypeNavigate'
import { socket } from '../../../socket'
import useTime from '../../../store/timeQuestion'

export const IndexQuiz = ({ navigation} : NavigateType ) => {
    // const [ indexQuiz , setIndexQuiz ] =React.useState(0)
    const setIndex = useTime((state) => state.setIndex)
    const time = useTime((state) => state.data)

    React.useEffect(()=> {

      socket.on("counter", (count)=> {
          // console.log(count)
          if( count >= 5) {
              navigation.navigate('winner')
          }
          setIndex(count)
      })
    },[time.index])

  return (
    <Text color='white' size='3xl'>{time.index}/5</Text>
  )
}
