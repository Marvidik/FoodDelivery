import { View, Text,StyleSheet, ScrollView} from 'react-native'
import React from 'react'
import CustomIcon from '../Components/CustomIcon'
import CustomTextInput from '../Components/CustomTextInput'
import CustomButton from '../Components/CustomButtom'
import CustomTrending from '../Components/CustomTrending'
import CustomMenu from '../Components/CustomMenu'

export default function SearchSreen() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
      <View style={styles.box1i}>
            <CustomIcon style={styles.icon1} source={require('../assets/back.png')}/>
            <View style={styles.textholder}>
                <Text style={styles.text2}>SEARCH</Text>
            </View>  
        </View>
        <CustomIcon style={styles.icon1} source={require('../assets/bell.png')}/>
        
      </View>
      
      <View style={styles.box2}>
        <CustomTextInput
            placeholder="Search dishes"
            style={styles.textinput}
        />
      </View>
      <Text style={styles.textmenu}>Search Result</Text>
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
      scrollViewContent: {
        flexGrow: 1, // Allow the content to grow vertically
      },
      menu1: {
        height:"80%",
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingTop: 20,
      },
      textmenu:{
        paddingLeft:20,
        fontSize:20,
        fontWeight:"600",
      }
})