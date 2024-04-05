import { View, Text,StyleSheet,ScrollView } from 'react-native'
import React from 'react'
import CustomTextInput from '../Components/CustomTextInput'
import CustomButton from '../Components/CustomButtom'
import CustomCart from '../Components/CustomCart'

export default function CartScreen() {
  return (
    <View style={styles.container}>
    <Text style={styles.cart}>CART</Text>
    <View style={styles.box1}>
        <ScrollView>
          <CustomCart source={require('../assets/menu (3).jpg')} food={"Chicken Sauce"}  fastfood={"Chicken Republic"} price={"$45"}/>
          <CustomCart source={require('../assets/menu (2).jpg')} food={"Chicken Sauce"}  fastfood={"Chicken Republic"} price={"$45"}/>
          <CustomCart source={require('../assets/menu (1).jpg')} food={"Chicken Sauce"}  fastfood={"Chicken Republic"} price={"$45"} />
          <CustomCart source={require('../assets/menu (4).jpg')} food={"Chicken Sauce"}  fastfood={"Chicken Republic"} price={"$45"}/>
          <CustomCart source={require('../assets/menu (5).jpg')} food={"Chicken Sauce"}  fastfood={"Chicken Republic"} price={"$45"}/>
         
        </ScrollView>
      </View>
      <View style={styles.box2}>
      <Text style={styles.text}>Delivery Address</Text>
      <CustomTextInput style={styles.input} placeholder={"112 Dembe Rd Onitsha"}/>
      <View style={styles.price}>
            <Text style={styles.text}>Price: </Text>
            <Text style={styles.text1}>$96</Text>
      </View>
      <CustomButton style={styles.button} title={"Place Order"}/>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        paddingTop:44,
        flex:1,
        backgroundColor:"black",
        justifyContent:"flex-end",
        

    },
    box1:{
        flex: 1,
        backgroundColor:"black",
        height:"65%",
    },
    box2:{
        height:"35%",
        width:"100%",
        borderTopRightRadius:25,
        borderTopLeftRadius:25,
        backgroundColor:"white",
        alignSelf:"flex-end",
        paddingHorizontal:30,
        paddingTop:20,
    },
    text:{
        color:"grey",
        fontSize:22,
        paddingBottom:10,
    },
    input:{
        height:50,
        borderRadius:12
    },
    price:{
        flexDirection:"row",
        paddingTop:20,
    },
    text1:{
        fontSize:30,
        
    },
    button:{
        height:50,
        marginTop:50
    },
    cart:{
        color:"grey",
        fontSize:32,
        alignSelf:"center",
        paddingBottom:20
    }
})