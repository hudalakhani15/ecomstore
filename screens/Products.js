import { Image, Text, View } from "react-native"

export default  function Product(route,navigation){
    console.log(route.params)
    return(
        <View style={{padding: 30}}>
        <View
          key={route.params}
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            backgroundColor: 'white',
            justifyContent: 'center',
            flexWrap: 'wrap',
            borderRadius: 30,
            padding: 10,
            height: '100%',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.0,

            elevation: 24,
          }}>
            <Image
              resizeMode="contain"
              style={{width: 250, height: 250, margin: 5}}
              source={{uri: route.params}}
            /> <View>
            <Text
              style={{
                fontSize: 25,
                color: '#222',
                fontWeight: 'bold',
                marginLeft: 10,
                textAlign: 'center',
              }}>
              {route.params}
            </Text>
          </View>
          
            </View></View>
    
    );
}
