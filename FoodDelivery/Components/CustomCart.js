import { View, Text,StyleSheet,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import CustomCrement from './CustomCrement'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function CustomCart({onCancel,source,food,fastfood,price}) {
  return (
    <View style={styles.container}>
      <Image source={source} style={styles.image}/>
      <View style={styles.box1}>
        <View style={styles.quantity}>
            <Text style={styles.text}>{food}</Text>
            <View style={styles.item}>
                <TouchableOpacity onPress={onCancel}>
                <Icon name="close" size={25} color="red" /> 
                </TouchableOpacity>
            
       
      </View>
        </View>
        <Text style={styles.text}>{fastfood}</Text>
        <Text style={styles.text1}>{price}</Text>
        <View style={styles.quantity}>
            <Text style={styles.text2}></Text>
            <CustomCrement  quantity={"50"}/>
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:"black",
        paddingHorizontal:20,
        flexDirection:"row",
        paddingBottom:13
    },
    image:{
        height:120,
        width:120,
        borderRadius:12
    },
    text:{
        color:"white",
        fontSize:20,
        paddingRight:100
        
    },
    text1:{
        color:"white",
        fontSize:23,
        paddingTop:10
    },
    text2:{
        color:"grey",
        paddingRight:65
    },
    box1:{
        paddingLeft:10
    },
    quantity:{
        flexDirection:"row",
        alignItems:"center",
        
    }
})