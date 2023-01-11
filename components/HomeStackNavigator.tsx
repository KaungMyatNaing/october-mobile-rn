import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CatagoryPage from './CatagoryPage';
import ProductDetail from './ProductDetail';

const HomeStack = createNativeStackNavigator();
const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
    <HomeStack.Screen name="CatagoryPage" component={CatagoryPage} />
    <HomeStack.Screen name="ProductDetail" component={ProductDetail} />
  </HomeStack.Navigator>
    )
}
export default HomeStackNavigator