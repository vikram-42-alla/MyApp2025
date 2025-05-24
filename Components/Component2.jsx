import React from 'react'
import { Text,View,Image,Button,TouchableOpacity,StyleSheet } from 'react-native'
const Component2= ({navigation}) => {
  return (
  <View style={styles.container}>
    <Image source={{uri:"https://i.pinimg.com/originals/d9/f5/06/d9f50632dcf888586ac14bb6d1d4272c.jpg"}}
    style={{height:200,width:200}}
    />
    
    <Text style={styles.text}>Hi I am pikachu</Text>
    <Text style={styles.text}>He is my master ASH</Text>
    
    <Image source={{uri:"https://i.pinimg.com/736x/f8/29/be/f829bed61f75627eea111dfde089fe2c.jpg"}} style={{height:300,width:200,margin:8}}/>
   

      <Button title='Welcome'  onPress={()=>navigation.navigate("Navigator")}/>
   
  </View>
  )
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  text:
    {
      fontSize:30,
      fontWeight:'bold',
      color:'blue'
    }
  
})
export default Component2
