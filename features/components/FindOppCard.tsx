import {
  Avatar,
  AvatarFallbackText,
  Box,
  HStack,
  Heading,
} from "@gluestack-ui/themed";

interface IMatch {
  username:string
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
            <AvatarFallbackText>Sandeep Srivastava</AvatarFallbackText>
          </Avatar>
          <Heading color="white">{data.username}</Heading>
        </HStack>
      </Box>
    </>
  );
}
