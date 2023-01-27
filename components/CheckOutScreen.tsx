import {
  Box,
  Button,
  Center,
  Checkbox,
  Container,
  Divider,
  FormControl,
  HStack,
  Heading,
  Input,
  Radio,
  Stack,
  Text,
  VStack,
  ScrollView,
  Select,
  CheckIcon,
  Image,
  Modal,
  AlertDialog,
  Pressable,
  View,
} from 'native-base';
import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {useToast} from 'native-base';
import {AddressContext} from './context/AddressContext';
// import { launchImageLibrary } from 'react-native-image-picker';

// choose payment radio components
const ChossePayment = () => {
  const [paymentType, setPaymentType] = React.useState('');
  return (
    <>
      <VStack space={4} mt={4}>
        <Heading size={'md'}>Chosse Payment</Heading>

        <Radio.Group
          name="exampleGroup"
          defaultValue="1"
          accessibilityLabel="pick a size"
          value={paymentType}
          onChange={nextValue => {
            setPaymentType(nextValue);
          }}>
          <Stack
            direction={{
              base: 'row',
              md: 'row',
            }}
            alignItems={{
              base: 'flex-start',
              md: 'center',
            }}
            space={4}
            w="75%"
            maxW="300px">
            <Radio value="1" colorScheme="pink" size="sm" my={1}>
              <Text fontSize={16} style={{color: 'gray'}}>
                {' '}
                Bank Payment
              </Text>
            </Radio>
            <Radio value="2" colorScheme="pink" size="sm" my={1}>
              <Text fontSize={16} style={{color: 'gray'}}>
                {' '}
                Cash On Delivery
              </Text>
            </Radio>
            {/* <Radio value="3" colorScheme="pink" size="sm" my={1}>
            Large
          </Radio> */}
          </Stack>
        </Radio.Group>
      </VStack>
      {paymentType === '1' && <BankingInformation />}
    </>
  );
};

// banking information select box

const BankingInformation = () => {
  const [service, setService] = React.useState('');

  return (
    <>
      <Center>
        <Box maxW="300" mt={2}>
          <Select
            selectedValue={service}
            minWidth="180"
            size="md"
            borderRadius={'xl'}
            accessibilityLabel="Choose BankType"
            placeholder="Choose BankType"
            _selectedItem={{
              bg: 'teal.600',
              endIcon: <CheckIcon size="1" />,
            }}
            my={1}
            p={2}
            onValueChange={itemValue => setService(itemValue)}>
            <Select.Item label="KBZ Mobile Banking" value="kbz" />
            <Select.Item label="AYA Mobile Banking" value="aya" />
            <Select.Item label="CB Mobile Banking" value="cb" />
            <Select.Item label="KBZ pay" value="kpay" />
            <Select.Item label="AYA pay" value="apay" />
          </Select>
        </Box>
      </Center>
      {/* bank card  */}
      {<KBZBankCard service={service} />}
    </>
  );
};

// bank card component
const KBZBankCard = props => {
  //cannot change state twice
  // const [name, setName] = React.useState('');
  // const [accountName, setAccountName] = React.useState('');
  const allBanks = {
    kbz: {
      name: 'KBZ',
      photo: '',
      accountName: 'Linn kbz',
      accountNumber: '09877811234223',
    },
    aya: {
      name: 'AYA',
      photo: '',
      accountName: 'Linn aya',
      accountNumber: '33437282833343',
    },
    cb: {
      name: 'CB',
      photo: '',
      accountName: 'Linn cb',
      accountNumber: '09877332323',
    },
  };

  let name = '';
  let photo = '';
  let accountName = '';
  let accountNumber = '';

  if (props.service === 'kbz') {
    name = allBanks.kbz.name;
    accountName = allBanks.kbz.accountName;
    accountNumber = allBanks.kbz.accountNumber;
  } else if (props.service === 'aya') {
    name = allBanks.aya.name;
    accountName = allBanks.aya.accountName;
    accountNumber = allBanks.aya.accountNumber;
  } else if (props.service === 'cb') {
    name = allBanks.cb.name;
    accountName = allBanks.cb.accountName;
    accountNumber = allBanks.cb.accountNumber;
  } else {
    return;
  }

  return (
    <Box
      h="auto"
      p={3}
      rounded="lg"
      shadow={'7'}
      my={3}
      style={{width: 370}}
      backgroundColor="white">
      <VStack space={3}>
        <HStack space={'48'} p={3}>
          <Heading size={'xl'}>{name}</Heading>
          <Box>
            <Image
              source={require('../assets/images/KBZBankLogo.png')}
              size={70}
              alt="sxeo"
            />
          </Box>
        </HStack>
        <VStack space={1} pl={4}>
          <Text fontSize="lg" color={'gray.700'} letterSpacing={'xl'}>
            Account Number
          </Text>
          <Text fontSize="lg" color={'pink.400'} letterSpacing={'2xl'}>
            {accountNumber}
          </Text>
        </VStack>
        <VStack space={1} pl={4}>
          <Text fontSize="lg" color={'gray.700'} letterSpacing={'xl'}>
            Account Name
          </Text>
          <Text fontSize="lg" color={'pink.400'} letterSpacing={'2xl'}>
            {accountName}
          </Text>
        </VStack>
      </VStack>
    </Box>
  );
};

