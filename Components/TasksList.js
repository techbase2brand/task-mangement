import React from 'react';
// import { FlatList } from 'react-native';
import { View } from 'react-native-web';
import Task from './Task';

const TasksList = ({ tasks, setTasks }) => {
//   const renderItem = ({ item }) => (
    // <Task
    //   task={item.task}
    //   assignedTo={item.assignedTo}
    //   completed={item.completed}
    //   onPress={() => onTaskPress && onTaskPress(item.id)}
    // />
//   );

  return (
    <View>

    {
        tasks.map(e => console.log(e.id))
    }



    </View>




    // <FlatList
    //   data={tasks}
    //   renderItem={renderItem}
    //   keyExtractor={(item) => item.id}
    // />
  );
};

export default TasksList;
