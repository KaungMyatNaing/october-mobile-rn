import {TouchableOpacity} from 'react-native';
import React, {useContext, useState} from 'react';
import {
  Center,
  Container,
  Divider,
  HStack,
  Heading,
  Input,
  VStack,
  Text,
  Modal,
  FormControl,
  Button,
  ScrollView,
  AlertDialog,
} from 'native-base';
import {useToast} from 'native-base';
import IonIcons from 'react-native-vector-icons/Ionicons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {color} from 'react-native-reanimated';
import {AddressContext} from './context/AddressContext';
const SearchScreen = ({navigation}) => {
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [isOpen, setIsOpen] = React.useState(false);

  const toast = useToast();

  const onClose = () => setIsOpen(false);

  const cancelRef = React.useRef(null);

  // fetch addresses

  const {
    addressBooks,
    handleChange,
    handleAddNewAddress,
    handleDefaultAddress,
    handleDeleteAddress,
  } = useContext(AddressContext);

  const handleAddNewAddressContext = () => {
    handleAddNewAddress();
    setShowModal(false);
  };

  const handleDeleteAddressContext = id => {
    handleDeleteAddress(id);
    onClose();
  };

  // add new addresses

  // const [values, setValues] = React.useState({
  //   fullName: '',
  //   phone: '',
  //   region: '',
  //   city: '',
  //   township: '',
  //   buildingNo: '',
  //   address: '',
  //   type: '',
  // });

  // const handleChange1 = (prop, text) => {
  //   setValues({...values, [prop]: text});
  // };

  // const handleAddNewAddress1 = () => {
  //   console.log('handleAddNewAddress');
  //   setShowModal(false);
  //   const full_name = values.fullName;
  //   const phone = values.phone;
  //   const region = values.region;
  //   const city = values.city;
  //   const township = values.township;
  //   const building_no = values.buildingNo;
  //   const address = values.address;
  //   const type = values.type;

  //   const data = {
  //     full_name: full_name,
  //     phone: phone,
  //     region: region,
  //     city: city,
  //     township: township,
  //     building_no: building_no,
  //     address: building_no,
  //     type: type,
  //   };

  //   fetch(`https://api.october.com.mm/api/address-create/`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: 'Bearer 422|OpVkXK4kXQg2eNApUlTCmUOgOlzPvVsKpgMDE7kw',
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       if (data.success === true) {
  //         toast.show({
  //           title: data.message,
  //           placement: 'top',
  //         });
  //       } else {
  //         toast.show({
  //           title: 'failed',
  //           placement: 'top',
  //         });
  //       }
  //     })

  //     .catch(err =>
  //       toast.show({
  //         title: 'Something went wrong',
  //         placement: 'top',
  //       }),
  //     );
  // };

  // delete address

  // const handleDeleteAddress = id => {
  //   console.log('handleDeleteAddress');
  //   onClose();
  //   fetch(`https://api.october.com.mm/api/address-remove/${id}`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: 'Bearer 422|OpVkXK4kXQg2eNApUlTCmUOgOlzPvVsKpgMDE7kw',
  //     },
  //     // body: JSON.stringify(data),
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       if (data.success === true) {
  //         toast.show({
  //           title: data.message,
  //           placement: 'top',
  //         });
  //       } else {
  //         toast.show({
  //           title: 'failed',
  //           placement: 'top',
  //         });
  //       }
  //     })

  //     .catch(err =>
  //       toast.show({
  //         title: 'Something went wrong',
  //         placement: 'top',
  //       }),
  //     );
  // };

  // set default address

  // const handleDefaultAddress1 = id => {
  //   console.log('handleDefaultAddress');
  //   fetch(`https://api.october.com.mm/api/default-address/${id}`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: 'Bearer 422|OpVkXK4kXQg2eNApUlTCmUOgOlzPvVsKpgMDE7kw',
  //     },
  //     // body: JSON.stringify(data),
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       if (data.success === true) {
  //         toast.show({
  //           title: data.message,
  //           placement: 'top',
  //         });
  //       } else {
  //         toast.show({
  //           title: 'failed',
  //           placement: 'top',
  //         });
  //       }
  //     })

  //     .catch(err =>
  //       toast.show({
  //         title: 'Something went wrong',
  //         placement: 'top',
  //       }),
  //     );
  // };

  return (
    <>
      <HStack space={4} marginY={2} marginX={2}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IonIcons name="chevron-back" size={32} />
        </TouchableOpacity>

        <Input
          size="2xl"
          variant="rounded"
          style={{fontFamily: 'GothamPro-Bold'}}
          placeholder="Search Products....."
          w="300"
        />
      </HStack>

      {/* address card  */}
      <ScrollView h="80">
        <Center>
          {/* address card  */}

          {addressBooks &&
            addressBooks.map(address => {
              return (
                <Container
                  h="auto"
                  w="100%"
                  rounded="lg"
                  shadow={0}
                  mb={2}
                  key={address.id}
                  backgroundColor="gray.200">
                  <HStack
                    space={'32'}
                    m={3}
                    justifyContent={'center'}
                    alignItems={'center'}>
                    <Heading size="md" style={{fontFamily: 'Gotham Pro'}}>
                      {address.is_default === 1 ? 'Default' : ''} Billing
                      Address
                    </Heading>
                    <HStack
                      space={1}
                      justifyContent={'center'}
                      alignItems={'center'}>
                      {address.is_default !== 1 && (
                        <IonIcons
                          name="ios-checkbox-outline"
                          size={25}
                          style={{color: 'darkgreen'}}
                          onPress={() => handleDefaultAddress(address.id)}
                        />
                      )}

                      {address.is_default !== 1 && (
                        <AntIcon
                          name="delete"
                          size={25}
                          style={{color: 'red'}}
                          onPress={() => setIsOpen(!isOpen)}
                        />
                      )}

                      {/* delete dialog  */}
                      <AlertDialog
                        leastDestructiveRef={cancelRef}
                        isOpen={isOpen}
                        onClose={onClose}>
                        <AlertDialog.Content>
                          <AlertDialog.CloseButton />
                          <AlertDialog.Header>
                            Delete Address
                          </AlertDialog.Header>
                          <AlertDialog.Body>
                            This will remove the address. This action cannot be
                            reversed. Deleted data can not be recovered.
                          </AlertDialog.Body>
                          <AlertDialog.Footer>
                            <Button.Group space={2}>
                              <Button
                                variant="unstyled"
                                colorScheme="coolGray"
                                onPress={onClose}
                                ref={cancelRef}>
                                Cancel
                              </Button>
                              <Button
                                colorScheme="danger"
                                onPress={() =>
                                  handleDeleteAddressContext(address.id)
                                }>
                                Delete
                              </Button>
                            </Button.Group>
                          </AlertDialog.Footer>
                        </AlertDialog.Content>
                      </AlertDialog>
                    </HStack>
                  </HStack>
                  <Divider
                    _light={{
                      bg: 'muted.800',
                    }}
                    _dark={{
                      bg: 'muted.50',
                    }}
                  />
                  <VStack space={2} p={3}>
                    <Text bold fontSize={18}>
                      {address.full_name}
                    </Text>
                    <Text fontSize={18} style={{color: 'gray'}}>
                      {address.region}, {address.township}
                    </Text>
                    <Text fontSize={18} style={{color: 'gray'}}>
                      {address.address}
                    </Text>
                    <Text
                      fontSize={18}
                      style={{color: 'gray', letterSpacing: 2}}>
                      {address.phone}
                    </Text>
                  </VStack>
                </Container>
              );
            })}

          <Container
            h="56"
            w="340"
            rounded="lg"
            shadow={0}
            backgroundColor="gray.200">
            <HStack marginX={'20'} marginY={'2'}>
              <Heading size="md">Add New Address</Heading>
            </HStack>
            <Divider
              _light={{
                bg: 'muted.800',
              }}
              _dark={{
                bg: 'muted.50',
              }}
            />
            <Center marginX={'auto'} marginY={'auto'}>
              <IonIcons
                name="ios-add-circle"
                size={100}
                style={{color: '#FF6195'}}
                onPress={() => setShowModal(true)}
              />
              <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <Modal.Content width="full">
                  <Modal.CloseButton />
                  <Modal.Header>Add New Address</Modal.Header>
                  <Modal.Body>
                    <ScrollView h="80">
                      <FormControl mt={2}>
                        <Input
                          placeholder="Full Name"
                          rounded="xl"
                          fontSize={'md'}
                          onChangeText={text => handleChange('fullName', text)}
                        />
                      </FormControl>
                      <FormControl mt="2">
                        <Input
                          placeholder="Phone"
                          rounded="xl"
                          fontSize={'md'}
                          onChangeText={text => handleChange('phone', text)}
                        />
                      </FormControl>
                      <FormControl mt="2">
                        <Input
                          placeholder="Region"
                          rounded="xl"
                          fontSize={'md'}
                          onChangeText={text => handleChange('region', text)}
                        />
                      </FormControl>
                      <FormControl mt="2">
                        <Input
                          placeholder="City"
                          rounded="xl"
                          fontSize={'md'}
                          onChangeText={text => handleChange('city', text)}
                        />
                      </FormControl>
                      <FormControl mt="2">
                        <Input
                          placeholder="Township"
                          rounded="xl"
                          fontSize={'md'}
                          onChangeText={text => handleChange('township', text)}
                        />
                      </FormControl>
                      <FormControl mt="2">
                        <Input
                          placeholder="Building No."
                          rounded="xl"
                          fontSize={'md'}
                          onChangeText={text =>
                            handleChange('buildingNo', text)
                          }
                        />
                      </FormControl>
                      <FormControl mt="2">
                        <Input
                          placeholder="Address"
                          rounded="xl"
                          fontSize={'md'}
                          onChangeText={text => handleChange('address', text)}
                        />
                      </FormControl>
                      <FormControl mt="2" mb={'20'}>
                        <Input
                          placeholder="Type"
                          rounded="xl"
                          fontSize={'md'}
                          onChangeText={text => handleChange('type', text)}
                        />
                      </FormControl>
                    </ScrollView>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button.Group space={2}>
                      <Button
                        variant="ghost"
                        colorScheme="blueGray"
                        onPress={() => {
                          setShowModal(false);
                        }}>
                        Cancel
                      </Button>
                      <Button
                        backgroundColor={'#FF6195'}
                        borderRadius={'lg'}
                        // onPress={() => {
                        //   setShowModal(false);
                        // }}
                        onPress={() => handleAddNewAddressContext()}>
                        Save
                      </Button>
                    </Button.Group>
                  </Modal.Footer>
                </Modal.Content>
              </Modal>
            </Center>
          </Container>
        </Center>
      </ScrollView>
    </>
  );
};
export default SearchScreen;
