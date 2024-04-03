import { View, Text,StyleSheet,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the FontAwesome icons
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'; // Import the Material Icons


export default function CustomMenu({contents,fastfood,style,onPress,source,food,price}) {
  return (
    <TouchableOpacity
      style={[styles.container, style]} // Merge the styles provided via props with the default styles
      onPress={onPress}
    >
      <Image source={source} style={styles.image}/>
      <Text style={styles.text1}>{fastfood}</Text>
      <Text style={styles.text2}>{contents}</Text>
      <View style={styles.container2}>
      <View style={styles.item}>
        <Icon name="star" size={20} color="#FE8800" /> 
        <Text style={styles.text}>4.7</Text>
      </View>
      <View style={styles.item}>
        <Icon name="truck" size={20} color="#FE8800" /> 
        <Text style={styles.text}>$20</Text>
      </View>
      <View style={styles.item}>
        <MaterialIcon name="timer" size={20} color="#FE8800" /> 
        <Text style={styles.text}>20 min</Text>
      </View>
      
    </View>
      </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    container:{
        marginTop:15,
        height:310,
        width:"100%",
        elevation:5,
        backgroundColor:"white",
        borderRadius:15,
        marginRight:10
    },
    image: {
        width: '100%', // Make sure the image takes up the full width of its container
        resizeMode: 'cover', // Scale the image uniformly while maintaining the aspect ratio
        height:220,
      },
      text1:{
        fontSize:20,
        fontWeight:"600",
        paddingLeft:10,
        paddingTop:5
      },
      text2:{
        color:"grey",
        paddingLeft:10,
        paddingTop:5
      },
      container2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
      },
      item: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      text: {
        marginLeft: 5,
        color: 'black',
      },    
})