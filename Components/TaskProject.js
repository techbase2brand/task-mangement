import React, { useState , useEffect} from "react";
import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function TaskProject() {
  const [projects, setProjects] = useState();
  const [tasks, setTasks] = useState([]);
  //   const [employees, setEmployees] = useState([]);
  const [newProject, setNewProject] = useState("");
  const [newTask, setNewTask] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState("");

  const getAllProjects = async () => {
    try {
      let resp = await axios.get(
        "http://localhost:4000/api/getProjects/getProjects"
      );
      console.log(resp.data, "kk----");
      setProjects(resp.data);
      // console.log(projects, "kk-oooo---");
    } catch (error) {
      console.log(error, "pp---");
    }
  };

  console.log(projects, "^^^^^");


  useEffect(() => {
    // code to perform side effects
    getAllProjects();

  }, []);




  const handleAddProject = async () => {
    if (newProject === "") return;
    // setProjects([...projects, newProject]);

    console.log(newProject, "-----===");
    try {
      let res = await axios.post(
        "http://localhost:4000/api/Projects/projects",
        {
          projectName: newProject,
        }
      );

      console.log(res, "888888");

      if (res && res.status === 200) {
        console.log("added successfully");
      } else {
        console.log("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }

    setNewProject("");
    // getAllProjects();

    // try {
    //   let resp = await axios.get(
    //     "http://localhost:4000/api/getProjects/getProjects"
    //   );
    //   console.log(resp, "kk----");
    // } catch (error) {
    //   console.log(error, "pp---");
    // }
  };

  const handleAddTask = () => {
    if (newTask === "") return;

    setTasks([...tasks, { task: newTask, employee: selectedEmployee }]);
    setNewTask("");
    setSelectedEmployee("");
  };

  const handleAddEmployee = () => {
    // Implement this function to add new employees to the employees state
  };

  return (
    <View style={styles.container}>

      <Text style={styles.heading}>Base2Brand</Text>
      <View style={styles.form}>
        <Text style={styles.label}>Add a project:</Text>
        <TextInput
          style={styles.input}
          value={newProject}
          onChangeText={setNewProject}
        />
        <View  style={styles.addButton}>
        <TouchableOpacity style={styles.button} onPress={handleAddProject}>
          <Text style={styles.buttonText}>Add Project</Text>
        </TouchableOpacity>
        </View>
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
       <ScrollView    >
       <View  >

        {projects != null
          ? projects.projectsAll.map((project, index) => (

              <View key={index} style={styles.listItem}>
                {project.projectName}
  <View   style={{position:'absolute', right:0, paddingRight: 10, flex: 1, flexDirection : 'row', justifyContent:'space-around'}}>
                <Icon name="edit" size={15} color="#000" />
      <Icon name="delete" size={15} color="#000" />
      </View>
                   </View>


            ))
          : null}
          </View>
          </ScrollView>
        {/* {projects.map((project, index) => (
          <Text key={index} style={styles.listItem}>
            {project}
          </Text>
        ))} */}
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
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    padding: 20,
    paddingBottom: 10
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  form: {
    marginBottom: 20,
  },

  label:{
    fontSize: 18,
    marginBottom: 10


  },
  delButton:{
    position: 'absolute',
    right: 0

  },
  addButton:{
    flex: 1,
    alignItems: "center",
  justifyContent: "center",

  },

  listview:{
    borderRadius: 5,
    flex: 1,
    // alignItems: "center",
    // justifyContent:"space-between",
    marginLeft: 2,
    marginRight: 2,
    flexDirection: 'row',
    //  justifyContent: 'flex-start'
    justifyContent:''


  },


  input: {
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
    marginEnd: 30,
    // width:7,
    // marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "#ffffff",

    fontSize: 16,
    fontWeight: "bold",
  },

  listHeading: {
    fontSize: 24,
  },

  listItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginTop: 15,
    backgroundColor: "#ccc",
    borderRadius: 5,
    flexDirection:'row',

    // paddingBottom:2

  },
});
