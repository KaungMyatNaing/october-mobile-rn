import { HStack, Text, VStack, Box, ScrollView, Center, Container, Image } from "native-base"
import { View, StyleSheet, TouchableOpacity } from "react-native"
import React from "react"
import Pruduct from "./Pruduct"




const PruductContainer = (props: { name: string, navigation: any, route: string, type: string }) => {
  const [errorlog, setErrorlog] = React.useState(false);
  const [newarrivals, setNewarrvals] = React.useState([]);
  const [tranding, setTranding] = React.useState([]);
  const [fcata, setFcata] = React.useState([]);

  React.useEffect(() => {
    //all products fetching
    fetch(`https://api.october.com.mm/api/products/`)
      .then((response) => response.json())
      .then((data) => { setNewarrvals(data.data.products); setFcata(newarrivals.filter(item => item.category[0].name == "Body")); setErrorlog(true) }).catch(() => setErrorlog(false));


  }, [])



  if (props.type == "product") {



    return (
      <>
        <Text style={{ fontSize: 20, paddingBottom: 15, marginLeft: 20, fontFamily: 'GothamPro-Bold' }}>{props.name}</Text>
       
        <ScrollView horizontal={true}>

        
        <Container style={{ flexDirection: 'row' }}>
             {
             newarrivals.map((dd,index) => {
              return <Pruduct navigation={props.navigation} route={props.route} name={dd?.name} price={dd?.price} cover_image= {dd?.cover_image} id={dd?.id} key={index} />
         
              })
            }

            </Container>
        
       
        </ScrollView>
      </>
    )
  }
  if (props.type == "catagory") {

    return (
      <>

        <ScrollView horizontal={true}>
          {/*<View style={{
            width: '90%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingLeft: 35, paddingRight: 35, paddingBottom: 15
          }}>*/}
          <Container style={{ flexDirection: 'row' }}>
            {
              newarrivals.map((item, index) => (
                <Pruduct navigation={props.navigation} route={props.route} name={item.name} price={item.price} cover_image={item.cover_image} id={item.id} key={index} />
              ))
            }



          </Container>
          {/*</View> */}
        </ScrollView>
      </>
    )
  }



}

export default PruductContainer