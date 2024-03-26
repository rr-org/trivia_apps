import { AvatarFallbackText, AvatarImage, ButtonText, Pressable, Text } from '@gluestack-ui/themed'
import { Avatar } from '@gluestack-ui/themed'
import { Box, Button } from '@gluestack-ui/themed'
import { Audio } from 'expo-av'
import React from 'react'
import { StyleSheet } from 'react-native'
import Sound from 'react-native-sound'
import TrackPlayer from 'react-native-track-player'
import useStoreUser from '../../../store/store'

interface IQuiz {
    quiz: {
        _id:string,
        question: string,
        option:string[],
        answer:string
    },
    validate: boolean
}



export const Quizex = ( { quiz, validate }: IQuiz ) => {
    const [ press, setPress] = React.useState<string>('')
    const [ point , setpoint ] = React.useState(0)
    const { avatar, username } = useStoreUser((state)=> state.user)
    // const playAudio = async () => {
    //     const soundAudio = new Audio.Sound();

    //     try {
    //         await soundAudio.loadAsync({ uri: `${quiz.question}`});
    //         await soundAudio.playAsync();

    //     } catch (error) {
    //         console.log('eror play a audio')
    //     }

    // }


    if ( validate ){
        try {
            
            if ( press === quiz?.answer){
                setpoint((prev) => prev + 100)
            }
        } catch (error) {
            console.log('eror to set point')
        }
    }
    // const validation = () => {

    //     //condition if answers is true
    //     if ( press === quiz?.answer){
    //         setpoint((prev) => prev + 100)
    //     }
    //     setValidation(true)

    // }
    // React.useEffect(() => {

    //     const startPlayback = async () => {
    //         try {
    //           await TrackPlayer.setupPlayer();
    //           await TrackPlayer.add({
    //             id: '1',
    //             url: `${quiz.question}`,
    //             title: 'Judul Audio',
    //             artist: 'Pembuat Audio'
    //           });
    //           await TrackPlayer.play();
    //         } catch (error) {
    //           console.error('Gagal memutar audio:', error);
    //         }
    //       };
      
    //       startPlayback();
      
    //       // Membersihkan efek jika komponen dibongkar
    //       return () => {
    //         TrackPlayer.reset();
    //       };

    // }, [])

  return (
    <Box alignItems='center'>
                <Button >
                    <ButtonText>play</ButtonText>
                </Button>
                {/* <audio autoPlay>
                    <source src={quiz.question}/>
                </audio> */}
                {quiz?.option?.map((items, index) => (
                    <Pressable key={index} style={style.pressable} onPress={()=> setPress(items)}>
                    <Box  bg={ !validate ? '$white' : items === quiz.answer ? "$green" : "$red"} display='flex' flexDirection='row' justifyContent='space-between' alignItems='center' w={'80%'} h={'$10'} pl={'$3'} my={'$2'} rounded={'$md'} >
                        <Text color={ validate ? "$white" : "$black" }>{items}</Text>
                        {items === press && 
                            <Avatar size='sm' mr={'$2'} >
                                { avatar ?
                                <AvatarImage source={{ uri: avatar }}  alt='bang'/>
                                    :
                                <AvatarFallbackText>{username}</AvatarFallbackText>
                            }
                            </Avatar>
                        }
                    </Box>
                    </Pressable>
                ))}
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
