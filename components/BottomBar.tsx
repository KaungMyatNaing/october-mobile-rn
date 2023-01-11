import React from "react";
import {Image, Pressable} from 'react-native'
import { VStack, HStack, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, StatusBar, Container } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";

const BottomBar = () => {
  const [selected, setSelected] = React.useState(0);
  return (
    
    

      <Box w='100%' py={5} px={15} maxW='100%' position='absolute' bottom={65} borderTopWidth={1} borderTopRadius={25} borderColor="#FF6195" bg='white' >
      <HStack justifyContent='space-between' alignItems='center' px={2} space={2}>
        <Pressable opacity={selected === 0 ? 1 : 0.5} onPress={() => setSelected(0)}><Center><Text>🏠</Text><Text>Home</Text></Center></Pressable>
          <Pressable opacity={selected === 1 ? 1 : 0.5}  onPress={() => setSelected(1)}><Center><Text>👜</Text><Text>Catagory</Text></Center></Pressable>
          <Pressable opacity={selected === 2 ? 1 : 0.5}  onPress={() => setSelected(2)}><Center><Text>🧡</Text><Text>Favourite</Text></Center></Pressable>
          <Pressable opacity={selected === 3 ? 1 : 0.5}  onPress={() => setSelected(3)}><Center><Text>👩</Text><Text>Profile</Text></Center></Pressable>
      </HStack>
    </Box>
  
  )
}

export default BottomBar