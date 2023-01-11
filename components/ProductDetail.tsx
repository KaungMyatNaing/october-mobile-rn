import React from "react";
import {StyleSheet,ImageBackground, TouchableHighlight, Pressable,TouchableOpacity,View} from 'react-native'
import { VStack, HStack, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, StatusBar, Container,Input,Image,ScrollView, Stack} from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const reviewData = [
  {
    id: 1,
    userName: 'Belle',
    reviewStar: 9,
    reviewContent: 'ta eain lone kyite kya par dal shin. a yan kg dae product lay pr'
  },
  {
    id: 2,
    userName: 'Stella',
    reviewStar: 5,
    reviewContent: 'zay kyi par dl'
  },
  {
    id: 3,
    userName: 'Mike',
    reviewStar: 2,
    reviewContent: 'YES'
  }
]
const ProductDetail = ({navigation}) => {
  return (
    <>
    
       <Box width='100%' px={15} py={4}>
       
      <HStack justifyContent='space-between' space={5}>
          <TouchableOpacity onPress={() => navigation.goBack()}><AntDesign size={20} name='left' /></TouchableOpacity>
          <Text fontSize='md' display='flex' style={{fontFamily: 'GothamPro-Bold'}}>LOreal Anti Age Super Good Product</Text>
        <Pressable><AntDesign size={20} name='heart'/></Pressable>
          </HStack>
         
    </Box>
      {/*<CommonHeaderBar navigation={navigation} router= 'HomeScreen' />*/}
      <ScrollView height={500}>
      <Box backgroundColor='#FEF5F6' pb='30'>
        <ImageBackground>
          <VStack mx='15' pt={15}>
           
            <Text pt={15} fontWeight='600'>Brand</Text>
            <Text fontWeight='900' display='flex' >Loreal</Text>
            <Text pt={15} fontWeight='600'>Type</Text>
            <Text fontWeight='900' display='flex'>Body</Text>
            <Text fontWeight='900' display='flex' pt={30} fontSize='2xl'>$ 999</Text>
            <Image source={{ uri: "https://cataas.com/cat" }} size="2xl" width='175' height='175' position='absolute' right='15' bottom='0' alt="cat" />
          </VStack>
          
        </ImageBackground>
        </Box>
       
      <Box backgroundColor='white'>
        
        <Box mx='15' pb='200' pt='15' borderTopRadius='35' >
          
            <VStack>
          <Text fontWeight='600' fontSize='xl' style={{fontFamily: 'GothamPro-Bold'}}>Description</Text>
          <Text color='#95999D' lineHeight='20' style={{ fontFamily: 'GothamPro-Bold' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias ex molestiae tempore deleniti. Eaque odit totam, possimus asperiores dolorum, autem suscipit dolor sed laudantium, nesciunt nobis quia nostrum labore consequuntur?autem suscipit dolor sed laudantium, nesciunt nobis quia nostrum labore consequuntur?autem suscipit dolor sed laudantium, nesciunt nobis quia nostrum labore consequuntur?nesciunt nobis quia nostrum labore consequuntur?nesciunt nobis quia nostrum labore consequuntur?nesciunt nobis quia nostrum labore consequuntur?nesciunt nobis quia nostrum labore consequuntur?</Text>
              
              
            </VStack>
            
            <VStack pt={15}>
              <Text fontWeight='600' fontSize='xl' style={{ fontFamily: 'GothamPro-Bold' }}>Review</Text>
              {reviewData && reviewData.map((item, index) => (
                  <Box p={3} mb={5} style={{ borderWidth: 2, borderRadius: 15, borderColor: 'gray' }} key={item.id}>
                  <Box style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                    <Image source={require('../assets/images/p1.png')} size="sm" borderRadius='100' alt="sxeo" /> <Text style={{ fontFamily: 'GothamPro-Bold', marginLeft: 5 }}>{item.userName}</Text>
               
                  </Box>
                  <HStack>
               
                  
                    {
                      Array.from({ length: item.reviewStar }, (x,i) => (
                        <MaterialCommunityIcons key={i} name="star" size={20} color="#FFA000" />
                      ))
                    }

                    
                  </HStack>
                
                
                 
                  <Text color='#95999D' lineHeight='20' style={{ fontFamily: 'GothamPro-Bold' }}>{item.reviewContent}</Text>
              
                </Box>
              ))}
            
             
            </VStack>
       
          </Box>
         
        
        </Box>
        </ScrollView>

    
      <Box  borderTopWidth='1' borderTopColor='#F1ECEE' style={{position: 'absolute',bottom: 0, left: 0, right: 0,paddingHorizontal: 15,paddingBottom: 15}} backgroundColor='#FEF5F6' >
      
        <HStack  justifyContent='space-between' alignItems='center' space={5}>

          <HStack justifyContent='space-between' alignItems='center' space={25}>
            <TouchableOpacity><AntDesign size={20} name='plus' style={styles.iconbutton} /></TouchableOpacity>
            <Text>1</Text>
            <TouchableOpacity><AntDesign size={20} name='minus' style={styles.iconbutton}/></TouchableOpacity>
          </HStack>
          <Pressable><Text style={styles.addtocart}>Add To Cart</Text></Pressable>
        </HStack>

      
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
    paddingHorizontal: 45,
    paddingVertical: 15,
    backgroundColor: '#421926',
    borderRadius: 15,
    color: '#FFEDF5',
    marginTop: 5,
    fontFamily: 'GothamPro-Bold'
    
  }
})
export default ProductDetail