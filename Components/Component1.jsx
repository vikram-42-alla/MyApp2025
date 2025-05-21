import {useState} from 'react'
import { Text ,Button,View,TextInput,StyleSheet,FlatList} from 'react-native'
const Component1 = () => {
    const[task,setTask]=useState('');
    const[taskArray,setTaskArray]=useState([]);
    function addTask(){
       setTaskArray([...taskArray,{ key: Date.now().toString(), text: task }]);
       setTask('');
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
         
            <Text style={styles.task}>{item.text}</Text>
        )}
      />
    </View>
    </>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    padding: 20,
  },
  forms: {
    width: '100%',
    padding: 10,
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
