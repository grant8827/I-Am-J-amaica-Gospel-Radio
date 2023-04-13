import React from 'react'
import { View, Text, Linking } from 'react-native'

const About = () => {
  return (
    <View style={{width:320, height:'auto', margin:20, justifyContent: 'center', alignItems: 'center',}}>
      <Text style={{fontSize: 35, color: '#dcbb03', fontWeight: '600', }}>About</Text>
      <Text style={{color: '#000', fontSize: 15,}}>God inspired a humble soul to create this gospel ministry to motivate God’s people to continue the journey with Christ Jesus and to pull the unsaved unto Christ; through testimonies, songs and the word of God.</Text>
    <View style={{width:320, height:'auto', marginTop:20, justifyContent: 'center', alignItems: 'center',}}>
        <Text style={{fontSize: 35, color: '#dcbb03', fontWeight: '600'}}>Contact</Text>
        <Text style={{color: '#000', fontSize: 15,}}>Email: iamjamaicagospelstation@gmail.com</Text>
        <Text style={{color: '#000', fontSize: 15, margin:10,}}>Tel: 8762196511 or 
8764682735</Text>
       

    </View>
    <View>
    <Text style={{fontSize:30, color:'#dcbb03', marginTop:20,  fontWeight:'600', justifyContent:'center',}}>Visit our Website</Text>
    <Text onPress={()=> Linking.openURL('http://iamjamaicaradio.com/')} style={{justifyContent:'center',textDecorationLine:'underline', textAlign:'center', alignItems:'center', color:'#0954a1',fontSize:18,}}>i am jamaica radio</Text>
    </View>
   
    <View>
        <Text  style={{marginTop:30,marginBottom:-10, color:'#000'}}>Copyright © I Am Jamaica Gospel Radio</Text>
    </View>
    </View>
  )
}

export default About
