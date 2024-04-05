import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import CustomIcon from '../Components/CustomIcon'
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the FontAwesome icons
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'; // Import the Material Icons
import CustomRealIcon from '../Components/CustomRealIcon';
import CustomButton from '../Components/CustomButtom';
import CustomCrement from '../Components/CustomCrement';



export default function AddCartScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
      <CustomRealIcon/>
      <Image source={require('../assets/menu (3).jpg')} style={styles.image}/> 
      </View>
      <Text style={styles.text1}>Chicken Source</Text>
      <Text style={styles.text2}>Chicken Republic</Text>
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
      <Text style={styles.large}>"Indulge in the succulent flavors of our signature grilled chicken, expertly seasoned with a blend of herbs and spices to tantalize your taste buds. Savor each tender bite as the aroma of perfectly cooked chicken fills the air, promising a delightful dining experience that's sure to leave you craving more."</Text>
      <View style={styles.add}>
        <View style={styles.add2}>
            <Text style={styles.price}>$32</Text>
            <CustomCrement quantity={"50"}/>
        </View>
        <CustomButton title="ADD TO CART"
        style={styles.button}/>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        paddingTop:44,

    },
    box1:{
        backgroundColor:"#FE8800",
        height:300,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
    },
    image:{
        height:200,
        width:200,
        alignSelf:"center",
        borderRadius:50
    },
    text1:{
        fontSize:22,
        fontWeight:"700",
        paddingTop:20,
        paddingLeft:20
    },
    text2:{
        fontSize:18,
        fontWeight:"300",
        paddingTop:5,
        paddingLeft:20,
        color:"grey"
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
      large:{
        paddingLeft:20,
        paddingRight:20,
        color:"grey"
      } ,
      add:{
        top:160,
        backgroundColor:"#EAEDF1",
        height:200,
        justifyContent:"space-between",
        paddingTop:40
      },
      button:{
        height:60,
        marginHorizontal:20,
        marginTop:15,
        marginBottom:30
    },
    price:{
        paddingLeft:20,
        fontSize:32
    },
    add2:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingRight:20
    }
})