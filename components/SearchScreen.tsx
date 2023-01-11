import { Text, Button,TouchableOpacity } from "react-native"
import { HStack, Input } from "native-base"
import IonIcons from 'react-native-vector-icons/Ionicons';
const SearchScreen = ({navigation}) => {
  return (
    <>
      <HStack space={4} marginY={2} marginX={2}>
        <TouchableOpacity onPress={() => navigation.goBack()} >
          <IonIcons name='chevron-back' size={32} />
        </TouchableOpacity>
       
        <Input size="2xl" variant="rounded"  placeholder="Search Products....." w='300'/>
      </HStack>
      
    </>
  )
}
export default SearchScreen