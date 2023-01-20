import { Dimensions, View, Image,TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { Container, Text,HStack,Center, VStack, ScrollView } from 'native-base';
import MaterialDesign from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcons from 'react-native-vector-icons/Ionicons';
const OrderDetailScreen = ({navigation}) => {
  return(
  <>
   
      <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F5F5F5' }}>
      <HStack marginY={2} marginX={2} alignItems='flex-start' style={{width:'100%'}}>
        <TouchableOpacity onPress={() => navigation.goBack()} >
          <IonIcons name='chevron-back' size={32} />
        </TouchableOpacity>
       
         </HStack>
        <ScrollView>
      
        <HStack style={{justifyContent:'center', alignItems:'flex-start'}}>
          <Text style={{fontFamily: 'GothamPro-Bold',fontSize: 20}}>Order</Text>
          <Text style={{fontFamily: 'GothamPro-Bold',color:'#FF6195',fontSize: 20}}>#5464775</Text>
        </HStack>
        <HStack style={{borderBottomWidth:1,width:'100%',marginBottom:5}}><Text>Order Status</Text></HStack>
        
          <HStack style={{ backgroundColor: 'white', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
            <MaterialDesign size={35} name="clock-time-eight-outline" color="white" style={{padding: 2,backgroundColor:'#FF6195', borderRadius: 50}} />
            <MaterialDesign size={34} name="trending-neutral" color="#FF6195" />
            <MaterialDesign size={35} name="check-outline" color="#808080" style={{padding: 2,backgroundColor:'white', borderRadius: 50}} />
            <MaterialDesign size={35} name="trending-neutral" color="#808080" />
            <MaterialDesign size={35} name="package" color="#808080" style={{padding: 2,backgroundColor:'white', borderRadius: 50}} />
            <MaterialDesign size={35} name="trending-neutral" color="#808080" />
            <MaterialDesign size={35} name="truck-delivery-outline" color="#808080" style={{padding: 2,backgroundColor:'white', borderRadius: 50}} />
            <MaterialDesign size={35} name="trending-neutral" color="#808080" />
            <MaterialDesign size={35} name="archive-check-outline" color="#808080" style={{padding: 2,backgroundColor:'white', borderRadius: 50}} />
          </HStack>

          <VStack style={{padding: 8, justifyContent: 'center', alignItems: 'center', width: '90%' }}>
            <HStack style={{borderBottomWidth:1,width:'100%',marginBottom:5}}><Text>Process Log</Text></HStack>
            <HStack space={3} justifyContent='center' alignItems='center'><MaterialDesign size={40} name="clock-time-eight-outline" color="white" style={{ padding: 2, backgroundColor: '#FF6195', borderRadius: 50 }} />
              <VStack>
              <Text style={{fontFamily: 'GothamPro-Bold' }}>Status</Text>
              <Text style={{ textAlign: 'center' }}>Pending</Text>
              </VStack>
              <VStack>
                <Text style={{fontFamily: 'GothamPro-Bold' }}>Date</Text>
                <Text>1/1/23</Text>
              </VStack>
              <VStack>
                <Text style={{fontFamily: 'GothamPro-Bold' }}>Description</Text>
                <Text>Item is pending</Text>
              </VStack>
              
             
            </HStack>
            
            
        
        </VStack>
        <VStack>
        <HStack style={{borderBottomWidth:1,width:'100%',marginBottom:5}}><Text>Cart Items</Text></HStack>
          <HStack space={10} justifyContent='center' alignItems='center'>
          <VStack>
              <Text style={{fontFamily: 'GothamPro-Bold' }}>No</Text>
            </VStack>
            <VStack>
              <Text style={{fontFamily: 'GothamPro-Bold' }}>Name</Text>
            </VStack>
            <VStack>
              <Text style={{fontFamily: 'GothamPro-Bold' }}>Qty</Text>
            </VStack>
            <VStack>
              <Text style={{fontFamily: 'GothamPro-Bold' }}>Amount</Text>
            </VStack>
          </HStack>

          <HStack space={10} justifyContent='center' alignItems='center' >
          <VStack>
              <Text style={{fontFamily: 'GothamPro' }}>1</Text>
            </VStack>
            <VStack>
              <Text style={{fontFamily: 'GothamPro',width:75 }}>Jemmela Potion</Text>
            </VStack>
            <VStack>
              <Text style={{fontFamily: 'GothamPro' }}>1</Text>
            </VStack>
            <VStack>
              <Text style={{fontFamily: 'GothamPro' }}>25000</Text>
            </VStack>
          </HStack>

          <HStack space={10} justifyContent='center' alignItems='center'>
          <VStack>
              <Text style={{fontFamily: 'GothamPro' }}>2</Text>
            </VStack>
            <VStack>
              <Text style={{fontFamily: 'GothamPro',width:75 }}>Jemmela Potion</Text>
            </VStack>
            <VStack>
              <Text style={{fontFamily: 'GothamPro' }}>1</Text>
            </VStack>
            <VStack>
              <Text style={{fontFamily: 'GothamPro' }}>25000</Text>
            </VStack>
          </HStack>
          <HStack space={10} justifyContent='center' alignItems='center'>
          <VStack>
              <Text style={{fontFamily: 'GothamPro' }}>3</Text>
            </VStack>
            <VStack>
              <Text style={{fontFamily: 'GothamPro',width:75 }}>Jemmela Potion</Text>
            </VStack>
            <VStack>
              <Text style={{fontFamily: 'GothamPro' }}>1</Text>
            </VStack>
            <VStack>
              <Text style={{fontFamily: 'GothamPro' }}>25000</Text>
            </VStack>
          </HStack>

          
            <HStack style={{justifyContent:'center', alignItems:'center'}} space={10}>
            <Text style={{fontFamily: 'GothamPro-Bold' }}>Coupon Code</Text>
            <Text style={{fontFamily: 'GothamPro-Bold' }}>Discount</Text>
            <Text style={{fontFamily: 'GothamPro-Bold' }}>Total</Text>
            </HStack>
            
            <HStack style={{justifyContent:'center', alignItems:'center'}} space={10}>
            <Text style={{fontFamily: 'GothamPro-Bold' }}>FHXH65</Text>
            <Text style={{fontFamily: 'GothamPro-Bold' }}>25%</Text>
            <Text style={{fontFamily: 'GothamPro-Bold' }}>70000MMK</Text>
          </HStack>
            


        </VStack>
        <VStack>
        <HStack style={{borderBottomWidth:1,width:'100%',marginBottom:5}}><Text>Order Detail</Text></HStack>
        <HStack space={3} justifyContent='space-between' alignItems='center'>
          <Text style={{fontFamily: 'GothamPro-Bold' }}>Order ID</Text>
          <Text>#564267</Text>
          </HStack>

          <HStack space={3} justifyContent='space-between' alignItems='center'>
          <Text style={{fontFamily: 'GothamPro-Bold' }}>Date</Text>
          <Text>1/1/23 23:23:60</Text>
            </HStack>
            
            <HStack space={3} justifyContent='space-between' alignItems='center'>
          <Text style={{fontFamily: 'GothamPro-Bold' }}>Name</Text>
          <Text>Lucina</Text>
            </HStack>
            
            <HStack space={3} justifyContent='space-between' alignItems='center'>
          <Text style={{fontFamily: 'GothamPro-Bold' }}>Phone Number</Text>
          <Text>09-87667865</Text>
          </HStack>

        <HStack space={3} justifyContent='space-between' alignItems='center'  marginY='5'>
          <Text style={{fontFamily: 'GothamPro-Bold'  }}>Address</Text>
          <Text>No (69) A Street, B Township, C City</Text>
        </HStack>

        <HStack space={3} justifyContent='space-between' alignItems='center'>
          <Text style={{fontFamily: 'GothamPro-Bold' }}>Payment Type</Text>
          <Text>Bank Transfer</Text>
          </HStack>
          <HStack space={3} justifyContent='space-between' alignItems='center'>
          <Text style={{fontFamily: 'GothamPro-Bold' }}>Screen Shot Recipe</Text>
          <HStack space={3}>
              <Text style={{width: 100}}>proof.png</Text>
              <Text style={{color:'blue',textDecorationLine:'underline'}}>View</Text>
            </HStack>
          </HStack>

          <HStack space={3} justifyContent='space-between' alignItems='center' marginY='5'>
            <Text style={{ fontFamily: 'GothamPro-Bold' }} >Customer Bank Account</Text>
            <VStack>
              <Text>Lucina</Text>
              <Text>67547897658</Text>
              <Text>KBZ Bank</Text>
            </VStack>
         
          </HStack>

          <HStack space={3} justifyContent='space-between' alignItems='center'  marginY='5' paddingBottom='25'>
            <Text style={{ fontFamily: 'GothamPro-Bold' }}>October Bank Account</Text>
            <VStack>
              <Text>Lucina</Text>
              <Text>67547897658</Text>
              <Text>KBZ Bank</Text>
            </VStack>
         
            </HStack>
            
            

          </VStack>
          </ScrollView>
       </View>
        
      
         
       
        
               
      
      
    </>
  )
}

export default OrderDetailScreen