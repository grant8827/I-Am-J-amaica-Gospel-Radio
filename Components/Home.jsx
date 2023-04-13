import React from 'react'
import { View, Text, Image, StyleSheet, Linking, } from 'react-native';
import Player from './Player';
import About from './About'
import HeadText from './HeadText';
const Home = () => {
 
  return (
    <View style={styles.container2}>
        <Image source={require('./Image/I-Am-Jamaica-Radio-Logo.jpg')} style={styles.logo}/>
   
     <HeadText/>

    <View style={{width: '100%', height: 2, backgroundColor: '#000'}}></View>
<Text style={{width:300, margin:20, color:'#000'}}>24 hours of none stop songs and the word of God. We love to play contemporary gospel music. </Text>
 <Player />
 <Text style={{fontSize: 30, color: '#dcbb03', fontWeight: '600',}}>Fellow Us On</Text>
<View style={styles.icon}>
  
<Text style={{marginRight:20,}} onPress={() => Linking.openURL('https://www.facebook.com/people/Iam-Jamaica-Gospel-Radio-Station/100077085797793/')}>
  <Image source={require('./Image/social-media-icon/facebook.png')}
    style={styles.socialMedia}/></Text>
<Text style={{marginRight:20,}} onPress={() => Linking.openURL('https://tinstagram/')}>
  <Image source={require('./Image/social-media-icon/instagram.png')}
   style={styles.socialMedia}/></Text>
<Text style={{marginRight:20,}} onPress={() => Linking.openURL('https://wa.me/18762196511')}>
  <Image source={require('./Image/social-media-icon/whatsapp.png')}
   style={styles.socialMedia}/></Text>

<Text style={{marginRight:20,}} onPress={() => Linking.openURL('https://www.youtube.com/channel/UCOrY8hZxFXhol97ZNsDFmyg')}>
  <Image source={require('./Image/social-media-icon/youtube.png')}
   style={styles.socialMedia}/></Text>



</View>
<About/>

    </View>
  )
}



const styles = StyleSheet.create({
container2:{
    width:'100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
},

logo:{
    width: 250,
    height:250,
    borderRadius: 50,
    margin: 20,
    padding:20,
},

icon:{
flexDirection:'row',
height:80,
width:'100%',
justifyContent:'center'
},

socialMedia:{
  width: 50,
  height:50,   
},

});



export default Home
