import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import {io} from "socket.io-client";

export default function Socket() {
  const [emitted , setEmitted ] = useState();
  // const socket = io("https://9457-103-89-61-50.ngrok-free.app")

  // useEffect(() => {
  //   console.log("This is test================")
  //   socket.on("connect", () => {
  //     console.log("connected!!!", socket.id)
  //     setEmitted(socket.id)
  //   });
  // }, [])
  
  // console.log("socket=========", socket)
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center'}}>
      <Text>Socket.io</Text>
      <Text>Testing</Text>
      {/* <Text>{emitted}</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({})
