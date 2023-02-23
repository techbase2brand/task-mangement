import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import TasksList from './TasksList';

const TasksScreen = () => {
  const [tasks, setTasks] = useState([
    { id: '1', task: 'Task 1', assignedTo: 'Employee A', completed: false },
    { id: '2', task: 'Task 2', assignedTo: 'Employee B', completed: true },
    { id: '3', task: 'Task 3', assignedTo: 'Employee C', completed: false },
  ]);
  const [newTask, setNewTask] = useState('');
  const [newAssignee, setNewAssignee] = useState('');

  const handleAddTask = () => {
    const newId = (tasks.length + 1).toString();

    if(newTask && newAssignee ){
    const newTaskObj = {
      id: newId,
      task: newTask,
      assignedTo: newAssignee,
      completed: false,
    }


    setTasks([...tasks, newTaskObj]);

    setNewTask('');
    setNewAssignee('');

  console.log(tasks,"-----")

  }
  else {
    alert(" add items ")
  }}


  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter task"
          value={newTask}
          onChangeText={(text) => setNewTask(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Assign to"
          value={newAssignee}
          onChangeText={(text) => setNewAssignee(text)}
        />
        <Button title="Add task" onPress={handleAddTask} />
      </View>
      <TasksList tasks={tasks} setTasks={setTasks} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '50%',
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 10,
  },
});

export default TasksScreen;
