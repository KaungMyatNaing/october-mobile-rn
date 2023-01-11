import React from "react";
import {Pressable,View} from 'react-native'
import { VStack, HStack, Button, IconButton,Text, NativeBaseProvider, Center, Box, StatusBar, Container,Image, Stack } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';



const ProductRework = () => {
  return (
    <Box borderWidth='1' width={180} borderRadius='15' height={250} position='relative'>
      
        
     
    
     
    
        
      <Image source={{ uri: "https://cataas.com/cat" }} size="xl" borderRadius="15" width='100%' alt="baka/>
      <Icon name='home' size={25} color='#F8F6F9' position='absolute' top={0} right={0} />
        
        
  
      <HStack><Pressable><Icon name='home' size={25} color='#F8F6F9'/></Pressable></HStack>
    </Box>
  )
}

export default ProductRework