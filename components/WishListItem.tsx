import { Box, HStack, Text, VStack,Image } from "native-base"
import React from "react";
import { TouchableOpacity,StyleSheet,View} from "react-native"
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const WishListItem = () => {
  const [selected, setSelected] = React.useState(0);
  return (
    <Box width='90%' shadow="9" style={styles.square}>
      <HStack justifyContent='space-between' alignItems='center' space={5} borderBottomWidth='1' borderBottomColor='gray'>
        <Text pb='3' style={{fontFamily:'GothamPro-Bold'}}>Chanel Perfume</Text>
        <TouchableOpacity onPress={()=> setSelected(1)}>
          <FontAwesome size={25} name={selected == 1 ? 'trash' : 'trash-o'} />
        </TouchableOpacity>
      </HStack>
      <HStack paddingTop='2'>
      <Image source={{uri : "https://cataas.com/cat"}} alt='sexo' size='lg' />
        <VStack>
          <Text pl='3'>Chanel</Text>
          <HStack pl='3' space={3}><Text fontFamily='GothamPro'>color</Text><View style={{backgroundColor:'red', width: 10, height: 10,marginTop: 6}}></View></HStack>
            <HStack pl='3' space={3}><Text  fontFamily='GothamPro'>type</Text><Text  fontFamily='GothamPro'>XL</Text></HStack>
          <Text pl='3'  fontFamily='GothamPro-Bold'>20000 MMK</Text>
          <HStack></HStack>
        </VStack>
      </HStack>
    </Box>
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
export default WishListItem