import { View, Text ,StyleSheet,Image} from 'react-native'
import React from 'react'
import CustomButton from '../Components/CustomButtom'

export default function CongratulationsScreen() {
  return (
    <View style={styles.container}>
        <Image source={require('../assets/deliver.jpeg')} style={styles.image}/>
        <Text style={styles.text1}>Congratulations</Text>
        <Text style={styles.text2}>You Completed Your Order </Text>
        <Text style={styles.text3}>Enjoy Our service</Text>
      <CustomButton style={styles.button} title={"Order More"}/>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:44,
        alignItems:"center",
        justifyContent:"center",
    },
    button:{
        height:50,
        marginTop:100
    },
    image:{
        height:200,
        width:200
    },
    text1:{
        fontSize:28,
        fontWeight:"700"
    },
    text2:{
       color:"grey", 
       fontSize:18
    },
    text3:{
        color:"grey",
        fontSize:18
     }
})