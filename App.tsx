/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {Stack, Input, Container,Center,Image,Button,Box,ScrollView} from 'native-base';
import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { useTailwind } from 'tailwind-rn';
import HeaderBar from './components/HeaderBar';
import BottomBar from './components/BottomBar';
import CatagoryPage from './components/CatagoryPage';
import BottomBarRework from './components/BottomBarRework';
import ProductRework from './components/ProductRework';
import ProductBanner from './components/ProductBanner';
import ScrollCatagory from './components/ScrollCatagory';
import ProductCard from './components/ProductCard';
import ProductDetail from './components/ProductDetail';
import RootNavigator from './components/RootNavigator';
import BottomTab from './components/BottomTab';
import { NavigationContainer } from '@react-navigation/native';
import TopBarReborn from './components/TopBarReborn';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './components/SearchScreen';
import HomeScreen from './components/HomeScreen';
import ImageScreen from './components/ImageScreen';
import SplashScreen from './components/SplashScreen';
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';
import OrderDetailScreen from './components/OrderDetailScreen';

const StackDuck = createStackNavigator()

const Section: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({title}) => {
  const tw = useTailwind();

  return (
    <View style={styles.sectionContainer}>
      <Text style={[tw('text-blue-800 bg-white')]}>{title}</Text>
    </View>
  );
  };

const Product = () => {
  const tw = useTailwind();
  return (
    <Box style={styles.testcontainer}>
  <Image source={{ uri: "https://cataas.com/cat" }} size="lg" borderRadius="15" alt="cat" />
      <View style={{width:'100%',padding: 3}}>
        <Text style={styles.productname}>Diavlo</Text>
        <Text style={styles.subname}>Lorem</Text>
        <Text style={styles.pricename}>$ 100</Text>
  </View>
  <Stack direction='row' space={50}>
  <Text>❤️</Text>
 
 <Text>🛒</Text>
  </Stack>

  </Box>
  )
  
  }

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
    
    
      {/*<BottomBarRework/>*/}
     
      <StackDuck.Navigator>
        {/*<StackDuck.Screen options={{ headerShown: false }} name="SplashScreen" component={SplashScreen} />*/}
        <StackDuck.Screen options={{ headerShown: false }} name=" OrderDetailScreen" component={OrderDetailScreen} />
        <StackDuck.Screen options={{ headerShown: false }} name="LoginScreen" component={LoginScreen} />
        <StackDuck.Screen options={{ headerShown: false }} name="RegisterScreen" component={RegisterScreen} />
       
        <StackDuck.Screen options={{ headerShown: false }} name="TopBarReborn" component={TopBarReborn} />
        <StackDuck.Screen options={{ headerShown: false }} name="SearchScreen" component={SearchScreen} />
        <StackDuck.Screen options={{ headerShown: false }} name="HomeScreen" component={HomeScreen} />
        <StackDuck.Screen options={{ headerShown: false }} name="ImageScreen" component={ImageScreen} />
        <StackDuck.Screen options = {{headerShown: false}} name="ProductDetail" component={ProductDetail}/>
        </StackDuck.Navigator>
     
    
      </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  mcontainer: {
    width: '100%',
    flex: 1,
   justifyContent: 'center',
    alignItems: 'center',
   flexDirection:'row'
  },
  testcontainer: {
    width: '33.33%',
    flex: 1,
   justifyContent: 'center',
    alignItems: 'center',
    border: 'solid',
    padding: 10,
    borderRadius: 15,
    
  },
  textcontainer: {
    textAlign: 'left'
   
  },
  productname: {
    fontWeight: '400',
    letterSpacing: 1.5,
    color: 'black'
  },
  subname: {
    color: '#B7B7B7',

  },
  pricename: {
    fontWeight: '400',
    color: 'black'
  }
});

export default App;
