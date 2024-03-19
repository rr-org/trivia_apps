import { useAuth } from '@clerk/clerk-expo'
import { ButtonText } from '@gluestack-ui/themed';
import { Button } from '@gluestack-ui/themed';
import React from 'react'

export const LogOut = () => {
    const { isLoaded, signOut } = useAuth();
    if (!isLoaded) {
        return null;
      }
  return (
    <>
        <Button
        onPress={()=> { signOut()}}
        bg={'transparent'}
        >
            <ButtonText>LogOut</ButtonText>
        </Button>
    </>
  )
}
