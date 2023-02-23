import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Task = ({ task, assignedTo, completed, onPress }) => {
  const [isChecked, setIsChecked] = useState(completed);

  const handlePress = () => {
    setIsChecked(!isChecked);
    onPress && onPress();
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <Text style={styles.taskName}>{task}</Text>
        <Text style={styles.assignedTo}>Assigned to: {assignedTo}</Text>
        <View style={styles.checkbox}>
          {isChecked && <Text style={styles.checkmark}>✓</Text>}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    elevation: 2,
  },
  taskName: {
    flex: 1,
    fontSize: 16,
  },
  assignedTo: {
    fontSize: 12,
    color: '#888',
    marginRight: 8,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderRadius: 12,
    borderColor: '#aaa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmark: {
    color: '#00c853',
    fontSize: 16,
  },
});

export default Task;