// payment method component
const createFormData = (photo, body = {}) => {
  const data = new FormData();

  data.append('photo', {
    name: photo.fileName,
    type: photo.type,
    // uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri,
  });

  Object.keys(body).forEach(key => {
    // data.append(key, body[key]);
  });

  return data;
};

const PaymentMethod = () => {
  const [photo, setPhoto] = React.useState(null);

  const handleChoosePhoto = () => {
    // launchImageLibrary({noData: true}, response => {
    //   // console.log(response);
    //   if (response) {
    //     setPhoto(response);
    //   }
    // });
  };

  const handleUploadPhoto = () => {
    fetch(`${'SERVER_URL'}/api/upload`, {
      method: 'POST',
      body: createFormData(photo, {userId: '123'}),
    })
      .then(response => response.json())
      .then(response => {
        console.log('response', response);
      })
      .catch(error => {
        console.log('error', error);
      });
  };

  return (
    <>
      <Heading size={'md'} mt={4}>
        {' '}
        Payment Method
      </Heading>
      <VStack space={2} my={2} ml={1}>
        <FormControl isInvalid w="100%" maxW="375px">
          <FormControl.Label>Payment Type</FormControl.Label>
          <Input size="lg" w="100%" placeholder="Choose Payment" />
        </FormControl>
        <HStack space={1}>
          <FormControl isInvalid w="50%" maxW="380px">
            <FormControl.Label>Account Number</FormControl.Label>
            <Input size="lg" w="97%" placeholder="Enter Account Number" />
          </FormControl>
          <FormControl isInvalid w="50%" maxW="380px">
            <FormControl.Label>Account Name</FormControl.Label>
            <Input size="lg" w="97%" placeholder="Enter Account Name" />
          </FormControl>
        </HStack>
        <HStack space={1}>
          <FormControl isInvalid w="50%" maxW="380px">
            <FormControl.Label>Transaction ID</FormControl.Label>
            <Input size="lg" w="97%" placeholder="Enter Transaction ID" />
          </FormControl>
          <FormControl isInvalid w="50%" maxW="380px">
            <FormControl.Label>Transaction ScreenShoot</FormControl.Label>
            {/* <Input
              size="lg"
              w="97%"
              placeholder="ScreenShoot"
            /> */}
            <View style={{flex: 1}}>
              {photo && (
                <>
                  <Image
                    // source={{uri: photo.uri}}
                    style={{width: 300, height: 300}}
                  />
                  <Button onPress={handleUploadPhoto}>Upload</Button>
                </>
              )}
              <Button
                w="97%"
                h={'12'}
                borderRadius={'xl'}
                onPress={handleChoosePhoto}
                variant={'outline'}>
                <Text>Choose Photo</Text>
              </Button>
            </View>
          </FormControl>
        </HStack>
      </VStack>
    </>
  );
};

