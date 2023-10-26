import { useNavigation } from '@react-navigation/native';
import { text } from 'express';
import react from 'react';
import {View, Text, TouchableHighlight} from 'react-native'

export default function DeleteCourse(){
    const {state, setState} = useContext(GlobalContext);
    const [course, setCourse] = useState({faculty: "", code: "", title: ""})
    const navigation = useNavigation();
    const delete = async () =>{
    //     try {
    //         const ret = await AddNewCourse(course)
    //         alert("A new course is added")
    //         setState({...state, courses: data });
    //         navigation.goBack();
    //     } 
    //     catch (error) {
    //         alert("A new course cant be added")

            
    //     }

    // }
    return(
    
    
    <View style={StyleSheet.container}> 
    <Text> Delete Course</Text> 
<TextInput style={StyleSheet.input} value={course.title} placeholder="Title" onChangeText ={text => setCourse({...course, title: text})}/>
<TextInput style={StyleSheet.input} value={course.code} placeholder="Code" onChangeText={text => setCourse({...course, code: text})}/>
<TextInput style={StyleSheet.input} value={course.faculty} placeholder="Faculty" onChangeText= {text => setCourse({...course, faculty: text})}/>

<TouchableHighlight style={StyleSheet.container} onPress={delete}>
    <text>Delete</text>
</TouchableHighlight>
    </View>
    )
}