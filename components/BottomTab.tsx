import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View} from 'react-native';
import { Text } from 'native-base';
import HomeScreen from './HomeScreen';
import ProductsScreen from './ProductsScreen';
import LoveScreen from './LoveScreen';
import CartScreen from './CartScreen';
import ProfileMenuScreen from './ProfileMenuScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { color } from 'react-native-reanimated';
const Tab = createBottomTabNavigator();
const BottomTab = () => {
  return (
      <Tab.Navigator
    
       screenOptions={{
      tabBarStyle: { position: 'absolute',
      elevation: 0,
      backgroundColor: 'white',
           height: 75,
          
        },
         
       
      
  
    
      }}  >
      <Tab.Screen name="Home" component={HomeScreen} options={{
        headerShown: false, tabBarShowLabel: true, tabBarLabel: ({focused}) => <Text style={{ fontSize: 15,fontFamily: 'GothamPro', marginBottom: 10, color: focused ? "#E91E63" : "#616161"}}>Home</Text>,        tabBarIcon: ({focused})=>(
          <View style={{
            marginTop: 10
          }}>
            <MaterialCommunityIcons name={focused ? 'home-variant' : 'home-variant-outline'} color={focused ? '#E91E63' : '#616161'} size={35} />
            </View>
          )
        }} />
        <Tab.Screen name="Products" component={ProductsScreen} options ={{ headerShown: false, tabBarShowLabel: true,tabBarLabel: ({focused}) => <Text style={{ fontSize: 15,fontFamily: 'GothamPro', marginBottom: 10, color: focused ? "#E91E63" : "#616161"}}>Catagory</Text>, 
          tabBarIcon: ({focused})=>(
            <View style={{marginTop:10}}>
            <MaterialCommunityIcons name={focused ? 'shopping' : 'shopping-outline'} color={focused ? '#E91E63' : '#616161'} size={35}/>
            </View>
          )
        }} />
         <Tab.Screen name="Love" component={LoveScreen} options ={{headerShown: false, tabBarShowLabel: true,tabBarLabel: ({focused}) => <Text style={{ fontSize: 15,fontFamily: 'GothamPro', marginBottom: 10, color: focused ? "#E91E63" : "#616161"}}>Fav</Text>, 
          tabBarIcon: ({focused})=>(
            <View style={{marginTop:10}}>
            <MaterialCommunityIcons name={focused ? 'heart' : 'heart-outline'} color={focused ? '#E91E63' : '#616161'} size={35}/>
            </View>
          )
        }} />
         <Tab.Screen name="Cart" component={CartScreen} options ={{headerShown: false, tabBarShowLabel: true, tabBarLabel: ({focused}) => <Text style={{ fontSize: 15,fontFamily: 'GothamPro', marginBottom: 10, color: focused ? "#E91E63" : "#616161"}}>Cart</Text>, 
          tabBarIcon: ({focused})=>(
            <View style={{marginTop:10}}>
            <MaterialCommunityIcons name={focused ? 'cart' : 'cart-outline'} color={focused ? '#E91E63' : '#616161'} size={35}/>
            </View>
          )
        }} />
      <Tab.Screen name="Profile" component={ProfileMenuScreen} options={{ headerShown: false, tabBarShowLabel: true, tabBarLabel: ({focused}) => <Text style={{ fontSize: 15,fontFamily: 'GothamPro', marginBottom: 10, color: focused ? "#E91E63" : "#616161"}}>Profile</Text>,
          tabBarIcon: ({focused})=>(
            <View style={{marginTop:10}}>
              
            <MaterialCommunityIcons name={focused ? 'face-woman' : 'face-woman-outline'} color={focused ? '#E91E63' : '#616161'} size={35}/>
            </View>
          )
        }} />
      </Tab.Navigator>
    );
  
      }
        const styles= StyleSheet.create({
        normalHead : {
        color : 'black'
      },
      focusHead : {
        color : 'pink'
      }
        })
export default BottomTab