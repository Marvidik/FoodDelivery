import { View, Text, Image,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'

export default function CustomTrending({food,price,source,style,onPress}) {
  return (
    <TouchableOpacity
      style={[styles.container, style]} // Merge the styles provided via props with the default styles
      onPress={onPress}
    >
      <Image source={source} style={styles.image}/>
      <Text style={styles.text1}>{food}</Text>
      <View style={styles.box1}>
        <Text style={styles.text2}>Price</Text>
        <Text style={styles.text2}>{price}</Text>
      </View>
      </TouchableOpacity>
  )
}



const styles = StyleSheet.create({
    container:{
        marginTop:15,
        height:160,
        width:140,
        elevation:5,
        backgroundColor:"white",
        borderRadius:15,
        marginRight:10
    },
    image:{
        height:80,
        width:100,
        marginTop:15,
        alignSelf:"center",
        borderRadius:20
    },
    text1:{
        fontSize:20,
        fontWeight:"700",
        paddingLeft:20,
        paddingTop:10
    },
    text2:{
        paddingLeft:20,
        paddingTop:10
    },
    box1:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingRight:20
    }
})