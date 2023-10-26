import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';

import {
  StyleSheet,
} from 'react-native';

const CourseDetails = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { index, title, faculty, code, rating } = route.params;
  const addReview = ()=>{
    navigation.navigate('add-review', route.params)
  }
  return (
    <View style ={styles.container}>
    <Text style={styles.infoHeader}>{title}</Text>
    <Text style={styles.info}>{code}</Text>
    <Text style={styles.faculty}>{faculty}</Text>
    <Stars rating={rating}/>
    <TouchableHighlight style={styles.button} onPress={addReview}>
<Text style={styles.buttonText}>Add Review</Text>
    </TouchableHighlight>
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   infoHeader: {
//     padding: 20
//   },
//   info: {
//     marginTop: 20,
//   },
//   name: {
//     fontSize: 24,
//   },
//   faculty: {
//     color: 'grey',
//     marginBottom: 5,
//   },
//   image: {
//     width: 100,
//     height: 100,
//     margin: 20,
//   },
//   button: {
//     borderWidth: 1,
//     borderColor: '#0066cc',
//     borderRadius: 14,
//     paddingHorizontal: 10,
//     paddingVertical: 3,
//     backgroundColor: '#fff',
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#0066CC',
//     fontSize: 12,
//     textAlign: 'center',
//   },
// });

// export default CourseDetails;
