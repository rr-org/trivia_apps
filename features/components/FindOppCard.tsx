import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  Box,
  HStack,
  Heading,
} from "@gluestack-ui/themed";

interface IMatch {
  data:{
    id:string,
    username:string,
    avatar:string
  }
}

export default function FindOppCard( data : IMatch) {
  return (
    <>
      <Box
        borderColor="white"
        borderWidth={2}
        py={10}
        px={15}
        width={300}
        borderRadius={5}
        backgroundColor="rgba(0, 0, 0, 0.3)"
      >
        <HStack alignItems="center" gap={10}>
          <Avatar bgColor="$amber600" size="md" borderRadius="$full">
            {data.data.avatar ? 
            <AvatarImage source={{ uri: data.data.avatar}} alt="userImage"/>
              :
            <AvatarFallbackText>{data.data.username}</AvatarFallbackText>
          }
          </Avatar>
          <Heading color="white">{data.data.username}</Heading>
        </HStack>
      </Box>
    </>
  );
}
