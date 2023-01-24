import { HStack, Text, VStack, Box, ScrollView,Center,Container,Image } from "native-base"
import { View,StyleSheet, TouchableOpacity} from "react-native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from "react"
import SwiperComponent from "./SwiperComponent"
import PPruductContainer from "./PPruductContainer"
import CatagoryContainer from "./CatagoryContainer"


const HomeScreen = ({navigation}) => {
  return (
    <>
      
     
      
      <ScrollView>
        <SwiperComponent />
        
      {/*<ProductBanner />*/}
      <Box w='100%' h='100%' paddingBottom='100' paddingTop='25'>
        <PPruductContainer name="New Arrivals" navigation={navigation} route="ProductDetail" />
          <PPruductContainer name="Tranding" navigation={navigation} route="ProductDetail" />
         
          <CatagoryContainer name="Tranding" navigation={navigation} route="ProductDetail" />
        </Box>
        </ScrollView>
  
        
        
      
    </>
  )
}
const styles = StyleSheet.create({
  square: {
    marginTop: 15,
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 5,
    shadowColor: "black",
    padding: 15,
    marginBottom: 10,
    width: '100%', display: 'flex' 
  },
})
export default HomeScreen