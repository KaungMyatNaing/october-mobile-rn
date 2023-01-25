import { HStack,Box ,Image, VStack,ScrollView,Text,Input} from "native-base"
import {TouchableOpacity,StyleSheet } from "react-native"
import AntDesign from 'react-native-vector-icons/AntDesign';
import CartItem from "./CartItem";
import React from "react";
import { StoreContext } from "./StoreContext";

const CartScreen = () => {
  const [cart, setCart] = React.useContext(StoreContext)
  
  return (
    <>
      <Text fontSize='2xl' p='3'>My Cart</Text>
      <ScrollView>
        <Box width='100%' h='100%' justifyContent='center' alignItems='center' flex={1} paddingBottom='250' paddingTop='15'> 
          {cart.map((item,index) => 
            (
            <CartItem item_id={item.item_id} item_name={item.item_name} brand_name={item.brand_name} qty={item.qty} price={item.price} key={item.id}  />
           )
          )}
         
          
      </Box>
      </ScrollView>
      <Box  borderTopWidth='1' borderTopColor='#F1ECEE' style={{position: 'absolute',bottom: 75, left: 0, right: 0,paddingHorizontal: 15,paddingBottom: 15}} backgroundColor='#FEF5F6' >
      
        <VStack  space={5} pt='28'>

         
          <HStack justifyContent='space-around' alignItems='center' px={2} >
         
            <Text style={{fontFamily: 'GothamPro-Bold'}}>Promo Code</Text>
            <Input width={95} placeholder="Promo"></Input>
            <TouchableOpacity><Text style={styles.addtocart}>Apply</Text></TouchableOpacity>
            
          </HStack>
          <HStack justifyContent='space-between' alignItems='center' px={2}>
            <VStack space={3} pl={2}>
              <HStack space={3}><Text  style={{fontFamily: 'GothamPro-Bold'}}>Discount Price</Text><Text>25000 MMK</Text></HStack>
              <HStack  space={3}><Text  style={{fontFamily: 'GothamPro-Bold'}}>Total</Text><Text>150000 MMK</Text></HStack>
            </VStack>
            <TouchableOpacity><Text style={styles.addtocart}>Check Out</Text></TouchableOpacity>
          </HStack>
          
         
        </VStack>

      
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
    padding: 10,
    width: 100,
    backgroundColor: '#FF6195',
    borderRadius: 15,
    color: '#FFEDF5',
    marginTop: 5,
    fontFamily: 'GothamPro-Bold',
    textAlign:'center'
    
  }
})
export default CartScreen