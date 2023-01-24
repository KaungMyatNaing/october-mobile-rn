import { HStack, Text, VStack, Box, ScrollView, Center, Container, Image } from "native-base"
import { View, StyleSheet, TouchableOpacity } from "react-native"
import React from "react"
import CatagoryBanner from "./CatagoryBanner"
import CPruductContainer from "./CPruductContainer"


const CatagoryContainer = (props: { name: string, navigation: any, route: string }) => {
  //bind catagory
  const [catagory, setCatagory] = React.useState([]);
  const [realcatagory, setRealcatagory] = React.useState([]);
  const [errorlog, setErrorlog] = React.useState(false);
  React.useEffect(() => {
    fetch(`https://api.october.com.mm/api/categories/`)
    .then((response) => response.json())
      .then((data) => { setCatagory(data.data.categories[0]); console.log('Catagory Test'+catagory); setRealcatagory(catagory.filter(item => item.id == 1)); setErrorlog(true) }).catch(() => setErrorlog(false));
  
    },[])

  
     return (
    <>
      <View style={styles.square}>
        <CatagoryBanner catagory_name={catagory.name} img_url={catagory.image}  />
        <CPruductContainer name={props.name} navigation={props.navigation} route={props.route} />
      </View> 
    
    </>
  )
}

const styles = StyleSheet.create({
  square: {
    marginTop: 15,
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 5,
    shadowColor: "black",
    padding: 15,
    marginBottom: 10,
    width: '100%', display: 'flex' 
  },
})
  
export default CatagoryContainer