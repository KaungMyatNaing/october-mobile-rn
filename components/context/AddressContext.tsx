import React, {createContext} from 'react';
import {useState} from 'react';
import {useToast} from 'native-base';

export const AddressContext = createContext();

const AddressContextProvider = props => {
  const toast = useToast();

  // add new addresses

  const [values, setValues] = React.useState({
    fullName: '',
    phone: '',
    region: '',
    city: '',
    township: '',
    buildingNo: '',
    address: '',
    type: '',
  });
  // fetch all address
  const [addressBooks, setaddressBooks] = React.useState([]);

  React.useEffect(() => {
    fetch(`https://api.october.com.mm/api/address/`, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer 422|OpVkXK4kXQg2eNApUlTCmUOgOlzPvVsKpgMDE7kw',
      },
    })
      .then(response => response.json())
      .then(data => {
        const sortedData = data.data.address.sort(
          (a, b) => b.is_default - a.is_default,
        );
        setaddressBooks(sortedData);
      })

      .catch(err =>
        // toast.show({
        //   title: 'Something went wrong',
        //   placement: 'top',
        // }),
        console.log(err),
      );
  }, [addressBooks]);

  //addresses

  // add new addresses

  const handleChange = (prop, text) => {
    setValues({...values, [prop]: text});
  };

  const handleAddNewAddress = () => {
    console.log('handleAddNewAddress');
    // setShowModal(false);
    const full_name = values.fullName;
    const phone = values.phone;
    const region = values.region;
    const city = values.city;
    const township = values.township;
    const building_no = values.buildingNo;
    const address = values.address;
    const type = values.type;

    const data = {
      full_name: full_name,
      phone: phone,
      region: region,
      city: city,
      township: township,
      building_no: building_no,
      address: building_no,
      type: type,
    };

    fetch(`https://api.october.com.mm/api/address-create/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 422|OpVkXK4kXQg2eNApUlTCmUOgOlzPvVsKpgMDE7kw',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success === true) {
          setaddressBooks(prevData => [...prevData, data.data]);
          toast.show({
            title: data.message,
            placement: 'top',
          });
        } else {
          toast.show({
            title: 'failed',
            placement: 'top',
          });
        }
      })

      .catch(err =>
        // toast.show({
        //   title: 'Something went wrong',
        //   placement: 'top',
        // }),
        console.log(err),
      );
  };

  const handleDefaultAddress = id => {
    console.log('handleDefaultAddress');
    fetch(`https://api.october.com.mm/api/default-address/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 422|OpVkXK4kXQg2eNApUlTCmUOgOlzPvVsKpgMDE7kw',
      },
      // body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success === true) {
          setaddressBooks(prevData => [...prevData]);
          toast.show({
            title: data.message,
            placement: 'top',
          });
        } else {
          toast.show({
            title: 'failed',
            placement: 'top',
          });
        }
      })

      .catch(err =>
        // toast.show({
        //   title: 'Something went wrong',
        //   placement: 'top',
        // }),
        console.log(err),
      );
  };

  const handleDeleteAddress = id => {
    console.log('handleDeleteAddress');
    // onClose();
    fetch(`https://api.october.com.mm/api/address-remove/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 422|OpVkXK4kXQg2eNApUlTCmUOgOlzPvVsKpgMDE7kw',
      },
      // body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success === true) {
          setaddressBooks(prevData => [...prevData]);
          toast.show({
            title: data.message,
            placement: 'top',
          });
        } else {
          toast.show({
            title: 'failed',
            placement: 'top',
          });
        }
      })

      .catch(err =>
        // toast.show({
        //   title: 'Something went wrong',
        //   placement: 'top',
        // }),
        console.log(err),
      );
  };
  return (
    <AddressContext.Provider
      value={{
        addressBooks,
        handleChange,
        handleAddNewAddress,
        handleDefaultAddress,
        handleDeleteAddress,
      }}>
      {props.children}
    </AddressContext.Provider>
  );
};

export default AddressContextProvider;
