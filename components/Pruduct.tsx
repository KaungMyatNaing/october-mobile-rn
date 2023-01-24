import { HStack, Text, VStack, Box, ScrollView, Center, Container, Image } from "native-base"
import { View, StyleSheet, TouchableOpacity } from "react-native"
import React from "react";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Pruduct = (props: { navigation: any, route: string, name: string, price: number, cover_image: string, id: number }) => {
  const [selected, setSelected] = React.useState(0);


  return (
    <>
      <TouchableOpacity onPress={() => props.navigation.navigate(props.route, { id: props.id })}>
        <View style={{ display: 'flex', marginLeft: 15, justifyContent: 'center', alignItems: 'center', position: 'relative', marginBottom: 15 }}>



          <Image source={{ uri: `https://www.api.octoberecommerce.duckdns.org/${props.cover_image}` }} alt="sxeo" style={{ resizeMode: 'contain', borderRadius: 15, height: 200, width: 175 }} />
          <View style={{ display: 'flex', flexDirection: 'column' }}>
            <Text style={{ fontFamily: 'GothamPro', width: 175, textAlign: 'left' }} fontSize='md'>{props.name}</Text>
            <Text style={{ color: 'gray', marginRight: 30, fontFamily: 'GothamPro-Bold' }}>LOreal</Text>
            <Text style={{ marginRight: 30, fontFamily: 'GothamPro' }} fontSize='md'>{props.price}MMK</Text>


          </View>

          <View style={{ position: 'absolute', bottom: 0, right: 0 }} >
            <TouchableOpacity onPress={() => selected == 1 ? setSelected(0) : setSelected(1)}><MaterialCommunityIcons name={selected == 1 ? 'heart' : 'heart-outline'} color={selected == 1 ? 'red' : 'black'} size={24} style={{ padding: 3, borderRadius: 100, backgroundColor: '#F6F5F8' }} /></TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </>
  )

}


export default Pruduct