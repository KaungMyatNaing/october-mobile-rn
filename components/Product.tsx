import { Stack, Input, Container, Center, Box, Image, HStack} from 'native-base';
import { Text, StyleSheet, View,Pressable} from 'react-native';


const Product = () => {
  return (
   
    <Container>
      <Box>
      <Center>
        <Image source={{uri : "https://cataas.com/cat"}} alt='sexo' />
        </Center>
        </Box>
       </Container>
        
        
        
     
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '33.33%'
  },
  topbar: {
    top: 0,
    right: 0,
    position: 'absolute'
  },
  productimage: {
    width: '100%',
    height: '100%'
  },
  buttoncontainer: {
    backgroundColor: '#FF6195',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 15
    
  }
})

export default Product