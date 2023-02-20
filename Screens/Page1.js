import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity} from 'react-native'
import React from 'react'


export default function Page1 ({navigation}) {
  return (
    <View style={styles.container}>
       <ImageBackground source={require('../assets/back.png')} resizeMode="cover" style={styles.image}>
        <View style={styles.image2}>
        <Image source={require('../assets/solve.png')} />
        </View>

        
        <Text style={styles.text}>Swipe up 
      <Text style={styles.text1} > to{'\n'}explore your{'\n'}need assistance.</Text>
      </Text>
        
      
      
      <View style={{flex:1,justifyContent:'flex-end'}}>
     
      <View style={styles.image3}>
        <Image source={require('../assets/Vector1.png')}  />
      </View>
        <TouchableOpacity style={{ padding:30,backgroundColor:'#fff',borderTopRightRadius:50,borderTopStartRadius:50}}
         onPress={() => navigation.navigate('Page2')}
         />
      </View>

    </ImageBackground>
   
    </View>
  )
}

const styles = StyleSheet.create({

container:{
    flex:1,
    
},
image:{
    flex:1,
    
    justifyContent:'center',
    
    
},
text:{
    color:'#ff2',
    fontSize:30,
    fontWeight:'500',
    margin:15,
    marginTop:100
},
text1:{
    color:'#fff'
},
image2:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:150,
    opacity:0.6,
    

},
image3:{
    justifyContent:'center',
    alignItems:'center',
    marginBottom:50
}

});