import React from 'react'
import { Text,View,Image,Button,TouchableOpacity,StyleSheet } from 'react-native'
const Component3 = () => {
  return (
<View style={styles.container}>
    <View style={styles.box}>
    <Image source={{uri:"https://vikram-alla-portfolio.netlify.app/Me.jpg"}} style={{height:300,width:200,borderRadius:10}}/>
    <Text style={styles.text}>Vikram alla</Text>
    <Text style={{textAlign:'center',fontSize:15}}>Project manager</Text>
    <Text style={{marginTop:10}}>ID           2938902920292029</Text>
    <Text style={{marginTop:6}}>Email       allavikram@gmail.com</Text>
    <Text style={{marginTop:6}}>PhoneNo     7397393839</Text>
    </View>
</View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor: '#e0e0e0', 
    padding: 20, 
  },
  box: {
    borderRadius: 10, 
    backgroundColor: '#ffffff',
    padding: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5, 
  },
  text: {
    fontSize: 22, 
    fontWeight: '600', 
    textAlign: 'center',
    color: '#333', 
  },
});

export default Component3
