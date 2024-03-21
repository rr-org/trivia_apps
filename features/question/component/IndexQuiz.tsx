import { Text } from '@gluestack-ui/themed'
import React from 'react'
import { socket } from '../../../App'
import { NavigateType } from '../../../types/TypeNavigate'

export const IndexQuiz = ({ navigation} : NavigateType ) => {
    const [ indexQuiz , setIndexQuiz ] =React.useState(0)

    socket.on("counter", (count)=> {
        // console.log(count)
        if( count >= 5) {
            navigation.navigate('winner')
            
        }
        setIndexQuiz(count)
    })

  return (
    <Text color='white' size='3xl'>{indexQuiz}/5</Text>
  )
}
