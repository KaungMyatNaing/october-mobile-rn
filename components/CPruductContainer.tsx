import { HStack, Text, VStack, Box, ScrollView, Center, Container, Image } from "native-base"
import { View, StyleSheet, TouchableOpacity } from "react-native"
import React from "react"
import PruductContainer from "./PruductContainer"




const CPruductContainer = (props: { name: string, navigation: any, route: string }) => {
  return (
    <>
      <View style={{ width: '100%', display: 'flex' }}>
    
        <PruductContainer name={props.name} navigation={props.navigation} route={props.route} type="catagory" />
      </View>
    </>
  )
}

export default CPruductContainer