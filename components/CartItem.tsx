import { Box, HStack, Text, VStack,Image } from "native-base"
import React, { useState } from "react";
import { TouchableOpacity,StyleSheet,View} from "react-native"
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

const CartItem = () => {
  const [selected, setSelected] = React.useState(0);
  return (
    <>

    <Box width='90%' shadow="9" style={styles.square}>
      <HStack justifyContent='space-between' alignItems='center' space={5} borderBottomWidth='1' borderBottomColor='gray'>
        <Text pb='3'  fontFamily='GothamPro'>Chanel Perfume</Text>
        <TouchableOpacity onPress={()=> setSelected(1)}>
          <FontAwesome size={25} name={selected == 1 ? 'trash' : 'trash-o'} />
        </TouchableOpacity>
      </HStack>
      <HStack paddingTop='2'>
      <Image source={{uri : "https://cataas.com/cat"}} alt='sexo' size='lg' />
        <VStack>
           
            <HStack pl='3' justifyContent='space-between' alignItems='center' space={38}><Text  fontFamily='GothamPro'>Chanel</Text><Text  fontFamily='GothamPro-Bold'>20000 MMK</Text></HStack>
            <HStack pl='3' space={3}><Text  fontFamily='GothamPro'>color</Text><View style={{backgroundColor:'red', width: 10, height: 10,marginTop: 6}}></View></HStack>
            <HStack pl='3' space={3}><Text  fontFamily='GothamPro'>type</Text><Text  fontFamily='GothamPro'>XL</Text></HStack>
            
          </VStack>
          <HStack justifyContent='space-around' alignItems='center' space={1}>
            <TouchableOpacity><AntDesign size={20} name='plus'/></TouchableOpacity>
            <Text  fontFamily='GothamPro'>1</Text>
            <TouchableOpacity><AntDesign size={20} name='minus'/></TouchableOpacity>
          </HStack>
      </HStack>
      </Box>
      </>
  )
}

   
const styles = StyleSheet.create({
  square: {
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 5,
    shadowColor: "black",
    padding: 15,
    marginBottom: 10
  },
 
})
export default CartItem