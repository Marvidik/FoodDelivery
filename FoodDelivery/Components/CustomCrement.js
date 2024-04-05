import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import CustomButton from './CustomButtom'

export default function CustomCrement({quantity}) {
  return (
    <View style={styles.container}>
      <CustomButton title="-"
        style={styles.button}/>
        <Text style={styles.text}>{quantity}</Text>
        <CustomButton title="+"
        style={styles.button}/>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        width:140,
        height:50,
        flexDirection:"row",
        backgroundColor:"white",
        justifyContent:"space-between",
        borderRadius:20
    },
    button:{
        borderRadius:40,
    
    },
    text:{
        alignSelf:"center",
        
        fontSize:22
    }
})