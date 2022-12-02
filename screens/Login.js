import React from "react"
import styles from "../styles"
import { View, Text, TextInput, Button, Image, TouchableOpacity } from "react-native"
function Login (){
return <>
   <View style={styles.container }>
  
      <View style={{ flexDirection:"row" , justifyContent:"center"}}>
    <Image style={{ width: 300, height: 300 }} source={{ uri: 'https://advardo.com/images/user/login.png' }} />
    </View>
     <Text style={styles.head}>Welcome to your Account</Text>
    <TextInput  placeholderTextColor={'grey'} style={styles.inp} placeholder="User Name" />
    <TextInput  placeholderTextColor={'grey'}  style={styles.inp} placeholder="Password" />
    <View style={{ flexDirection:"row" , justifyContent:"center"}}>
    <TouchableOpacity style={styles.button}>
    <Text style={{color:'black',
fontSize:17}}>Login</Text>
    </TouchableOpacity>
      </View>
      <View style={{flexDirection:"row" , justifyContent:"center" , margin: 20}}>
      <Text style={styles.subheading}>Need an Account?</Text>
      <Text style={styles.account}>SignUp</Text>
      </View>
    </View>
</>
}
export default Login
