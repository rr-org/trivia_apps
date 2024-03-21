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

interface IProps {
  onSubmit:()=> void
}
export default function AvatarCard({ onSubmit }: IProps) {
  const [ choose, setChoose ] = React.useState(0)

  const submit = () => {
    // console.log("bang")
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
              <Pressable key={item.id} onPress={()=> setChoose(item.id) }>
              <Card
                w={'$24'}
                m="$3"
                borderColor="black"
                borderWidth={1}
                backgroundColor={ item.id === choose ? "$green400" : "$blue200"}

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
        <HStack justifyContent='center' gap={10} w={'$full'} >
                    <Button backgroundColor="red" width={100} onPress={() => submit()}>
                    <ButtonText>Cancel</ButtonText>
                    </Button>
                    <Button backgroundColor="$green500" width={100} onPress={() => submit()}>
                    <ButtonText>Save</ButtonText>
                    </Button>
        </HStack>
   
      </Box>
    </>
  );
}
