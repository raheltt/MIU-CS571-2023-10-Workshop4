import { AntDesign } from '@expo/vector-icons';
import {View} from 'react-native';

function TouchableStar(index, currentIndex, setCurrentIndex){
    const pressed = () =>{
        setCurrentIndex(index);
        if(index <= currentIndex){
            setCurrentIndex(index-1)
        } else{
            setCurrentIndex(index)
        }

    }
    return
    <TouchableHighlight onPress={pressed}>
        <AntDesign name='star' size ={40} color={index <= currentIndex ? "orange": "gray"}/>
    </TouchableHighlight>
}

export default function RatingStars(){
    let stars = [...Array(5)];
    const [currentIndex, setCurrentIndex] = useState(-1);
    return(
        <View style={{ flexDirection: "row", justifyContent:"center" }}>
    {stars.map((_, i) => {
<TouchableStar key={i} index={i} currentIndex = {currentIndex} setCurrentIndex = {setCurrentIndex}/>})}
    </View>
    );
    
  }