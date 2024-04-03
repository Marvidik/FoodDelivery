import { View, Text,StyleSheet, ScrollView} from 'react-native'
import React from 'react'
import CustomIcon from '../Components/CustomIcon'
import CustomTextInput from '../Components/CustomTextInput'
import CustomButton from '../Components/CustomButtom'
import CustomTrending from '../Components/CustomTrending'
import CustomMenu from '../Components/CustomMenu'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
      <View style={styles.box1i}>
            <CustomIcon style={styles.icon1} source={require('../assets/menu.png')}/>
            <View style={styles.textholder}>
                <Text style={styles.text1}>DELIVER TO</Text>
                <Text style={styles.text2}>VIZID DECORS LIMITED</Text>
            </View>  
        </View>
        <CustomIcon style={styles.icon1} source={require('../assets/bell.png')}/>
        
      </View>
      
      <View style={styles.box2}>
        <View style={styles.box2i}>
            <Text style={styles.text3}>Hey Victor,</Text>
            <Text style={styles.text4}>  Good Afternoon</Text>
        </View>
        <CustomTextInput
            placeholder="Search dishes"
            style={styles.textinput}
        />
      </View>
      <View style={styles.box3}>
        <Text style={styles.text5}>Trending Foods</Text>
        <View style={styles.trend1}>
        <ScrollView  horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.trend}>
            <CustomTrending price={"$300"} food={"Meat"} source={require('../assets/burgs (1).jpg')}/>
            <CustomTrending price={"$300"} food={"Chips"} source={require('../assets/burgs (2).jpg')}/>
            <CustomTrending price={"$300"} food={"Burger"} source={require('../assets/burgs (3).jpg')}/>
            <CustomTrending price={"$300"} food={"Pizza"} source={require('../assets/burgs (5).jpg')}/>
            <CustomTrending price={"$300"} food={"Doughnut"} source={require('../assets/burgs (4).jpg')}/>     
        </ScrollView>
        </View>
      </View>
      <View style={styles.box4}>
        <Text style={styles.text5}>Menu</Text>
        <View style={styles.menu1}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollViewContent}
                >
                <CustomMenu contents={"Stew-  Meat-  Egg"} fastfood={"Chicken Republic"} source={require('../assets/menu (3).jpg')}/>
                <CustomMenu contents={"Stew-  Meat-  Egg"} fastfood={"Chicken Republic"} source={require('../assets/menu (1).jpg')}/>
                <CustomMenu contents={"Stew-  Meat-  Egg"} fastfood={"Chicken Republic"} source={require('../assets/menu (2).jpg')}/>
                <CustomMenu contents={"Stew-  Meat-  Egg"} fastfood={"Chicken Republic"} source={require('../assets/menu (4).jpg')}/>
                <CustomMenu contents={"Stew-  Meat-  Egg"} fastfood={"Chicken Republic"} source={require('../assets/menu (5).jpg')}/>
            </ScrollView>
        </View>
    </View>
    </View>
  )
}



const styles = StyleSheet.create({
    container:{
        paddingTop:44
    },
    box1:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:20,
        alignItems:"center"
    },
    icon1:{
        backgroundColor:'#EAEDF1'
    },
    box1i:{
        flexDirection:"row",
        alignItems:"center",
    },
    textholder:{
        paddingLeft:15
    },
    text1:{
        color:"#FE8800",
        fontWeight:"700",
    },
    text2:{
        color:"grey"
    },
    text3:{
        
    },
    text4:{
        fontWeight:"700"
    },
    text5:{
        fontSize:20,
        // color:"#FE8800"
    },
    box2:{

    },
    box2i:{
        flexDirection:"row",
        paddingLeft:20,
        paddingTop:15
    },
    textinput:{
        marginTop:10,
        marginHorizontal:20,
        paddingHorizontal:50,
        borderRadius:10,
        height:60,
        marginBottom:30
    },
    box3:{
        paddingLeft:20
    },
    trend1:{
        height: 200, 
    },
    trend:{
        alignItems: 'center',
        paddingStart: 10,
        paddingEnd: 10,
        
    },
    box4: {
        height:"50%",
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingTop: 20,
      },
      menu1: {
        
      },
      scrollViewContent: {
        flexGrow: 1, // Allow the content to grow vertically
      },
})