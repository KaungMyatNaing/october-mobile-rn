import { Box, HStack, Text, VStack,Image } from "native-base"
import React, { useState } from "react";
import { TouchableOpacity,StyleSheet,View} from "react-native"
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { StoreContext } from "./StoreContext";

const CartItem = (props: { item_id: string, item_name: string, brand_name: string, qty: number, price: number }) => {
  const [cart, setCart] = React.useContext(StoreContext)
  
  const [selected, setSelected] = React.useState(0);
  
  const qtyIncrease = (item_id: string) => {
    
    
    const fData = cart.filter((data) => data.item_id ==  item_id)
    fData[0].qty += 1;
    console.log(fData);
    const gData = cart.filter((data) => data.item_id != item_id)
    console.log(gData);
    const sorted = [...gData, fData[0]].sort((a,b)=> a.id - b.id);
    setCart(sorted)

  
    

  
       
  }

  const qtyDecrease = (item_id : string) => {
 
  
    const fData = cart.filter((data) => data.item_id ==  item_id)
    fData[0].qty -= 1;
    console.log(fData);
    const gData = cart.filter((data) => data.item_id != item_id)
    console.log(gData);
    const sorted = [...gData, fData[0]].sort((a,b)=> a.id - b.id);
    setCart(sorted)
     
    
       
  }

  const itemDelete = (item_id : string) => {
    const gData = cart.filter((data) => data.item_id != item_id)
    console.log(gData);
    const sorted = gData.sort((a,b)=> a.id - b.id);
    setCart(sorted)      
  }


  return (
    <>

    <Box width='90%' shadow="9" style={styles.square}>
      <HStack justifyContent='space-between' alignItems='center' space={5} borderBottomWidth='1' borderBottomColor='gray'>
          <Text pb='3' fontFamily='GothamPro'>{props.item_id} {props.item_name}</Text>
          <TouchableOpacity onPress={() => { setSelected(1);  itemDelete(props.item_id)}}>
          <FontAwesome size={25} name={selected == 1 ? 'trash' : 'trash-o'} />
        </TouchableOpacity>
      </HStack>
      <HStack paddingTop='2'>
      <Image source={{uri : "https://cataas.com/cat"}} alt='sexo' size='lg' />
        <VStack>
           
            <HStack pl='3' justifyContent='space-between' alignItems='center' space={38}><Text fontFamily='GothamPro'>{props.brand_name}</Text><Text fontFamily='GothamPro-Bold'>{props.price * props.qty} MMK</Text></HStack>
            <HStack pl='3' space={3}><Text  fontFamily='GothamPro'>color</Text><View style={{backgroundColor:'red', width: 10, height: 10,marginTop: 6}}></View></HStack>
            <HStack pl='3' space={3}><Text  fontFamily='GothamPro'>type</Text><Text  fontFamily='GothamPro'>XL</Text></HStack>
            
          </VStack>
          <HStack justifyContent='space-around' alignItems='center' space={1}>
            <TouchableOpacity onPress={()=>qtyIncrease(props.item_id)}><View style={{display:'flex', justifyContent:'center',alignItems:'center', borderWidth: 1, padding: 3,borderRadius: 25}}><AntDesign size={20} name='plus' color='black'/></View></TouchableOpacity>
            <Text fontFamily='GothamPro'>{props.qty}</Text>
            <TouchableOpacity onPress={()=>qtyDecrease(props.item_id)}><View style={{display:'flex', justifyContent:'center',alignItems:'center', borderWidth: 1, padding: 3,borderRadius: 25}}><AntDesign size={20} name='minus' color='black'/></View></TouchableOpacity>
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