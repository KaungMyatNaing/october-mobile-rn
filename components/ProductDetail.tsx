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

const thumbData = [
  {
    id: 1,
    src : require('../assets/images/s1.png')
  },
  {
    id: 2,
    src : require('../assets/images/s2.png')
  },
  {
    id: 3,
    src : require('../assets/images/s1.png')
  }
]
const ProductDetail = ({ navigation , route }) => {
  const [fullimage, setFullimage] = React.useState(false);
  const [resp, setResp] = React.useState({});
  const [error, setError] = React.useState(true);
  const { id } = route.params;
  console.log(id);
  React.useEffect(() => {
    fetch(`https://api.october.com.mm/api/products/detail/${id}`).then((response) => response.json())
      .then((data) => {
        console.log(data.data.products[0]);
        setResp(data.data.products[0]);
        setError(false);
        
      }).catch((e)=> console.log(e));
   
   
  }, [])
  
  console.log('https://www.api.octoberecommerce.duckdns.org/'+resp.cover_image)

  if (error == true) {
    <Text>Loading</Text>
  } else {
    return (
      <>
      
         <Box width='100%' px={15} py={4}>
         
        <HStack justifyContent='space-between' space={5}>
            <TouchableOpacity onPress={() => navigation.goBack()}><AntDesign size={20} name='left' /></TouchableOpacity>
            <Text fontSize='md' display='flex' style={{ fontFamily: 'GothamPro-Bold' }}>{resp.id} {resp.name}</Text>
          <Pressable><AntDesign size={20} name='heart'/></Pressable>
            </HStack>
           
      </Box>
        {/*<CommonHeaderBar navigation={navigation} router= 'HomeScreen' />*/}
        <ScrollView height={500}>
      
        <Box backgroundColor='#FEF5F6' pb='30'>
       
            <VStack mx='15' pt={15}>
            <Text fontSize='md' display='flex' style={{fontFamily: 'GothamPro-Bold'}}></Text>
              <Text pt={15} fontWeight='600'>Brand</Text>
              <Text fontWeight='900' display='flex' >{resp.brand[0].name}</Text>
              <Text pt={15} fontWeight='600'>Type</Text>
              <Text fontWeight='900' display='flex'>Body</Text>
              <HStack justifyContent='space-between'>
              <VStack>
                  <Text fontWeight='900' pt={10} fontSize='xl'>{resp.price} MMK</Text>
                  <Text fontWeight='500' style={{textDecorationLine:'line-through'}} fontSize='xl'>32000 MMK</Text>
                  <View style={{padding: 2, borderWidth: 5,display:'flex',justifyContent:'center',alignItems:'center'}}>
                  <Text  fontSize='sm'>0 % Off</Text>
                  </View>
                 
                  
                </VStack>
                <VStack>
                <TouchableOpacity onPress={()=> navigation.navigate('ImageScreen',{uri : 'https://www.api.octoberecommerce.duckdns.org/'+resp.cover_image})}>
                  <Image source={{ uri: 'https://www.api.octoberecommerce.duckdns.org/'+resp.cover_image }} alt="cat" width='230' height='180' marginTop='-100' />
                </TouchableOpacity>
              
            
            
         
                  <HStack space={2} pt="5">
                    {thumbData && thumbData.map((item) => (
                       <TouchableOpacity onPress={()=> navigation.navigate('ImageScreen')} key={item.id}>
                        <Image width='50' source={item.src} height='50' alt="cat" />
                     </TouchableOpacity>
                    ))}
           
             
                </HStack>
                </VStack>
              </HStack>
               
            </VStack>
               
          </Box>
         
        <Box backgroundColor='white'>
          
          <Box mx='15' pb='200' pt='15' borderTopRadius='35' >
            
              <VStack>
            <Text fontWeight='600' fontSize='xl' style={{fontFamily: 'GothamPro-Bold'}}>Description</Text>
                <Text color='#95999D' lineHeight='20' style={{ fontFamily: 'GothamPro-Bold' }}>{ resp.description ? resp.description : 'Sample Text'}</Text>
                
                
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
            <TouchableOpacity><Text style={styles.addtocart}>Add To Cart</Text></TouchableOpacity>
          </HStack>
  
        
        </Box>
       
      </>
    
    )
  }
  
     
 
  
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
    backgroundColor: '#FF6195',
    borderRadius: 15,
    color: '#FFEDF5',
    marginTop: 5,
    fontFamily: 'GothamPro-Bold'
    
  }
})
export default ProductDetail