import { HStack, Text, VStack, Box, ScrollView, Image, Center,Container } from "native-base"
import { View,StyleSheet, TouchableOpacity } from "react-native"
import HeaderBar from "./HeaderBar"
import ProductBanner from "./ProductBanner"
import ScrollCatagory from "./ScrollCatagory"
import ProductCard from "./ProductCard"
import ProductRework from "./ProductRework"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from "react"
import ProductDetail from "./ProductDetail"
import SwiperComponent from "./SwiperComponent"


const Pruduct = (props: { navigation : any, route : string}) => {
  const [selected, setSelected] = React.useState(0);
  return (
    <>
      <TouchableOpacity onPress={()=> props.navigation.navigate(props.route)}>
      <View style={{ display: 'flex', marginLeft: 15, justifyContent: 'center', alignItems: 'center', position: 'relative',marginBottom: 15 }}>
     
       
       
        <Image source={require('../assets/images/p1.png')} size="xl" borderRadius='15' alt="sxeo" />
        <View style={{display: 'flex',flexDirection:'column'}}>
          <Text style={{marginRight: 30,fontFamily: 'GothamPro'}} fontSize='md'>Body Lotion</Text>
          <Text style={{color: 'gray',marginRight: 30,fontFamily: 'GothamPro-Bold'}}>LOreal</Text>
          <Text style={{marginRight: 30,fontFamily: 'GothamPro'}} fontSize='md'>20000 MMK</Text>
        
            
        </View>
       
        <View  style={{ position: 'absolute', bottom: 0, right: 0 }} >
        <TouchableOpacity onPress={()=> selected == 1 ? setSelected(0) : setSelected(1)}><MaterialCommunityIcons name={selected == 1 ? 'heart' : 'heart-outline'} color={selected == 1 ? 'red' : 'black'} size={24} style={{padding : 3, borderRadius: 100, backgroundColor: '#F6F5F8'}} /></TouchableOpacity> 
        </View>
        </View>
        </TouchableOpacity>
    </>
  )
}
const PruductContainer = (props : {name : string , navigation : any, route : string}) => {
  return (
    <>
      <Text style={{ fontSize: 20,paddingBottom: 15,marginLeft: 20,fontFamily: 'GothamPro-Bold'}}>{props.name}</Text>
      <ScrollView horizontal={true}>
        {/*<View style={{
          width: '90%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingLeft: 35, paddingRight: 35, paddingBottom: 15
        }}>*/}
      <Container style={{flexDirection:'row'}}>
        <Pruduct navigation={props.navigation} route={props.route} />
        <Pruduct  navigation={props.navigation} route={props.route}/>
        <Pruduct  navigation={props.navigation} route={props.route}/>
          <Pruduct navigation={props.navigation} route={props.route}/>
          </Container>
        {/*</View> */}
        </ScrollView>
    </>
  )
}
const PPruductContainer = (props : {name : string, navigation : any, route : string}) => {
  return (
    <>
      <View style={{width: '100%',display:'flex'}}>
        <PruductContainer name={props.name} navigation={props.navigation} route={props.route} />
      </View>
    </>
  )
}
const HomeScreen = ({navigation}) => {
  return (
    <>
      
     
      
      <ScrollView>
        <SwiperComponent />
        
      {/*<ProductBanner />*/}
      <Box w='100%' h='100%' paddingBottom='100' paddingTop='25'>
          <PPruductContainer name="New Arrivals" navigation={navigation} route="ProductDetail" />
        <PPruductContainer name="Tranding" navigation={navigation} route="ProductDetail"/>
        </Box>
        </ScrollView>
  
        
        
      
    </>
  )
}
export default HomeScreen