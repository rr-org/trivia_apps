import {
  Button,
  VStack,
  HStack,
  Card,
  Center,
  Avatar,
  Heading,
  ButtonText,
  Box,
  Pressable,
} from "@gluestack-ui/themed";
import dataDummy from "../../mocks/diamond.json";
import { Image } from "@gluestack-ui/themed";
import React from "react";

interface IProps {
  onSubmit:()=> void
}
export default function DiamondCard({ onSubmit }: IProps) {
  const [ choose, setChoose ] = React.useState(0)

  function formatRupiah(angka:number) {


    var reverse = angka.toString().split('').reverse().join('')
    let ribuan = reverse.match(/\d{1,3}/g);
    if (ribuan === null) {
      return 'Rp 0'; 
    }
    let rupiah = ribuan.join('.').split('').reverse().join('');
    return 'Rp ' + rupiah;
  }

  const submit = () => {
    console.log("bang")
    onSubmit()

  }
  // console.log(choose)
  return (
    <>
      <VStack gap={15} mt={'$16'}>
        <HStack flexWrap="wrap" justifyContent="center">
          {dataDummy.map(
            (
              item // Corrected: added parentheses around the JSX
            ) => (
              <Pressable key={item.id} onPress={()=> setChoose(item.diamond)}>
              <Card
                key={item.id}
                size="sm"
                variant="elevated"
                m="$3"
                pt={5}
                borderColor="$blue500"
                borderWidth={1}
                backgroundColor={choose === item.diamond ? "$green400" : "$blue200" }
              >
                <VStack>
                  <Center gap={8}>
                    <Heading color="$green600">{item.diamond}</Heading>
                    <Center width={70} height={50}>
                      
                      <Image
                        source={require(`../../assets/diamond.png`)}
                        w={'$7'}
                        h={'$7'}
                        alt="gambar"
                      />
                    </Center>
                    <HStack>
                      <Heading color="$amber600" size="md">
                        {formatRupiah(item.price)}
                      </Heading>
                    </HStack>
                  </Center>
                </VStack>
              </Card>
              </Pressable>
            )
          )}

        <HStack justifyContent='center' gap={10} w={'$full'} >
          <Button backgroundColor="red" width={100} onPress={() => submit()}>
              <ButtonText>Cancel</ButtonText>
          </Button>
          <Button backgroundColor="$green500" width={100} onPress={() => submit()}>
              <ButtonText>Save</ButtonText>
          </Button>
        </HStack>
        </HStack>
      </VStack>
    </>
  );
}
