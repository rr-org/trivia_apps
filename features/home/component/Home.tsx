import { Avatar, AvatarBadge, AvatarFallbackText, AvatarGroup, AvatarImage, Box, Button, ButtonIcon, Center, HStack, Image, Modal, ModalBody, ModalFooter, Text, View } from '@gluestack-ui/themed'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { ModalBackdrop } from '@gluestack-ui/themed'
import { ButtonText } from '@gluestack-ui/themed'
import BuyDiamond from '../../Diamond/components/BuyDiamond'
import { LogOut } from './LogOut'
import useStoreUser from '../../../store/store'
import { socket } from '../../../socket'
import { NavigateType } from '../../../types/TypeNavigate'
import AvatarCard from '../../components/AvatarCard'
import DiamondCard from '../../components/DiamondCard'
import axios from 'axios'


 const Home = ({navigation}: NavigateType) => {
    const { username, diamond, id } = useStoreUser((state) => state.user)
    const [ modal, setModal ] = React.useState(false)
    const [ shop, setShop ] = React.useState(false)
    const [ user, setUser ] = React.useState({
        _id:"",
        email:"",
        username:"",
        avatar:"",
        diamond:0,
        score:0
    })

    
    
    const getAvatar = async() => {
        try {
            const response = await axios.get(`https://1951-2404-8000-1095-99a-25dc-eab5-fc6d-55a0.ngrok-free.app/api/user/${id}`)
            setUser(response.data)
            
        } catch (error) {
            
        }
    }

    const startGame = () =>{
        socket.emit("joinRoom", { 
            id:user._id,
            username: username,
            avatar: user.avatar
        })
        navigation.navigate('finding' as never)
    }


    const closeModal = () => {
        setModal(false)
    }

    React.useEffect(()=> {
        getAvatar()
    }, [])
    // const { sign } = HooksSgin()
  return (
    <View h={'$full'}>
        <Box display='flex' flexDirection='row' w={'$full'}  top={30}  justifyContent='space-between' alignItems='center'>
            <Box >
                <Image source={require('../../../assets/rr.png')} size='lg' ml={'$5'} alt='logo'/>
            </Box>
            <Box mx={20} bg='$amber400'>
                <Button bgColor='$white'  w={100} gap={'$4'} h={30} onPress={() => setShop(true)}>
                    <Image source={require('../../../assets/domain.png')} w={'$10'} h={'$10'} ml={'-$16'} alt='diamond'/>
                    <Text color='$black' fontWeight='$bold'>{diamond}</Text>
                    <Image source={require('../../../assets/plusBt.png')} w={'$12'} h={'$12'} mr={'-$16'} mt={'$3'} alt='plus'/>
                </Button>
            </Box>
        </Box>
        <Box w={'$full'}  alignItems='center' flexDirection='column' pt={'$16'}>
           
            <Avatar size='2xl'>
                {user.avatar ?
                <AvatarImage source={{ uri: user.avatar  }} alt='profile'/>
                :
                <AvatarFallbackText>{user.username}</AvatarFallbackText>
            }
                
            </Avatar>
            <Avatar size='sm' mr={'-$24'} mt={'-$10'}  bg='transparent'>
                <Button bg='transparent' onPress={() => setModal(true)} >
                    <FontAwesomeIcon icon={faPenToSquare} size={20} color='white' />
                </Button>
            </Avatar>
           
            <Text color='$white' size='3xl' shadowColor='$backgroundLight950' mt={'$5'}>{user.username}</Text>
            {/* <Text color='$white' size='3xl' shadowColor='$backgroundLight950' mt={'$5'}>{email}</Text> */}

        </Box>
        
    

        <Modal isOpen={modal}
            onClose={() => {
                setModal(false)
            }}
            
            >
            <ModalBackdrop />
            <ModalBody >
                <AvatarCard onSubmit={closeModal}/>
            </ModalBody>

        </Modal>

        <Modal isOpen={shop}
            onClose={() => {
                setShop(false)
            }}
            
            >
            <ModalBackdrop />
            <ModalBody >
                {/* <BuyDiamond/> */}
                <DiamondCard onSubmit={()=> setShop(false)}/>
            </ModalBody>

        </Modal>
    


        <Box w={'$full'} h={'50%'} display='flex'  alignItems='center' pt={'$56'} >
            <Button w={'$1/2'} bg='$green500' shadowColor='$cyan100' shadowRadius={'$2'} onPress={() => startGame()} > 
                <ButtonText color={'$white'} fontWeight='$bold' >Start Game</ButtonText>
            </Button>
        </Box>
        <Box w={'$1/4'} rounded={'$lg'}  >
            <LogOut/>
        </Box>
    </View>
  )
}
export default Home