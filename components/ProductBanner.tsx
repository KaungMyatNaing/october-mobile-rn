import React from "react";
import {StyleSheet,ImageBackground,TouchableOpacity} from 'react-native'
import { VStack, HStack, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, StatusBar, Container,Input,Image } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";


const ProductBanner = () => {
  return (
    <Box marginX='3' borderRadius='15' marginTop='25' style={styles.cardo}>
      <TouchableOpacity>
      {/*<ImageBackground source={{
        uri: "https://wallpaperaccess.com/full/317501.jpg"
      }} imageStyle={{ borderRadius: 15}}> */}
    <HStack space={125}>
      <Box padding='15'>
        <Text style={styles.headingtitle}>Tranding</Text>
        <Text style={styles.producttitle}>Loremmmmm</Text>
      <Text style={styles.pricetitle}>$ 999</Text>
      </Box>
      <Image source={{
      uri: "https://wallpaperaccess.com/full/317501.jpg"}} alt="Alternate Text" size='lg' marginRight={5} marginY='3' borderRadius={10}/>
        </HStack>
        {/*</ImageBackground>*/}
        </TouchableOpacity>
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
    color: 'black',
    fontWeight: 'bold',
    paddingTop: 25,
    fontSize: 20
  },
  cardo: {
    backgroundColor:'#FEF5F6'
  
    
  },
  bimage: {
    borderRadius:15
  }
})

export default ProductBanner