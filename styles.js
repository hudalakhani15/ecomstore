import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    container: {
      padding: 10,
      height: "100%",
      backgroundColor: "orange",
  
    },
    heading:{
   color:"black" ,
   fontSize:25 ,
    textAlign:"center",
    margin: 20 ,
    
 
    },
    subheading:{
      color:"black" ,
      fontSize:18 ,
      textAlign:"center",
      marginStart: 10 
    },
    account:{
      color:"blue" ,
      textAlign:"center",
      fontSize:18 ,
      textDecorationLine: 'underline'
    },
    button: {
      borderRadius: 5,
      margin: 10,
      padding: 10,
      color: "grey",
      backgroundColor: "grey",
      flexDirection: "row",
      width:"20%" ,
      textAlign:'center',
      borderColor:"black" ,
      borderWidth: 1 ,
    },
    inp: {
     borderColor:"black" ,
     borderWidth: 5 ,
     borderRadius: 12 ,
     padding: 10  , 
     color:"grey" ,
     margin: 10 ,
     backgroundColor:'lightblue',
     fontSize:17
  
    },
    Input: {
        borderColor:"black" ,
        borderWidth: 1 ,
        borderRadius: 5 ,
        padding: 10  , 
        color:"black" ,
        margin: 20 ,
     backgroundColor:'white',
     fontSize:17
       },
    main:{
        backgroundColor:"green"
        },
        head:{
          color:"yellow" ,
          fontSize:25 ,
           textAlign:"center",
           margin: 20,
           backgroundColor:'blue' ,
        borderColor:'black',
        borderWidth: 1 ,
           },
       card:{
          width: "90%",
          marginTop:10,
          marginStart:20,
          backgroundColor:"white",
          alignItems:"center",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.30,
          shadowRadius: 4.65,
          elevation: 8,
          borderColor:'black',
          borderWidth: 2 ,
        },
        text:{
       color:"black",
       margin:5
        }
  })
  export default styles