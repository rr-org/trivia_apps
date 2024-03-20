import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { Avatar, AvatarImage, Box, Button, ButtonText, HStack, Input,  Text } from '@gluestack-ui/themed'
import React from 'react'
import Sound from 'react-native-sound'
import question from "../../../mocks/quiz.json"
import { Alert, Pressable, StyleSheet } from 'react-native'
import { Timeout } from './Timeout'
import { Audio } from 'expo-av'
import { NavigateType } from '../../../types/TypeNavigate'
import { socket } from '../../../App'


interface IQuiz {
    _id:string,
    question: string,
    option:string[],
    answer:string
}
export const Quiz = ({ navigation} : NavigateType ) => {

    const [ quiz, setquiz ] = React.useState<IQuiz>({
        _id:"",
        question: "",
        option:[],
        answer:""
    })

    const [ press, setPress] = React.useState<string>('')
    const [ currentIndex, setCurrentIndex ] = React.useState(0)
    const [ indexQuiz , setIndexQuiz ] =React.useState(0)
    const [ validation, setValidation ] = React.useState(false)
    const [ point , setpoint ] = React.useState(0)

    socket.on("question", (data) => {
        setquiz(data)
    })

    socket.on("counter", (count)=> {
        console.log(count)
        // if( count >= 5) {
        //     navigation.navigate('winner')
            
        // }
        setIndexQuiz(count)
    })

    // socket.on("timer", (seconds)=> {
    //     setCurrentIndex(seconds)
    //     if (seconds === 0){
    //         setValidation(true)

    //         setTimeout(()=> {
    //             if( indexQuiz === 5){
    //                 navigation.navigate('winner')
    //             }
    //             setValidation(false)
    //             setIndexQuiz((prev)=> prev + 1)
    
    //         },2000)
    //     }

    // })




    // React.useEffect(()=> {

    //     if ( currentIndex <= question.length ){
    //         setquiz(question[currentIndex])
    //     } else {
    //         return;
    //     }
        
    // },[question, currentIndex])
    // React.useEffect(() => {
    //     playAudio()
    //     if ( currentIndex === question.length ){
    //         navigation.navigate('winner')
            
    //     }
    // }, [quiz])


    // console.log("isi", currentIndex)
    const onTimeout = () => {
        // setCurrentIndex( prev => prev + 1)
        // setPress('')
        // setIndexQuiz((prev)=> prev + 1)
    }


    const validate = () => {

        if ( press === quiz?.answer){
            setpoint((prev) => prev + 100)
        }
        setValidation(true)
    }

    const timeAgain = () => [
        setValidation(false)
    ]

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
                <Timeout onTimeout={onTimeout} validate={validate} timeAgain={timeAgain}/>
                {/* <Text size='5xl' color='$emerald300'>00 : {currentIndex}</Text> */}
            </Box>
            <Box h={'$40'} alignItems='center'>
                <Text color='white' size='6xl'>ini suara</Text>
            </Box>
            
            <Box alignItems='center'>
                {/* <Text size='4xl' color='white'>{quiz.question}</Text> */}
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
                <Text color='white' size='3xl'>{indexQuiz}/5</Text>
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
