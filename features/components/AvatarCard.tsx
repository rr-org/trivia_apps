import {
  Avatar,
  AvatarImage,
  Button,
  ButtonText,
  Card,
  HStack,
  Heading,
  Pressable,
 
} from "@gluestack-ui/themed";
import dataDummy from "../../mocks/data.json";
import { Box } from "@gluestack-ui/themed";
import { Text } from "@gluestack-ui/themed";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import useStoreUser from "../../store/store";

interface IProps {
  onSubmit:()=> void
}
export default function AvatarCard({ onSubmit }: IProps) {
  const [ choose, setChoose ] = React.useState(0)
  const [ id, setId ] = React.useState(0)
  const [ miskin, setMiskin ] = React.useState(false)
  const { diamond} = useStoreUser((state)=> state.user)

  const submit = () => {
    // console.log("bang")
    if( diamond >= choose ){

      onSubmit()
    } else {
      setMiskin(true)
      setTimeout(()=> {
        setMiskin(false)
      }, 5000)
    }

  }
  const cancel = () => {
    onSubmit()
  }

  return (
    <>
      <Box gap={15} mt={'$16'}>
        <HStack flexWrap="wrap" justifyContent="center" w={'100%'}>
          {dataDummy.map(
            (
              item // Corrected: added parentheses around the JSX
            ) => (
              <Pressable key={item.id} onPress={()=> {setChoose(item.diamond), setId(item.id)} }>
              <Card
                w={'$24'}
                m="$3"
                borderColor="black"
                borderWidth={1}
                backgroundColor={ item.id === id ? "$green400" : "$blue200"}

              >
                <Box gap={20}  display="flex" justifyContent="center" alignItems="center">
                  
                      <Avatar size="lg">
                        <AvatarImage source={{ uri: item.avatar }} alt="avatar" />
                      </Avatar>
                    
                    <Box display="flex" flexDirection="row"  alignItems="center" gap={3} >
                      
                      <Avatar
                      bg="transparent"
                      size="sm"
                      >
                        <AvatarImage w={'$7'} h={'$7'} source={require("../../assets/diamond.png")} alt="diamond"/>
                      </Avatar>
                      <Text  color="$amber600" size="md">{item.diamond}</Text>
                    </Box>
                  
                </Box>
              </Card>
              </Pressable>
            )
          )}
        </HStack>
        <Box>
        <Box h={'$20'}>
            {miskin && 
            <Box flexDirection="row" p={'$2'} bg="$white" rounded={'$md'}>
              <FontAwesomeIcon icon={faCircleExclamation} size={55} color="red"/>
              <Text color="$red" size="xl"  textAlign="center" > Diamond Tidak Cukup Silahkan Top Up Terlebih Dahulu!!</Text>
            </Box>
            }
          </Box>
        <HStack justifyContent='center' gap={10} w={'$full'} >
                    <Button backgroundColor="red" width={100} onPress={() => cancel()}>
                    <ButtonText>Cancel</ButtonText>
                    </Button>
                    <Button backgroundColor="$green500" width={100} onPress={() => submit()}>
                    <ButtonText>Save</ButtonText>
                    </Button>
        </HStack>
   
        </Box>
      </Box>
    </>
  );
}
