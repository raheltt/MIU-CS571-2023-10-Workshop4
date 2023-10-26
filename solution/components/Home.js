//stack navigator

import { createStackNavigator } from "@react-navigation/stack";
import CoursesList from './CoursesList';
import CourseDetails from './CourseDetails';
import AddReview from './AddReview';
import AddNewCourse from "./AddNewCourse";
import EditCourse from "./EditCourse";
import DeleteCourse from "./DeleteCourse";
import { NavigationContainer } from "@react-navigation/native";
const {Stack} = createStackNavigator();

export default function Home(){
    return(
<NavigationContainer>
<Navigator>
        <Screen name="course-list" component={CoursesList} options={{headerShown: false}}/>
        <Screen name="course-details" component={CourseDetails} options={{title: "Course Details"}}/>
        <Screen name="add-review" component={AddReview} options={{title: "Add Review"}}/>
        <Screen name="add-newCourse" component={AddNewCourse} />
        <Screen name="edit-ccourse" component={EditCourse}/>
        <Screen name="delete-course" component={DeleteCourse}/>
</Navigator>
        </NavigationContainer>
    )
}