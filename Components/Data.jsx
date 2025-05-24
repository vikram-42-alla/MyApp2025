import React from 'react'
import { useState,useEffect } from 'react'
import { FlatList,Text,View,StyleSheet,Image } from 'react-native';
const Data = () => {
    const[data,setData]=useState([]);
    useEffect(()=>{
    fetch("https://backend-server-2-hvtj.onrender.com/product/get")
    .then(res=>res.json())
    .then(result=>{
        setData(result)
        console.log(result)
    })
    .catch(error=>console.log(error))
    },[])
  return (
    <FlatList data={data}
    keyExtractor={(item)=>item.id.toString()}
    horizontal
    renderItem={({item})=>(
<View style={styles.container}>
        
        <Image source={{uri:item.image}}
        style={{width:'100%',height:200}}
        resizeMode='cover'
        />
        <Text>{item.title}</Text>
        </View>
  )}/>
  )
}
const styles=StyleSheet.create({
    container:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderColor:'green',
        borderWidth:2,
        margin:4,
        padding:10,
        borderRadius:5
    }
})
export default Data
