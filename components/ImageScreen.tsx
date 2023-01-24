import { Image,View,TouchableOpacity,Text } from "react-native"
const ImageScreen = ({ navigation, route }) => {
  const { uri } = route.params;
  return (
    <View>
      
      <TouchableOpacity  onPress={()=> navigation.goBack()}>
      <Image style={{ width: '100%', height: '100%'}} source={{ uri: uri }} />
        </TouchableOpacity>
    
      
      {/*<Text style={{position: 'absolute', top:0, right: 10}}>Close</Text>*/}
      
      
    </View>
  )
}
export default ImageScreen