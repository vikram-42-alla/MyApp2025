import React from 'react'
import { useState,useEffect } from 'react';
import {Text,Button,TextInput,View} from 'react-native';
const Login = ({navigation}) => {
    const[userName,setUserName]=useState("");
    const[password,setPassword]=useState("");
const formData={
    rollNo:userName,
    password:password
}
    async function login() {
    try {
      const res = await fetch("http://192.168.55.104:3000/user/signin",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({
            rollNo:userName,
            password:password
        })
      }) // Replace with your IP
      const response = await res.json();
      if(res.ok){
        navigation.navigate("Json")
      }else{
        alert("BAd")
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }
  return (
    <View>
        <TextInput onChangeText={setUserName}
        placeholder='Enter username'
        value={userName}
        />
        <TextInput onChangeText={setPassword}
        placeholder='Enter password'
        value={password}
        secureTextEntry={true}/>
        <Button title='Login' onPress={login}/>
    </View>
  )
}

export default Login
