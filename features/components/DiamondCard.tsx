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
    useToast,
  } from "@gluestack-ui/themed";
  import dataDummy from "../../mocks/diamond.json";
  import { Image } from "@gluestack-ui/themed";
  import React from "react";
  import useStoreUser from "../../store/store";
import { Text } from "@gluestack-ui/themed";
import { ToastContainer, toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

  interface IProps {
    onSubmit:()=> void
  }
  interface IDiamond {
    id: number,
    diamond: number,
    image: string,
    price: number
  }
  export default function DiamondCard({ onSubmit }: IProps) {
    const [ choose, setChoose ] = React.useState(0)
    const [ data, setData ] = React.useState<IDiamond[]>(dataDummy)
    const {diamond} = useStoreUser((state)=> state.user)
    function formatRupiah(angka:number) {


    // const getdata = () => {
    //   try{
    //     // setData(dataDummy)
    //   } catch (eror){
    //     console.log("bang eror")
    //   }
    // }


    // React.useEffect(()=> {
    //   console.log("bang")
    //     setData(dataDummy)

    //   // getdata()
    // },[])
   
    
      var reverse = angka.toString().split('').reverse().join('')
      let ribuan = reverse.match(/\d{1,3}/g);
      if (ribuan === null) {
        return 'Rp 0'; 
      }
      let rupiah = ribuan.join('.').split('').reverse().join('');
      return 'Rp ' + rupiah;
    }

    const submit = () => {
      // // console.log(choose)
      onSubmit()
    }
    const cancel = () => {
      onSubmit()
    }
    // console.log(miskin)
    return (
        <Box  mt={'$12'}>
          
          <Box flexDirection="row" flexWrap="wrap" justifyContent="center" mt={'$40'}>
           
            {data.map((item)=> (
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

          </Box>

          <Box alignItems="center" h={'$40'}>

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
    );
  }
