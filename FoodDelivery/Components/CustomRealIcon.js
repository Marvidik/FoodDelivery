import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the FontAwesome icons
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'; // Import the Material Icons



export default function CustomRealIcon() {
  return (
    <View style={styles.container}>
       <Icon name="arrow-left" size={20} color="#FE8800" />
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        width:50,
        height:50,
        borderRadius:25,
        alignItems:"center",
        justifyContent:"center",
        marginTop:30,
        marginLeft:20
    }
})