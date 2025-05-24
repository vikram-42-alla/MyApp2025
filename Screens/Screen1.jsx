import React from "react";
import {View,Button, Alert,TouchableOpacity,StatusBar} from 'react-native';

export default function Screen1({navigation}){
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            
            <Button title='Profile Card App'  onPress={()=>navigation.navigate("Profile Card")}/>
            <Button  title="Todo App" onPress={()=>navigation.navigate("Todo App")}/>
            <Button title="Json" onPress={()=>navigation.navigate("Json")}/>
      
        </View>
    )
}