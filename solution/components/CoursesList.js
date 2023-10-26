import React from 'react';
import { StyleSheet, Platform, SafeAreaView, View, Text, TextInput} from 'react-native';

import Course from './Course';
import Header from './Header.ios';
import { text } from 'express';
import networking from './networking';
import { useNavigation, useRoute } from '@react-navigation/native';

const data = [
    { title: 'Web Application Programming', faculty: 'Asaad Saad', code: 'CS472', rating: 4, reviews: [{reviewr: "Asaad", rating: 4, Comment: "Good course"}]},
    { title: 'Modern Web Application', faculty: 'Asaad Saad', code: 'CS572', rating: 5 },
    { title: 'Enterprise Architecture', faculty: 'Joe Bruen', code: 'CS557', rating: 4 },
    { title: 'Algorithms', faculty: 'Clyde Ruby', code: 'CS421', rating: 5 },
    { title: 'Object Oriented JavaScript', faculty: 'Keith Levi', code: 'CS372', rating: 3 },
    { title: 'Big Data', faculty: 'Prem Nair', code: 'CS371', rating: 5 },
    { title: 'Web Application Architecture', faculty: 'Rakesh Shrestha', code: 'CS377', rating: 5 },
    { title: 'Big Data Analytics', faculty: 'Mrudula Mukadam', code: 'CS378', rating: 5 },
];
const navigation = useNavigation();
const route = useRoute();

export default function CoursesList() {
    const [searchText, setSearchText] = useState("");
    const [courses, setCourses] = useState(data);
    const [state, setState] = useContext(GlobalContext);

    const changeSearch = text =>{
        setSearchText(text);
        if(text !== ""){
            let result = [...data];
            result = result.filter(x => x.title.toLowerCase().includes(text.toLowerCase()));
            setCourses(result)
        } else{
            setCourses(data);
        }
    };
    useEffect(() =>{
        
setCourses(state.courses);
    }, [state.courses])

    useEffect(() =>{
        async function getData(){
            try {
                const data = await getCourses();
                setState({...state, courses: data})            
                
            } catch (error) {
                
            }

        }
        getData();
    }, [])

    const addCourse = () =>{
navigation.navigate('add-newCourse')
    }
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: '#FFFFFF',
                paddingTop: Platform.OS === 'android' ? 30 : 0,
                paddingBottom: 200
            }}>
            <View>
                <Header />
            </View >
            <View>
            <View><TouchableHighlight
            onPress={addCourse}
            style={styles.button}
            underlayColor="#5398DC">
            <Text style={styles.buttonText}>Add New Course</Text>
          </TouchableHighlight></View>

            <TextInput placeholder='Enter text to search courses' value={searchText} onChangeText={changeSearch}/>
<FlatList
data={courses}
renderItem = {({item, index}) => <Course data = {{...item, index}}/>}
keyEtractor = {item => item.title}/>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    input: {
        padding: 10,
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        borderBottomWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#F5F5F5',
    },
});