// main page checkout screen
const CheckOutScreen = ({navigation}) => {
  const toast = useToast();
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [showAddressCard, setShowAddressCard] = React.useState<boolean>(false);
  const [showModalAddress, setShowModalAddress] =
    React.useState<boolean>(false);

  const [selectedAddress, setSelectedAddress] = React.useState({});

  const [isOpen, setIsOpen] = React.useState(false);

  const onClose = () => setIsOpen(false);

  const cancelRef = React.useRef(null);

  // fetch all address

  const {addressBooks, handleChange, handleAddNewAddress} =
    useContext(AddressContext);

  const handleAddNewAddressContext = () => {
    handleAddNewAddress();
    setShowModal(false);
  };

  // selected address

  const handleShowAddresCard = id => {
    setShowAddressCard(true);
    setShowModalAddress(false);
    setSelectedAddress(addressBooks.find(address => address.id === id));
    console.log(selectedAddress);
  };

  return (
    <ScrollView bgColor={'white'}>
      <HStack space={4} marginY={2} marginX={2}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IonIcons name="chevron-back" size={32} />
        </TouchableOpacity>
      </HStack>
      <Container pl={5}>
        <Heading>Confirm Your Information</Heading>
        <Divider
          width="96"
          _light={{
            bg: 'muted.800',
          }}
          _dark={{
            bg: 'muted.50',
          }}
          mt={2}
          mb={3}
        />
        <VStack space={4} mt={4}>
          <Heading size={'md'}>Address</Heading>
          <HStack space={3}>
            <Button
              backgroundColor={'#FF6195'}
              rounded={'xl'}
              onPress={() => setShowModal(true)}>
              New Address
            </Button>
            {/* add new address modal  */}
            <Modal
              width={'full'}
              height={'full'}
              isOpen={showModal}
              onClose={() => setShowModal(false)}>
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
                        onChangeText={text => handleChange('buildingNo', text)}
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
                      onPress={() => {
                        handleAddNewAddressContext();
                      }}>
                      Save
                    </Button>
                  </Button.Group>
                </Modal.Footer>
              </Modal.Content>
            </Modal>
            <Button
              backgroundColor={'#FF6195'}
              rounded={'xl'}
              onPress={() => setShowModalAddress(true)}>
              Choose Address
            </Button>
            {/* show all adddress modal */}
            <Modal
              isOpen={showModalAddress}
              onClose={() => setShowModalAddress(false)}>
              <Modal.Content width="full" height="full">
                <Modal.CloseButton />
                <Modal.Header fontWeight={'300'}>Choose Address</Modal.Header>
                <ScrollView h="96">
                  <Modal.Body>
                    {/* address card  */}
                    {addressBooks.map(address => {
                      return (
                        <Pressable
                          h="auto"
                          w="100%"
                          rounded="lg"
                          shadow={0}
                          mb={2}
                          key={address.id}
                          onPress={() => handleShowAddresCard(address.id)}
                          backgroundColor="gray.200">
                          <HStack
                            space={'32'}
                            m={3}
                            justifyContent={'center'}
                            alignItems={'center'}>
                            <Heading
                              size="md"
                              style={{fontFamily: 'Gotham Pro'}}>
                              {address.is_default === 1 ? 'Default' : ''}{' '}
                              Billing Address
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
                                  onPress={() =>
                                    handleDefaultAddress(address.id)
                                  }
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
                                    This will remove the address. This action
                                    cannot be reversed. Deleted data can not be
                                    recovered.
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
                                          handleDeleteAddress(address.id)
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
                        </Pressable>
                      );
                    })}
                  </Modal.Body>
                </ScrollView>
              </Modal.Content>
            </Modal>
          </HStack>
          <Checkbox value="1">
            <Text fontSize={16} style={{color: 'gray'}}>
              {' '}
              Use Default Address
            </Text>
          </Checkbox>
          {/* show choosed address  */}

          {selectedAddress && showAddressCard && (
            <Box
              // minW="32"
              rounded="lg"
              shadow={0}
              mb={2}
              mx={'0.5'}
              backgroundColor="gray.200"
              style={{width: 370}}>
              <HStack
                space={12}
                m={3}
                justifyContent={'center'}
                alignItems={'center'}>
                <Heading size="md" style={{fontFamily: 'Gotham Pro'}}>
                  Default Billing Address
                </Heading>
              </HStack>
              <Divider
                _light={{
                  bg: 'muted.800',
                }}
                _dark={{
                  bg: 'muted.50',
                }}
              />
              <VStack space={2} px={7}>
                <Text bold fontSize={18}>
                  {selectedAddress?.full_name}
                </Text>
                <Text fontSize={18} style={{color: 'gray'}}>
                  {selectedAddress?.region}, {selectedAddress?.township}
                </Text>
                <Text fontSize={18} style={{color: 'gray'}}>
                  {selectedAddress?.address}
                </Text>
                <Text fontSize={18} style={{color: 'gray'}}>
                  {selectedAddress?.phone}
                </Text>
              </VStack>
            </Box>
          )}
        </VStack>
        <Divider
          width="96"
          _light={{
            bg: 'muted.800',
          }}
          _dark={{
            bg: 'muted.50',
          }}
          mt={2}
          mb={3}
        />
        <ChossePayment />
        <PaymentMethod />
      </Container>
    </ScrollView>
  );
};

export default CheckOutScreen;
