
import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, TextInput, Button, Alert, Text } from 'react-native';
import Socket from './src/Screens/Socket';
import socketServices from './src/utils/socketService';
import { getManufacturer } from 'react-native-device-info';
import Routes from './src/Navigations/Routes';
import { Provider } from 'react-redux'
import store from './src/redux/store';

function App() {
  // const [Origin , setOrigin] = useState();
  // const [message, setMessage] = useState('');
  // const [data , setData ] = useState([]);
  // // manufacuring from the socket we get!!!!
  // useEffect(() => {
  //   const Manufacturer = async () => {
  //     try {
  //       const manufacturer = await getManufacturer();
  //       setOrigin(manufacturer)
  //       console.log("manufacturer=========>", manufacturer)
  //       // Do something with manufacturer
  //     } catch (error) {
  //       console.error('Error fetching manufacturer:', error);
  //       // Handle error as needed
  //     }
  //   };

  //   Manufacturer();
  // }, []);


  // useEffect(() => {
  //   socketServices.initailizeSocket()

  // },[])

  // const sendMessage = () => {
  //   if (!!message) {
  //     socketServices.emit('send_message', `${message} from ${Origin}` )
  //     return;
  //   }
  //   Alert.alert("message  empty")


  // }

  // useEffect(() => {
  //   socketServices.on('received_message', (msg) => {
  //     console.log("message received in reactApp", msg)
  //     let cloneArry = [...data]
  //     setData(cloneArry.concat(msg))
  //   })
  // }, [data])


  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <Routes />
        {/* <View style={styles.container}>
        <View style={{ ...styles.inputcontainer, padding: 15 }}>
          <View style={{ flex: 0.9 }} >
            <TextInput
              defaultValue={message}
              placeholder='Enter your Text here!!!'
              style={styles.inputbox}
              onChangeText={text => setMessage(text)}
            />
          </View>
          <View >
            <Button onPress={() => sendMessage()} title="send" />
          </View>
        </View>
            {data?.map((i,val) => {
            return (
              <View key={val}>
                 <Text>{i}</Text>
              </View> 
            )
          })}
      </View>
      <Socket /> */}
      </SafeAreaView>
    </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   },
//   inputbox: {
//     height: 42,
//     borderWidth: 1,
//     borderRadius: 6
//   },
//   inputcontainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between'
//   }
// })

export default App;
