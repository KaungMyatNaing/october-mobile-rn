import { HStack, Text, VStack, Box, ScrollView, Center, Container, Image } from "native-base"
import { View, StyleSheet, TouchableOpacity } from "react-native"
import React from "react"
import Pruduct from "./Pruduct"
import PruductContainer from "./PruductContainer"





const PPruductContainer = (props: { name: string, navigation: any, route: string }) => {
  return (
    <>
      <View style={{ width: '100%', display: 'flex' }}>
    
        <PruductContainer name={props.name} navigation={props.navigation} route={props.route} type="product" />
      </View>
    </>
  )
}

export default PPruductContainer