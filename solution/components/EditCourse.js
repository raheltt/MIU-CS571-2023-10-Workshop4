import { useNavigation, useRoute } from '@react-navigation/native';
import { text } from 'express';
import {editCourse, getCourse, deleteCourse} from './networking'
import react from 'react';
import {View, Text, TouchableHighlight} from 'react-native'

export default function EditCourse(){
    const navigation = useNavigation();
const route = useRoute();
    const {state, setState} = useContext(GlobalContext);
    const [course, setCourse] = useState(route.params)
    const edit = async () =>{
        try {
            const ret = await EditCourse(course)
            alert("A new course is added")
            setState({...state, courses: data });
            navigation.goBack();
        } 
        catch (error) {
            alert("A new course cant be added")

            
     }

    }
    return(
    

    
    <View style={StyleSheet.container}> 
    <Text> Edit Course</Text> 
<TextInput style={StyleSheet.input} value={course.title} placeholder="Title" onChangeText ={text => setCourse({...course, title: text})}/>
<TextInput style={StyleSheet.input} value={course.code} placeholder="Code" onChangeText={text => setCourse({...course, code: text})}/>
<TextInput style={StyleSheet.input} value={course.faculty} placeholder="Faculty" onChangeText= {text => setCourse({...course, faculty: text})}/>

<TouchableHighlight style={StyleSheet.container} onPress={edit}>
    <text>Edit</text>
</TouchableHighlight>
    </View>
    )
}