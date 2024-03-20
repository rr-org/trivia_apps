import { Avatar, AvatarBadge, AvatarGroup, AvatarImage, Box, Button, ButtonIcon, Center, HStack, Image, Modal, ModalBody, ModalFooter, Text, View } from '@gluestack-ui/themed'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPen, faPenSquare, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { ModalBackdrop } from '@gluestack-ui/themed'
import ChooseAvatar from '../../profile/components/ChooseAvatar'
import { ButtonText } from '@gluestack-ui/themed'
import BuyDiamond from '../../Diamond/components/BuyDiamond'
import { NavigateType } from '../../../types/TypeNavigate'
import { LogOut } from './LogOut'
import { useUser } from '@clerk/clerk-expo'
import { socket } from '../../../App'
import useStoreUser from '../../../store/store'


export const Home = ({ navigation }:NavigateType) => {
    const [ modal, setModal ] = React.useState(false)
    const [ shop, setShop ] = React.useState(false)
    const { username, diamond, email } = useStoreUser((state) => state.user)
    
    const { user } = useUser()
    
    const startGame = () =>{
        socket.emit("joinRoom", { 
            username: username
        })

        navigation.navigate('finding') 
    }
   
    // const { sign } = HooksSgin()
  return (
    <View h={'$full'}>
        <Box display='flex' flexDirection='row' w={'$full'}  top={20}  justifyContent='space-between' alignItems='center'>
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
                <AvatarImage source={require('../../../assets/fotoAI.jpg')} alt='profile'/>
            </Avatar>
            <Avatar size='sm' mr={'-$24'} mt={'-$10'}  bg='transparent'>
                <Button bg='transparent' onPress={() => setModal(true)} >
                    <FontAwesomeIcon icon={faPenToSquare} size={20} color='white' />
                </Button>
                
            </Avatar>
           
            <Text color='$white' size='3xl' shadowColor='$backgroundLight950' mt={'$5'}>{username}</Text>
            {/* <Text color='$white' size='3xl' shadowColor='$backgroundLight950' mt={'$5'}>{email}</Text> */}

        </Box>
        
    

        <Modal isOpen={modal}
            onClose={() => {
                setModal(false)
            }}
            
            >
            <ModalBackdrop />
            <ModalBody>
                <ChooseAvatar/>
                <ModalFooter>
                
                <HStack justifyContent='center' gap={10} w={'$full'} >
                    <Button backgroundColor="red" width={100} onPress={() => setModal(false)}>
                    <ButtonText>Cancel</ButtonText>
                    </Button>
                    <Button backgroundColor="$green500" width={100} onPress={() => setModal(false)}>
                    <ButtonText>Save</ButtonText>
                    </Button>
                </HStack>
                
            </ModalFooter>
            </ModalBody>

        </Modal>

        <Modal isOpen={shop}
            onClose={() => {
                setShop(false)
            }}
            
            >
            <ModalBackdrop />
            <ModalBody>
                <BuyDiamond/>
                <ModalFooter>
                
                <HStack justifyContent='center' gap={10} w={'$full'} >
                    <Button backgroundColor="red" width={100} onPress={() => setShop(false)}>
                    <ButtonText>Cancel</ButtonText>
                    </Button>
                    <Button backgroundColor="$green500" width={100} onPress={() => setShop(false)}>
                    <ButtonText>Purchase</ButtonText>
                    </Button>
                </HStack>
                
            </ModalFooter>
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
