import * as React from 'react';
import {View, Text, Button, TouchableOpacity, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {Input, Stack, Center, NativeBaseProvider, HStack} from 'native-base';
import BottomTab from './BottomTab';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import AntIcons from 'react-native-vector-icons/AntDesign';
import SearchScreen from './SearchScreen';
import CheckOutScreen from './CheckOutScreen';

function Feed({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
      <BottomTab />
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      {/*<Input size="2xl" placeholder="2xl Input" w='150' onFocus={() => navigation.navigate('SearchScreen')}/>*/}
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function TopBarReborn() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={({navigation}) => ({
        headerStyle: {
          backgroundColor: '#DEE0DF',
        },

        headerTitle: () => (
          <HStack justifyContent="space-between" space={65}>
            <Image
              source={require('../assets/images/logo.png')}
              style={{width: 200, height: 45}}
              alt="baka"
            />
            <HStack space={3} justifyContent="center" alignItems="center">
              <TouchableOpacity>
                <AntIcons
                  name="search1"
                  color="black"
                  size={30}
                  onPress={() => navigation.navigate('CheckOutScreen')}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntIcons name="shoppingcart" color="black" size={35} />
              </TouchableOpacity>
            </HStack>
          </HStack>
        ),
      })}>
      <Drawer.Screen name="BottomTab" component={BottomTab} />
      <Drawer.Screen name="Feed" component={Feed} />
    </Drawer.Navigator>
  );
}

export default TopBarReborn;
