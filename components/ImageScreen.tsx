import { Image,View,TouchableOpacity,Text } from "react-native"
const ImageScreen = ({navigation}) => {
  return (
    <View>
      
      <TouchableOpacity  onPress={()=> navigation.goBack()}>
      <Image style={{ width: '100%', height: '100%'}} source={{ uri: "https://cataas.com/cat" }} />
        </TouchableOpacity>
    
      
      {/*<Text style={{position: 'absolute', top:0, right: 10}}>Close</Text>*/}
      
      
    </View>
  )
}
export default ImageScreen