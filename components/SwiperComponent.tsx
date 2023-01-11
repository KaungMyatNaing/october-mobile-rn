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

const SwiperComponent = () => {
  return (
    <Swiper style={styles.wrapper} showsButtons loop={false} dot={<View style={{ backgroundColor: 'pink', padding: 5, marginLeft: 5, borderRadius: 10 }}></View>} activeDot={<View style={{ backgroundColor: 'white', padding: 5, marginLeft: 5, borderRadius: 10 }}></View>} >
      <View testID="Hello" style={styles.slide1}>
        <ImageBackground source={require('../assets/images/s1.png')} style={{ width: '100%', height: '100%' }}>
          <View style={{paddingTop: 50, paddingLeft: 50}}>
          <Text style={styles.text}>Hello Swiper</Text>
          <Text style={styles.paratext}>Nature Loves You</Text>
          <TouchableOpacity>
            <View style={{padding: 5, width: 150, backgroundColor:'black'}}>
              <Center>
                <Text style={{color:'white'}}>Sample</Text>
              </Center>
            </View>
          </TouchableOpacity>
          </View>
        
          </ImageBackground>
    </View>
      <View testID="Beautiful" style={styles.slide2}>
      <ImageBackground  source={require('../assets/images/s2.png')} style={{ width: '100%', height: '100%' }}>
          <View style={{paddingTop: 50, paddingLeft: 50}}>
          <Text style={styles.text}>Hello Swiper</Text>
          <Text style={styles.paratext}>Nature Loves You</Text>
          <TouchableOpacity>
            <View style={{padding: 5, width: 150, backgroundColor:'transparent',borderWidth: 1}}>
              <Center>
                <Text style={{color:'black'}}>Sample</Text>
              </Center>
            </View>
          </TouchableOpacity>
          </View>
        
          </ImageBackground>
    </View>
      <View testID="Simple" style={styles.slide3}>
      <ImageBackground  source={require('../assets/images/s1.png')} style={{ width: '100%', height: '100%' }}>
          <View style={{paddingTop: 50, paddingLeft: 50}}>
          <Text style={styles.text}>Hello Swiper</Text>
          <Text style={styles.paratext}>Nature Loves You</Text>
          <TouchableOpacity style={{width: 150}}>
            <View style={{padding: 5, width: 150, backgroundColor:'black'}}>
              <Center>
                <Text style={{color:'white'}}>Sample</Text>
              </Center>
            </View>
          </TouchableOpacity>
          </View>
        
          </ImageBackground>
    </View>
  </Swiper>
  )
}

export default SwiperComponent