import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  HStack,
  Heading,
  Image,
  Input,
  ScrollView,
  Spacer,
  Text,
  VStack,
} from 'native-base';
import React from 'react';
import {SafeAreaView, TouchableOpacity} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
type RootStackParamList = {
  AccountDetails: undefined;
  ChangePassword: undefined;
};
// #region typage
type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList, // VSCode Error: Cannot find name 'RootStackParamList'
  'AccountDetails'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};  
//#endregion

const ActionButton = (props : {iconname : string, color : string , name : string }) => {
  return(
  <TouchableOpacity>
    <Box style={{borderWidth: 0, padding: 10, width: 275}}>
        <HStack space={2}>
          <FontAwesome size={25} name={props.iconname} />
          <Text  textAlign='left' color={props.color} style={{fontFamily: 'GothamPro-Bold'}}>{props.name}</Text>
        </HStack>
       
      
    </Box>
    </TouchableOpacity>
  )
}

const ProfileMenuScreen = ({navigation}: Props) => {
  const tw = useTailwind();
  return (
    <SafeAreaView>
      <ScrollView>
        <Container m={10}>
          <Box>
            <HStack
              space={40}
              justifyContent="center"
              alignItems="center"
              style={[tw('')]}>
              <Heading>Profile</Heading>
              
            </HStack>
          </Box>
          <Center w="100%">
            <Image
              size={150}
              borderRadius={100}
              source={{
                uri: 'https://wallpaperaccess.com/full/317501.jpg',
              }}
              alt="Alternate Text"
            />
            <Text mt={2} fontSize="md" fontWeight="bold" color="gray.600" style={{fontFamily: 'GothamPro'}}>
              Ei Khine Phyo
            </Text>
            <Text mt={2} fontSize="md" fontWeight="normal" color="gray.600" style={{fontFamily: 'GothamPro'}}>
              Customer
            </Text>
          </Center>
          <Spacer style={[tw(' h-3')]} />
          <VStack width={'100%'}>
            
            <Divider my="2" style={[tw(' bg-black')]} />
          </VStack>
          <Spacer style={[tw(' h-3')]} />
          <VStack
            space={3}
            width='100%'>
            <ActionButton name='Account Details' iconname='home' color='black'/>
            <ActionButton name='Orders' iconname='archive' color='black'/>
            <ActionButton name='Address Book' iconname='book' color='black'/>
            <ActionButton name='Logout' iconname='logout' color='black'/>
          </VStack>
         
          
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileMenuScreen;
