import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function TaskProject() {
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
//   const [employees, setEmployees] = useState([]);
  const [newProject, setNewProject] = useState('');
  const [newTask, setNewTask] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState('');

  const handleAddProject = () => {
    if (newProject === '') return;
    setProjects([...projects, newProject]);
    setNewProject('');
  };

  const handleAddTask = () => {
    if (newTask === '') return;
    setTasks([...tasks, { task: newTask, employee: selectedEmployee }]);
    setNewTask('');
    setSelectedEmployee('');
  };

  const handleAddEmployee = () => {
    // Implement this function to add new employees to the employees state
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Employee Tasks</Text>
      <View style={styles.form}>
        <Text style={styles.label}>Add a project:</Text>
        <TextInput
          style={styles.input}
          value={newProject}
          onChangeText={setNewProject}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddProject}>
          <Text style={styles.buttonText}>Add Project</Text>
        </TouchableOpacity>
        {/* <Text style={styles.label}>Add a task:</Text>
        <TextInput
          style={styles.input}
          value={newTask}
          onChangeText={setNewTask}
        />
        <Text style={styles.label}>Assign task to employee:</Text>
        <TextInput
          style={styles.input}
          value={selectedEmployee}
          onChangeText={setSelectedEmployee}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddTask}>
          <Text style={styles.buttonText}>Add Task</Text>
        </TouchableOpacity> */}
        {/* <Text style={styles.label}>Add an employee:</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleAddEmployee}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddEmployee}>
          <Text style={styles.buttonText}>Add Employee</Text>
        </TouchableOpacity> */}
      </View>
      <View style={styles.list}>
        <Text style={styles.listHeading}>Projects:</Text>
        {projects.map((project, index) => (
          <Text key={index} style={styles.listItem}>{project}</Text>
        ))}
        {/* <Text style={styles.listHeading}>Tasks:</Text>
        {tasks.map((task, index) => (
          <Text key={index} style={styles.listItem}>
            {task.task} - {task.employee}
          </Text>
        )
        )} */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  form: {
    marginBottom: 20,
  }, input: {
    width: "80%",
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: "#aaaaaa",
    marginBottom: 20,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#1a73e8",
    borderRadius: 5,
    // marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },

   listHeading:{
    fontSize: 24,

   },



  listItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginTop: 15,
    backgroundColor: "#aaaaaa",

  }



})
