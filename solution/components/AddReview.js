
import {
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import RatingStars from './RatingStars';


const AddReview = () => {
  const [submitting, setSubmitting] = useState(false);
  const submitReview = () =>{
    setSubmitting(true);
    //do other thind: updat db, asyncstorage
    setTimeout(() =>{
      setSubmitting(false)
    }, 1000);

  }

  return (
<View style={styles.root}>
  <Text style ={styles.addReview}>Add Review</Text>
  <TextInput style= {styles.input}/>
  <Text style= {styles.rating}> Your Rating </Text>
  <TextInput style ={styles.input} multiline numberOfLines={4}/>
  {submitting && <ActivityIndicator size ="large"/>}
  <TouchableHighlight style={styles.submitButton} onPress= {submitReview}>
  <Text style ={styles.submitButtonText}>Submit</Text>
  </TouchableHighlight>
</View>

  );
};

// const styles = StyleSheet.create({
//   root: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingTop: 20,
//   },
//   button: {
//     paddingHorizontal: 10,
//   },
//   addReview: {
//     fontSize: 25,
//     color: '#444',
//     textAlign: 'center',
//     margin: 20,
//   },
//   input: {
//     padding: 10,
//     marginVertical: 10,
//     marginHorizontal: 20,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 3,
//   },
//   rating: {
//     fontSize: 20,
//     color: 'grey',
//     textAlign: 'center',
//     marginVertical: 40,
//   },
//   stars: {
//     marginBottom: 80,
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
//   starButton: {
//     padding: 5,
//   },
//   submitButton: {
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     backgroundColor: '#0066cc',
//     borderRadius: 4,
//     marginVertical: 10,
//     marginHorizontal: 20,
//   },
//   submitButtonText: {
//     fontSize: 18,
//     color: '#ffffff',
//     textAlign: 'center',
//   },
// });

export default AddReview;
