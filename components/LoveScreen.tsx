import { VStack,ScrollView,Box,Text } from "native-base"
import WishListItem from "./WishListItem"


const LoveScreen = () => {
  return (
    <>
      <Text fontSize='2xl' p='3' style={{fontFamily:'GothamPro-Bold'}}>Andrew Tate's Wish List</Text>
      <ScrollView>
      <Box width='100%' h='100%' justifyContent='center' alignItems='center' flex={1} paddingBottom='100' paddingTop='15'> 
      <WishListItem />
      <WishListItem />
      <WishListItem />
          <WishListItem />
          <WishListItem />
      <WishListItem />
      <WishListItem />
      <WishListItem/>
      </Box>
        </ScrollView>
    
    </>
  )
}
export default LoveScreen