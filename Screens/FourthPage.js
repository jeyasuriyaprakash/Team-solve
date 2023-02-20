import { View, Text,StyleSheet, TouchableOpacity,Image } from 'react-native'
import React from 'react'

export default function FourthPage() {
  return (
    <View style={styles.container}>
        <View>
        <Image style={{marginTop:100}} source={require('../assets/background.png')} />
        </View>

        <View style={{ flex:1,justifyContent:'center',alignItems:'center',}}>
        <TouchableOpacity style={styles.touchable}>
          <Image style={styles.img} source={require('../assets/fgoogle.png')} />
          <Text style={styles.text}>Signup with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchable}>
          <Image style={styles.img} source={require('../assets/ffacebook.png')} />
          <Text style={styles.text}>Signup with Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchable}>
          <Image style={styles.img} source={require('../assets/ftwitter.png')} />
          <Text style={styles.text}>Signup with Twitter</Text>
        </TouchableOpacity>
        
        </View>
        </View>
       
 
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'flex-start',
    backgroundColor:'white',
    alignItems:'center',
    
  }, 
  touchable:{
     alignItems:'center',
     borderWidth:0,
     borderRadius:10,
    justifyContent:'center',
     marginTop:40,
    fontWeight:'bold',
     color:'white',
     alignContent:'center',
     backgroundColor: 'white',
     shadowColor: '#171717',
     shadowOffset: {width: -2, height: 4},
     shadowOpacity: 0.2,
     shadowRadius: 3,
     elevation: 50,
    shadowColor: '#9298a6',
     flexDirection:'row',
     height:60,
     width:280, 
  }, 
  img:{
    height:25,
    width:25,
    alignItems:'center',
    display:'flex',
    

  },
  text:{
    justifyContent:'center',
    fontWeight:'bold',
    
  },
})