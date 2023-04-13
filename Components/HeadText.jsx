import React from 'react'
import {WebView} from 'react-native-webview'
const HeadText = () => {
  return (
  
   <WebView source={{ html: "<div><h2 style='font-size:130px; margin:20; background: linear-gradient(to right, #dcbb03, #000);-webkit-background-clip: text; -webkit-text-fill-color: transparent; '>I AM JAMAICA GOSPEL RADIO</h2></div>" }} 
   style={{width:300, height:100,  borderRadius:30, margin:30, backgroundColor: 'rgba(4,78,1, 0.6)', padding:20,}} />
 
   
  );
};

export default HeadText
