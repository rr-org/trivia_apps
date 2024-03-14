import { Center, HStack, VStack } from "@gluestack-ui/themed";
import AvatarCard from "../../components/AvatarCard";

export default function ChooseAvatar() {
  return (
    <>
      <Center mt={"auto"} mb={"auto"}>
        <HStack>
          <AvatarCard />
        </HStack>
      </Center>
    </>
  );
}
