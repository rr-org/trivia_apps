import {
  Avatar,
  AvatarImage,
  Card,
  HStack,
  Heading,
 
} from "@gluestack-ui/themed";
import dataDummy from "../../mocks/data.json";
import { Box } from "@gluestack-ui/themed";
import { Text } from "@gluestack-ui/themed";
export default function AvatarCard() {
  return (
    <>
      <Box gap={15} mt={'$16'}>
        <HStack flexWrap="wrap" justifyContent="center" w={'100%'}>
          {dataDummy.map(
            (
              item // Corrected: added parentheses around the JSX
            ) => (
              <Card
                key={item.id}
                w={'$24'}
                variant="elevated"
                m="$3"
                borderColor="black"
                borderWidth={1}
                backgroundColor="$blue200"
              >
                <Box gap={20}  display="flex" justifyContent="center" alignItems="center">
                  
                      <Avatar size="lg">
                        <AvatarImage source={{ uri: item.avatar }} alt="avatar" />
                      </Avatar>
                    
                    <Box display="flex"  alignItems="center" gap={3} >
                      
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
            )
          )}
        </HStack>
   
      </Box>
    </>
  );
}
