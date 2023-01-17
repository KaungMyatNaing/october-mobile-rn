import { HStack, Text, VStack, Box, ScrollView,Center,Container,Image } from "native-base"
import { View,StyleSheet, TouchableOpacity} from "react-native"
import HeaderBar from "./HeaderBar"
import ProductBanner from "./ProductBanner"
import ScrollCatagory from "./ScrollCatagory"
import ProductCard from "./ProductCard"
import ProductRework from "./ProductRework"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from "react"
import ProductDetail from "./ProductDetail"
import SwiperComponent from "./SwiperComponent"
import CatagoryBanner from "./CatagoryBanner"



const Pruduct = (props: { navigation: any, route: string, name: string, price: number, cover_image: string , id : number}) => {
  const [selected, setSelected] = React.useState(0);
  
 
  return (
    <>
      <TouchableOpacity onPress={()=> props.navigation.navigate(props.route,{id : props.id})}>
      <View style={{ display: 'flex',marginLeft: 15, justifyContent: 'center', alignItems: 'center', position: 'relative',marginBottom: 15 }}>
     
       
       
          <Image source={{ uri: `https://www.api.octoberecommerce.duckdns.org/${props.cover_image}` }}   alt="sxeo" style= {{resizeMode: 'contain',borderRadius: 15,height: 200,width: 175}} />
        <View style={{display: 'flex',flexDirection:'column'}}>
            <Text style={{ fontFamily: 'GothamPro', width: 175 ,textAlign:'left'}} fontSize='md'>{props.name}</Text>
          <Text style={{color: 'gray',marginRight: 30,fontFamily: 'GothamPro-Bold'}}>LOreal</Text>
            <Text style={{ marginRight: 30, fontFamily: 'GothamPro' }} fontSize='md'>{props.price}MMK</Text>
        
            
        </View>
       
        <View  style={{ position: 'absolute', bottom: 0, right: 0 }} >
        <TouchableOpacity onPress={()=> selected == 1 ? setSelected(0) : setSelected(1)}><MaterialCommunityIcons name={selected == 1 ? 'heart' : 'heart-outline'} color={selected == 1 ? 'red' : 'black'} size={24} style={{padding : 3, borderRadius: 100, backgroundColor: '#F6F5F8'}} /></TouchableOpacity> 
        </View>
        </View>
        </TouchableOpacity>
    </>
  )
}




const PruductContainer = (props: { name: string, navigation: any, route: string , type : string}) => {
  const [errorlog, setErrorlog] = React.useState(false);
  const [newarrivals, setNewarrvals] = React.useState([]);
  const [tranding, setTranding] = React.useState([]);
  React.useEffect(() => {
    //all products fetching
    fetch(`https://api.october.com.mm/api/products/`)
    .then((response) => response.json() )
      .then((data) => { setNewarrvals(data.data.products); setErrorlog(true) }).catch(() => setErrorlog(false));
    
  }, [newarrivals, tranding])
  if (props.type == "product") {
        

  
    return (
    <>
      <Text style={{ fontSize: 20,paddingBottom: 15,marginLeft: 20,fontFamily: 'GothamPro-Bold'}}>{props.name}</Text>
      <ScrollView horizontal={true}>
        {/*<View style={{
          width: '90%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingLeft: 35, paddingRight: 35, paddingBottom: 15
        }}>*/}
        <Container style={{ flexDirection: 'row' }}>
          {
            errorlog ? <Text>Loading</Text> :  newarrivals && newarrivals.map((item,index) => (
              <Pruduct navigation={props.navigation} route={props.route} name={item.name} price={item.price} cover_image={item.cover_image} id={item.id} key={index} />
            ))
          }
         
       
       
          </Container>
        {/*</View> */}
        </ScrollView>
    </>
  )
  }
  if (props.type == "catagory") {
    const filteredCatagory = newarrivals.filter(item => item.category[0].name == "Body")
    console.log("Filtered By Category"+filteredCatagory)
    return (
      <>
      
        <ScrollView horizontal={true}>
          {/*<View style={{
            width: '90%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingLeft: 35, paddingRight: 35, paddingBottom: 15
          }}>*/}
          <Container style={{ flexDirection: 'row' }}>
            {
              errorlog ? <Text>Loading</Text> :  filteredCatagory && filteredCatagory.map((item,index) => (
                <Pruduct navigation={props.navigation} route={props.route} name={item.name} price={item.price} cover_image={item.cover_image} id={item.id} key={index} />
              ))
            }
           
         
         
            </Container>
          {/*</View> */}
          </ScrollView>
      </>
    )
  }
 
  

}
const PPruductContainer = (props : {name : string, navigation : any, route : string}) => {
  return (
    <>
      <View style={{ width: '100%', display: 'flex' }}>
    
        <PruductContainer name={props.name} navigation={props.navigation} route={props.route} type="product" />
      </View>
    </>
  )
}
const CPruductContainer = (props : {name : string, navigation : any, route : string}) => {
  return (
    <>
      <View style={{ width: '100%', display: 'flex' }}>
    
        <PruductContainer name={props.name} navigation={props.navigation} route={props.route} type="catagory" />
      </View>
    </>
  )
}

const CatagoryContainer = (props: { name: string, navigation: any, route: string }) => {
  //bind catagory
  const [catagory, setCatagory] = React.useState([]);
  const [realcatagory, setRealcatagory] = React.useState([]);
  const [errorlog, setErrorlog] = React.useState(false);
  React.useEffect(() => {
    fetch(`https://api.october.com.mm/api/categories/`)
      .then((response) => response.json())
      .then((data) => { setCatagory(data.data.categories); setRealcatagory(catagory.filter(item => item.id == 1)); setErrorlog(true) }).catch(() => setErrorlog(false));
    console.log(realcatagory.name);
    console.log(realcatagory.image);
  },[catagory])

  
     return (
    <>
      <View style={styles.square}>
        <CatagoryBanner catagory_name={realcatagory[0]?.name} img_url={realcatagory[0]?.image}  />
        <CPruductContainer name={props.name} navigation={props.navigation} route={props.route} />
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