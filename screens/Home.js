import React from "react";
import { View, TextInput, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios"
import styles from "../styles";

export default function Home({navigation}) {
  let [data, setdata] = useState([])
  let [searchedProduct, setSearchedProduct] = useState([])
  let receiveData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((success) => {
        setdata([...success.data])
      })
      .catch((error) => {
        console.log(error)
      })
  }

  let login = (e)=>{
    navigation.navigate('Login',e)
   
  }
  let move = (e)=>{
    navigation.navigate('Product',e)
   
  }
  useEffect(() => {
    receiveData()
  }, [])

  let searchCard = (val) => {
    searchedProduct = data.filter((e) => {
      return e.category.toLowerCase().includes(val.toLowerCase())
    })
    setSearchedProduct([...searchedProduct])
  }
  return (
    <>
      <View style={styles.main}>
        <Text style={styles.head}>E-commerce Store</Text>
        <TextInput  placeholderTextColor={'black'} style={styles.Input} placeholder="Search catogary here..." onChangeText={(e) => searchCard(e)} />
        <ScrollView>
        <TouchableOpacity onPress={login}>
<Text style={[styles.head]}>Move to Login</Text>
            </TouchableOpacity>
           
        {/* {searchedProduct &&
                searchedProduct.map((e, i) => (
                  <TouchableOpacity
                  onPress={()=>move(e)}
                    style={[
                      styles.bgWhite,
                      styles.m1,
                      styles.rounded,
                      {width: '28%'},
                    ]}
                    key={i}>
                    <Image
                      resizeMode="cover"
                      style={[{width: '100%', height: 100}, ]}
                      source={{uri: e.image}}
                    />
                    <View >
                      <Text numberOfLines={1}>{e.title}</Text>
                      <Text style={{padding1}}>
                        Rs: {e.price}/-
                      </Text>
                    </View>
                  </TouchableOpacity>
                ))} */}
               
          {searchedProduct && searchedProduct.length > 0 ?
           
            searchedProduct.map((e, i) => {
              return 
 
                <View key={i} style={styles.card}>
                <Text style={styles.heading}>{e.category}</Text>
                <Image source={{ uri: e.image }} style={{ width: 250, height: 200 }} />
                <Text style={styles.text}  >{e.title}</Text>
                <Text style={styles.text} >Price: {e.price}</Text>
              </View>
            
            }) : null}
              
        </ScrollView>
        <ScrollView>
          {data && data.length > 0 ?
            data.map((e, i) => {
              return(
                <TouchableOpacity
                
                onPress={move}
              
                key={i}
              >
                 <View key={i} style={styles.card}>
                <Text style={styles.heading}>{e.category}</Text>
                <Image source={{ uri: e.image }} style={{ width: 250, height: 200 }} />
                <Text style={styles.text}  >{e.title}</Text>
                <Text style={styles.text} >Price: {e.price}</Text>
              </View>
              </TouchableOpacity>
              )
            }) : null}
            
        </ScrollView>
      </View>
    </>
  )
}
