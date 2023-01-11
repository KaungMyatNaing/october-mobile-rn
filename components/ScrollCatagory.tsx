import React from "react";
import {StyleSheet,ImageBackground, TouchableHighlight,Pressable,TouchableOpacity} from 'react-native'
import { VStack, HStack, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, StatusBar, Container,Input,Image,ScrollView } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";

const ScrollCatagoryItem = (props: { name : string }) => {
  const [selected, setSelected] = React.useState(0);
  return (
    //<TouchableHighlight onPress={()=>setSelected(1)}>
    <TouchableOpacity>
    <Text paddingX={3} paddingY={2} backgroundColor={selected == 1 ? 'gray' : 'white'}>
      {props.name}
      </Text>
      </TouchableOpacity>
      //</TouchableHighlight>
    )
}

const ScrollCatagory = () => {
  return (
    <ScrollView paddingTop={25} horizontal={true} height='10'>
      <HStack space={25} px='15'>
        <ScrollCatagoryItem name="Hair" />
        <ScrollCatagoryItem name="Body" />
        <ScrollCatagoryItem name="Lips" />
        <ScrollCatagoryItem name="Face"/>
        <ScrollCatagoryItem name="Hands"/>
        <ScrollCatagoryItem name="Legs"/>
        <ScrollCatagoryItem name="Idk"/>
        <ScrollCatagoryItem name="Idk"/>
      </HStack>
    </ScrollView>
  )
}
export default ScrollCatagory