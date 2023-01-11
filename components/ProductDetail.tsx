import React from "react";
import {StyleSheet,ImageBackground, TouchableHighlight, Pressable} from 'react-native'
import { VStack, HStack, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, StatusBar, Container,Input,Image,ScrollView} from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from 'react-native-vector-icons/AntDesign';

const CommonHeaderBar = () => {
  return (
    <Box width='100%' px={2} py={4}>
      <HStack justifyContent='space-between' space={50}>
        <Pressable><AntDesign size={20} name='left'/></Pressable>
        <Pressable><AntDesign size={20} name='heart'/></Pressable>
      </HStack>
    </Box>
  )
}

const ProductDetail = () => {
  return (
    <>
      <CommonHeaderBar />
      <Box backgroundColor='#FEF5F6' pb='30'>
        <ImageBackground>
          <VStack mx='15' pt={15}>
            <Text fontSize='xl' display='flex'>LOreal Anti Age Super Good Product</Text>
            <Text pt={15} fontWeight='600'>Brand</Text>
            <Text fontWeight='900' display='flex' >Loreal</Text>
            <Text pt={15} fontWeight='600'>Type</Text>
            <Text fontWeight='900' display='flex'>Body</Text>
            <Text fontWeight='900' display='flex' pt={30} fontSize='2xl'>$ 999</Text>
            <Image source={{ uri: "https://cataas.com/cat" }} size="2xl" width='175' height='175' position='absolute' right='15' bottom='0' />
          </VStack>
          
        </ImageBackground>
      </Box>
      <Box backgroundColor='white'>
        <ScrollView height={350}>
        <Box mx='15' pb='200' pt='15' borderTopRadius='35' >
          
            <VStack>
          <Text fontWeight='600' fontSize='xl'>Description</Text>
          <Text color='#95999D' lineHeight='20'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias ex molestiae tempore deleniti. Eaque odit totam, possimus asperiores dolorum, autem suscipit dolor sed laudantium, nesciunt nobis quia nostrum labore consequuntur?autem suscipit dolor sed laudantium, nesciunt nobis quia nostrum labore consequuntur?autem suscipit dolor sed laudantium, nesciunt nobis quia nostrum labore consequuntur?nesciunt nobis quia nostrum labore consequuntur?nesciunt nobis quia nostrum labore consequuntur?nesciunt nobis quia nostrum labore consequuntur?nesciunt nobis quia nostrum labore consequuntur?</Text>
           </VStack>
       
          </Box>
          </ScrollView>
        </Box>

     
      <Box  borderTopWidth='1' borderTopColor='#F1ECEE'>
      <Box mx='15' pt='15' >
        <HStack  justifyContent='space-between' alignItems='center' space={5}>

          <HStack justifyContent='space-between' alignItems='center' space={25}>
            <Pressable><AntDesign size={20} name='plus' style={styles.iconbutton} /></Pressable>
            <Text>1</Text>
            <Pressable><AntDesign size={20} name='minus' style={styles.iconbutton}/></Pressable>
          </HStack>
          <Pressable><Text style={styles.addtocart}>Add To Cart</Text></Pressable>
        </HStack>

      </Box>
      </Box>
     
    </>
  
  )
}

const styles = StyleSheet.create({
  iconbutton: {
    padding:10,
    borderRadius: 10,
    backgroundColor: '#F4DEE3'

  },
  addtocart: {
    paddingHorizontal: 45,
    paddingVertical: 15,
    backgroundColor: '#421926',
    borderRadius: 15,
    color: '#FFEDF5'
    
  }
})
export default ProductDetail