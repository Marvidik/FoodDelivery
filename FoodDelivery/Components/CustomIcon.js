import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native'
import React from 'react'

export default function CustomIcon({source,style,onPress}) {
  return (
    <TouchableOpacity
    style={[styles.container, style]} // Merge the styles provided via props with the default styles
      onPress={onPress}
    >
        <Image source={source} style={styles.image}/>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    container:{
        height:55,
        width:55,
        borderRadius:20,
        alignItems:"center",
        justifyContent:"center"
        
    },

    image:{
        height:40,
        width:40,
        
    }
})