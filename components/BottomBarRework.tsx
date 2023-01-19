import React from 'react';
import {Image, Pressable} from 'react-native';
import {
  VStack,
  HStack,
  Button,
  IconButton,
  Text,
  NativeBaseProvider,
  Center,
  Box,
  StatusBar,
  Container,
} from 'native-base';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const BottomBarRework = () => {
  const [selected, setSelected] = React.useState(0);
  return (
    <Box
      w="90%"
      py={5}
      px={3}
      maxW="90%"
      position="absolute"
      bottom={125}
      bg="#421926"
      marginLeft="25"
      marginRight="25"
      marginBottom="25"
      borderRadius="25">
      <HStack
        justifyContent="space-between"
        alignItems="center"
        px={2}
        space={2}>
        <Pressable
          opacity={selected === 0 ? 1 : 0.5}
          onPress={() => setSelected(0)}>
          <Center>
            <Icon
              name={selected === 0 ? 'home' : 'home-outline'}
              size={25}
              color="#F8F6F9"
            />
          </Center>
        </Pressable>
        <Pressable
          opacity={selected === 1 ? 1 : 0.5}
          onPress={() => setSelected(1)}>
          <Center>
            <MaterialIcon
              name={selected === 1 ? 'shopping' : 'shopping-outline'}
              size={25}
              color="#F8F6F9"
            />
          </Center>
        </Pressable>
        <Pressable
          opacity={selected === 2 ? 1 : 0.5}
          onPress={() => setSelected(2)}>
          <Center>
            <Icon
              name={selected === 2 ? 'heart' : 'heart-outline'}
              size={25}
              color="#F8F6F9"
            />
          </Center>
        </Pressable>
        <Pressable
          opacity={selected === 3 ? 1 : 0.5}
          onPress={() => setSelected(3)}>
          <Center>
            <MaterialIcon
              name={selected === 3 ? 'face-woman' : 'face-woman-outline'}
              size={25}
              color="#F8F6F9"
            />
          </Center>
        </Pressable>
      </HStack>
    </Box>
  );
};

export default BottomBarRework;
