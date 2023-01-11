import React from "react";
import {Image, StyleSheet} from 'react-native'
import { VStack, HStack, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, StatusBar, Container,Input } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { color } from "native-base/lib/typescript/theme/styled-system";


const HeaderBar = () => {
  return (

    <Box w='100%' bg='white' py={7} maxW='100%'>
      <HStack justifyContent='center' alignItems='center'>
        <VStack width='100%'>
        <Text marginLeft='4' fontSize='xl' paddingBottom='15'>What Would You Like? </Text>
          <Input mx="3" placeholder="Search Products" rounded='xl' border='none' style={{backgroundColor:'#F7F7F7',border:'none',paddingHorizontal: 10}} />
         
        </VStack>
       
        
      </HStack>
          
    </Box>
      
  )
}

const styles = StyleSheet.create({
  headingtitle: {
    fontSize: 18,
    color: '#A28A90',
    fontWeight:'bold'
  },
  producttitle: {

    color: '#5C5758' 
  },
  pricetitle: {
    color: '#886770',
    fontWeight:'bold'
  },
  cardo: {
    backgroundColor: '#FEF5F6',
    border: 'none'
  }
})

export default HeaderBar