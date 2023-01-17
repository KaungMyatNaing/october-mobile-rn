import { Center} from 'native-base'
import React from 'react'
import { View,StyleSheet, ImageBackground, TouchableOpacity,Text } from 'react-native'
import Swiper from 'react-native-swiper'

var styles =  StyleSheet.create({
  wrapper: {
    height: 250
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontFamily: 'Hermitage Regular'
  }
  , paratext: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 45
  }
})

const SwiperComponent = (props: { title: string, image: string, btn_text: string, description: string }) => {
  const [errorlog, setErrorlog] = React.useState(false);
  const [banneritems, setBanneritems] = React.useState([]);
  React.useEffect(() => {
    fetch(`https://api.october.com.mm/api/banners/`)
    .then((response) => response.json() )
      .then((data) => { setBanneritems(data.data.banner_sliders); setErrorlog(true) }).catch(()=>setErrorlog(false));
  },[banneritems])
  return (
    <Swiper style={styles.wrapper} showsButtons loop={false} dot={<View style={{ backgroundColor: 'pink', padding: 5, marginLeft: 5, borderRadius: 10 }}></View>} activeDot={<View style={{ backgroundColor: 'white', padding: 5, marginLeft: 5, borderRadius: 10 }}></View>} >
      {errorlog ? <Text>Loading</Text> : banneritems && banneritems.map((item,index) => (
           <View testID="Hello" style={styles.slide1} key={index}>
           <ImageBackground source={{ uri: `https://www.api.octoberecommerce.duckdns.org/${item.image}` }} style={{ width: '100%', height: '100%' }}>
             <View style={{paddingTop: 50, paddingLeft: 50}}>
              <Text style={styles.text}>{item.title}</Text>
              <Text style={styles.paratext}>{item.description ? item.description : 'placeholder text here'}</Text>
             <TouchableOpacity>
               <View style={{padding: 5, width: 150, backgroundColor:'black',position: 'absolute',bottom: 15}}>
                 <Center>
                    <Text style={{ color: 'white' }}>{item.btn_text}</Text>
                 </Center>
               </View>
             </TouchableOpacity>
             </View>
           
             </ImageBackground>
       </View>
      ))}
      
   
    
     
  </Swiper>
  )
}

export default SwiperComponent