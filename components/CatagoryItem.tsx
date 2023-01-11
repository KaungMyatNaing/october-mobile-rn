import React from "react";
import {Pressable,TouchableOpacity} from 'react-native'
import {Image, VStack, HStack, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, StatusBar, Container } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";

const CatagoryItem = (props : {name : string}) => {
  return (
    <>
     
      <Box bg='blue' flex={1} position='relative'>
      <TouchableOpacity>
        <Center>
        <Image source={{
      uri: "https://wallpaperaccess.com/full/317501.jpg"
          }} alt="Alternate Text" width='500' height='150'/>
          <Text position='absolute' bottom='2' paddingX='2' paddingY='1' bg='white' >{props.name}</Text>
        </Center>
        </TouchableOpacity>
        </Box>
        
    </>
  )
}
export default CatagoryItem