import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Stars from './Stars';
import { getCourses } from './networking';


const Course = ({ data }) => {
  const { index, title, faculty, code, rating } = data;
const navigation = useNavigation();
const {state, setState} = useContext(GlobalContext);



  const infoPressed = () => { 
    navigation.navigate('course-details', data)
  };

  const editCourse = () =>{
    navigation.navigate('edit-course', data)

  }

  //Deleteing by going to the backend
//   const deleteCourse = async() =>{
//     const ret = confirm("Do you want to delete this course?")
//     if(ret){
//       const response = await deleteCourse(data);
// if(ret){
//   alert("Deleting Successfully");
//   const data = await getCourses();
//   setState({...state, courses: data})
// }
// else{
//   alert("can not delete course")
// }
//       }
//     }


    //deleting from the front end only without going to the backend. you dont have to go to the backend to delete:
    const deleteCourse = async() =>{
      const ret = confirm("Do you want to delete this course?")
      if(ret){
        const response = await deleteCourse(data);
  if(ret){
    alert("Deleting Successfully");
let courses = [...state.courses];
courses = courses.filter(x => x.code!==data.code);
    setState({...state, courses: data})
  }
  else{
    alert("can not delete course")
  }
        }
      }
  }
  //   const ret = Alert.alert('Alert Title', 'My Alert Msg', [
  //     {
  //       text: 'Cancel',
  //   onPress: () => console.log('cancel Pressed')
  // },
  // {
  //   text: 'OK',
  //   onPress: () => console.log('OK Pressed')
  // },
  

  
  //   ])
  // }

  

  return (
    <View
      style={{ backgroundColor: index % 2 === 0 ? 'white' : '#F3F3F7' }}>
      <View style={styles.row}>
        <View style={styles.stars}>
          <Stars rating={rating} />
        </View>

        <View style={styles.course}>
          <Text>{title}</Text>
          <Text style={styles.faculty}>{code} - {faculty}</Text>
        </View>

        <View style={styles.edges}>
          <TouchableHighlight
            onPress={infoPressed}
            style={styles.button}
            underlayColor="#5398DC">
            <Text style={styles.buttonText}>Details</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={editCourse}
            style={styles.button}
            underlayColor="#5398DC">
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={deleteCourse}
            style={styles.button}
            underlayColor="#5398DC">
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  edges: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    minWidth: 50,
  },
  stars: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 5,
    minWidth: 50,
  },
  course: {
    flexDirection: 'column',
    flex: 8,
  },
  faculty: {
    color: 'grey',
  },
  button: {
    borderWidth: 1,
    borderColor: '#0066CC',
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: '#fff',
  },
  buttonText: {
    color: '#0066CC',
    fontSize: 12,
    textAlign: 'center',
  },
  info: {
    marginHorizontal: 40,
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
  },
});

export default Course;
