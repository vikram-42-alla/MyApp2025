import {useState} from 'react'
import { Text ,Button,View,TextInput,StyleSheet,FlatList,TouchableOpacity} from 'react-native'
const Component1 = () => {
    const[task,setTask]=useState('');
    const[taskArray,setTaskArray]=useState([]);
    function addTask(){
       setTaskArray([...taskArray,{ key: Date.now().toString(), text: task }]);
       setTask('');
    }
    function deleteTask(key){
        setTaskArray(taskArray.filter(item=>item.key!==key))
    }
  return (
    <>
    <View style={styles.container}> 
  
    <TextInput 
    value={task}
    placeholder='Enter a Task'
    style={styles.forms}
    onChangeText={setTask}
    />
    <Button title='Add Task' onPress={addTask}></Button>
    <FlatList
        data={taskArray}
        renderItem={({ item }) => (
         <TouchableOpacity onPress={()=>deleteTask(item.key)}>
            <Text style={styles.task}>{item.text}</Text>
        
            </TouchableOpacity>
        )}
      />
      
    </View>
    </>
  )
}
const styles = StyleSheet.create({
  container: {
    display:'flex',
    height:300,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    padding: 20,
  },
  forms: {
    width: '100%',
    padding: 10,
    marginTop:29,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  task: {
    width: '100%',
    padding: 12,
    marginVertical: 6,
    backgroundColor: '#fff',
    borderRadius: 6,
    textAlign: 'center',
    fontWeight: '500',
  },
});

export default Component1
