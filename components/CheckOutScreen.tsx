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
} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';

// choose payment components
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

const PaymentMethod = () => {
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
            <Input size="lg" w="97%" placeholder="ScreenShoot" />
          </FormControl>
        </HStack>
      </VStack>
    </>
  );
};

const CheckOutScreen = ({navigation}) => {
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
            <Button backgroundColor={'#FF6195'} rounded={'xl'}>
              New Address
            </Button>
            <Button backgroundColor={'#FF6195'} rounded={'xl'}>
              Choose Address
            </Button>
          </HStack>
          <Checkbox value="1" isChecked>
            <Text fontSize={16} style={{color: 'gray'}}>
              {' '}
              Use Default Address
            </Text>
          </Checkbox>
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
