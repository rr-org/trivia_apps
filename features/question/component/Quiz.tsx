import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { Avatar, AvatarImage, Box, Button, ButtonText, HStack, Input,  Text } from '@gluestack-ui/themed'
import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { Timeout } from './Timeout'
import { Audio } from 'expo-av'
import { NavigateType } from '../../../types/TypeNavigate'
import { IndexQuiz } from './IndexQuiz'
import { socket } from '../../../socket'


interface IQuiz {
    _id:string,
    question: string,
    option:string[],
    answer:string
}
export const Quiz = ({ navigation} : NavigateType ) => {

    // state for save question
    const [ quiz, setquiz ] = React.useState<IQuiz>({
        _id:"",
        question: "",
        option:[],
        answer:""
    })
    // state for comparison answer user
    const [ press, setPress] = React.useState<string>('')
    //state for condition validate true or false a answers
    const [ validation, setValidation ] = React.useState(false)
    //state for point if user true a answer
    const [ point , setpoint ] = React.useState(0)


    //socket to get question from backend and set to state quiz
    socket.on("question", (data) => {
        setquiz(data)
        playAudio()
    })

    //function for validate a answer of the true
    const validate = () => {

        //condition if answers is true
        if ( press === quiz?.answer){
            setpoint((prev) => prev + 100)
        }

        setValidation(true)
    }


    //set default validate/ wipe a validate
    const timeAgain = () => [
        setValidation(false)
    ]


    //function play a audio
    const playAudio = async () => {
        const soundAudio = new Audio.Sound();

        try {
            await soundAudio.loadAsync({ uri: `${quiz.question}`}, { shouldPlay: true});
            await soundAudio.playAsync();

        } catch (error) {
            console.log('eror play a audio')
        }

    }



  return (
    <Box display='flex' justifyContent='center' alignItems='center'  h={'100%'}>
        <Box bg='rgba(0,0,0,0.4)' w={'90%'} h={'87%'} rounded={'$md'} >
            <Box   display='flex' alignItems='flex-end' h={'10%'} p={'$5'}>
                <HStack alignItems='center' gap={10} >
                    <FontAwesomeIcon icon={faTrophy} size={30} color='gold' />
                    <Text color='white' fontWeight='$bold' fontSize={'$2xl'}>{point}</Text>
                </HStack>
            </Box>

            <Box h={'6%'} alignItems='center'>
                <Timeout validate={validate} timeAgain={timeAgain}/>
            </Box>
            <Box h={'$40'} alignItems='center'>
                <Text color='white' size='6xl'>ini suara</Text>
            </Box>
            
            <Box alignItems='center'>
                <Button onPress={playAudio}>
                    <ButtonText>play</ButtonText>
                </Button>
                {quiz?.option?.map((items, index) => (
                    <Pressable key={index} style={style.pressable} onPress={()=> setPress(items)}>
                    <Box  bg={ !validation ? '$white' : items === quiz.answer ? "$green" : "$red"} display='flex' flexDirection='row' justifyContent='space-between' alignItems='center' w={'80%'} h={'$10'} pl={'$3'} my={'$2'} rounded={'$md'} >
                        <Text color={ validation ? "$white" : "$black" }>{items}</Text>
                        {items === press && 
                            <Avatar size='sm' mr={'$2'} >
                                <AvatarImage source={require('../../../assets/fotoAI.jpg')}  alt='bang'/>
                            </Avatar>
                        }
                    </Box>
                    </Pressable>
                ))}
            </Box>
                
            
            <Box alignItems='center' mt={'$20'}>
                <IndexQuiz navigation={navigation}/>
            </Box>
        </Box>
    </Box>
  )
}

const style = StyleSheet.create({
    pressable:{
        width:'100%',
        alignItems:'center',
        padding:'auto'
    }
})
