import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import CustomTextInput from '../Components/CustomTextInput'
import CustomButton from '../Components/CustomButtom'

export default function RegisterScreen() {
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.text1}>Register</Text>
            <Text style={styles.text2}>Create an account t staer ordering</Text>
        </View>
       
        <View style={styles.box1}>
            <Text style={styles.header}>Email</Text>
            <CustomTextInput
            placeholder="Enter your Email"
            style={styles.textinput}
            
        />
        <Text style={styles.header}>Usernmae</Text>
            <CustomTextInput
            placeholder="Enter your Username"
            style={styles.textinput}
        />
        <Text style={styles.header}>Password</Text>
            <CustomTextInput
            placeholder="Enter your Password"
            style={styles.textinput}
        />

        <CustomButton
        title="Register"
        style={styles.button} // Pass additional styles here
      />
      <View style={styles.register}>
        <Text style={styles.dont}>Have an account?</Text>
        <Text style={styles.dont2}>Sign In</Text>
      </View>
      
        </View>
      
    </View>
  )
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:44,
        backgroundColor:"black"
    },
    box1:{
        height:"80%",
        backgroundColor:"white",
        top:"20%",
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        paddingTop:40,
    }, 
    textinput:{
        marginTop:10,
        marginHorizontal:20,
        paddingHorizontal:50,
        borderRadius:10,
        height:60,
        marginBottom:30
    },
    text1:{
        color:"#FE8800",
        alignSelf:"center",
        fontSize:50,
        fontWeight:"700"
        
    },
    text2:{
        color:"grey",
        alignSelf:"center",
        fontSize:18,
        fontWeight:"700",
        paddingTop:20
    },
    header:{
        paddingLeft:20,
        fontSize:18,
        fontWeight:"500"
    },
    forget:{
        color:"#FE8800",
        paddingLeft:"70%",
        fontSize:18
    },
    button:{
        height:60,
        marginHorizontal:20,
        marginTop:15,
        marginBottom:30
    },
    register:{
        flexDirection:"row",
        alignSelf:"center",
        margin:5
    },
    dont:{
        color:"grey",
        alignSelf:"center",
        fontSize:18,
        fontWeight:"700",
        
    },
    dont2:{
        color:"#FE8800",
        alignSelf:"center",
        fontSize:18,
        fontWeight:"700",
        marginLeft:10
    }

})