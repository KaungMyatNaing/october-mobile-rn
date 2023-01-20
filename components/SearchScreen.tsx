import {TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
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
import IonIcons from 'react-native-vector-icons/Ionicons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {color} from 'react-native-reanimated';
const SearchScreen = ({navigation}) => {
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [isOpen, setIsOpen] = React.useState(false);

  const onClose = () => setIsOpen(false);

  const cancelRef = React.useRef(null);
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
          <Container
            h="auto"
            w="100%"
            rounded="lg"
            shadow={0}
            mb={2}
            backgroundColor="gray.200">
            <HStack
              space={12}
              m={3}
              justifyContent={'center'}
              alignItems={'center'}>
              <Heading size="md" style={{fontFamily: 'Gotham Pro'}}>
                Default Billing Address
              </Heading>
              <HStack space={1} justifyContent={'center'} alignItems={'center'}>
                <IonIcons
                  name="ios-checkbox-outline"
                  size={25}
                  style={{color: 'darkgreen'}}
                />

                <AntIcon
                  name="delete"
                  size={25}
                  style={{color: 'red'}}
                  onPress={() => setIsOpen(!isOpen)}
                />

                {/* delete dialog  */}
                <AlertDialog
                  leastDestructiveRef={cancelRef}
                  isOpen={isOpen}
                  onClose={onClose}>
                  <AlertDialog.Content>
                    <AlertDialog.CloseButton />
                    <AlertDialog.Header>Delete Address</AlertDialog.Header>
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
                        <Button colorScheme="danger" onPress={onClose}>
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
                Myanmar Web Creator
              </Text>
              <Text fontSize={18} style={{color: 'gray'}}>
                Yangon, Myanmar
              </Text>
              <Text fontSize={18} style={{color: 'gray'}}>
                No.624, Gankgaw Yeik Thar Street 16/4
              </Text>
              <Text fontSize={18} style={{color: 'gray'}}>
                0900000000
              </Text>
            </VStack>
          </Container>

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
                        />
                      </FormControl>
                      <FormControl mt="2">
                        <Input
                          placeholder="Phone"
                          rounded="xl"
                          fontSize={'md'}
                        />
                      </FormControl>
                      <FormControl mt="2">
                        <Input
                          placeholder="Region"
                          rounded="xl"
                          fontSize={'md'}
                        />
                      </FormControl>
                      <FormControl mt="2">
                        <Input
                          placeholder="City"
                          rounded="xl"
                          fontSize={'md'}
                        />
                      </FormControl>
                      <FormControl mt="2">
                        <Input
                          placeholder="Township"
                          rounded="xl"
                          fontSize={'md'}
                        />
                      </FormControl>
                      <FormControl mt="2">
                        <Input
                          placeholder="Building No."
                          rounded="xl"
                          fontSize={'md'}
                        />
                      </FormControl>
                      <FormControl mt="2">
                        <Input
                          placeholder="Address"
                          rounded="xl"
                          fontSize={'md'}
                        />
                      </FormControl>
                      <FormControl mt="2" mb={'20'}>
                        <Input
                          placeholder="Type"
                          rounded="xl"
                          fontSize={'md'}
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
                          setShowModal(false);
                        }}>
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
