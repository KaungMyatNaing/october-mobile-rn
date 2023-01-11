import { HStack,Box ,Image, VStack,ScrollView,Text} from "native-base"
import {TouchableOpacity,StyleSheet } from "react-native"
import AntDesign from 'react-native-vector-icons/AntDesign';
import CartItem from "./CartItem";


const CartScreen = () => {
  return (
    <>
      <Text fontSize='2xl' p='3'>My Cart</Text>
      <ScrollView>
      <Box width='100%' h='100%' justifyContent='center' alignItems='center' flex={1} paddingBottom='100' paddingTop='15'> 
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem/>
      </Box>
        </ScrollView>
    
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
export default CartScreen