import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.jpg')} style={styles.image}/>
      <Text style={styles.text}>Savvys Foods</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FE8800',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image:{
        width:150,
        height:200,
        borderRadius:100
    },
    text:{
        fontSize:28,
        color:"white"
    }
})