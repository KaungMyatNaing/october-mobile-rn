import React from "react";
import {Pressable, StyleSheet} from 'react-native'
import { VStack, HStack, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, StatusBar, Container,Input,Image } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from 'react-native-vector-icons/AntDesign';

const ProductCard = () => {
  return (
    <Box style={styles.container} width='50%' position='relative'>
      
     
      <Center>
      <Image source={{ uri: "https://cataas.com/cat" }} size="2xl" width='100%' height='250' borderRadius="15" />
      </Center>
    
    
     
      <HStack justifyContent='space-between' alignItems='center' space={50}>
        <Box>
        <Text style={styles.flextext}>Lorem</Text>
        <Text style={styles.flextext}>$ 999</Text>
        </Box>
        <Pressable><AntDesign size={20} name='heart' style={styles.loveicon} /></Pressable>
        <Pressable>
      <AntDesign name='pluscircle' size={20}/></Pressable>
      </HStack>
    </Box>
  )
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    borderWidth: 1,
    borderRadius: 15
  },
  flextext: {
    display: 'flex'
  },
  loveicon: {
   
  }

})
export default ProductCard