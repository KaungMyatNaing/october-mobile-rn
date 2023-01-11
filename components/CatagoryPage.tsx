import React from "react";
import {Image, Pressable} from 'react-native'
import { VStack, HStack, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, StatusBar, Container } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import CatagoryItem from "./CatagoryItem";


const CatagoryPage = () => {
  return (
    <>
      
      <Box w='90%' h='100%' flex={1} margin={5} paddingBottom='50'>
        <HStack justifyContent='space-between' alignItems='center'>
          <Text fontSize='3xl'>Catagories</Text>
          <Text>Placeholder Here</Text>
        </HStack>
        <HStack space={2}>
          <CatagoryItem name="Lips"/>
          <CatagoryItem name="Eyes"/>
        </HStack>
        <HStack space={2} marginTop={15}>
          <CatagoryItem name="Body"/>
          <CatagoryItem name="Face"/>
        </HStack>
        <HStack  marginTop={15}>
          <CatagoryItem name="Hair" />
        </HStack>
       
          </Box>
         
    </>
  )
}

export default CatagoryPage