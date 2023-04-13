import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {WebView} from 'react-native-webview';

const App = () => {
  function onMessage(data) {
    alert(data.nativeEvent.data);
  }

  return (
    <SafeAreaView style={{flex: 1, width: 300, height: 600,}}>
      <WebView
        scalesPageToFit={false}
        mixedContentMode="compatibility"
        onMessage={onMessage}
        source={{
          html: ` 
          <html>
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </head>
          <body
            style="
              display: flex;
              justify-content: center;
              flex-direction: column;
              align-items: center;
              background-color:rgba(4,78,1, 0.6);
            "
          >
           
            <script>
              const sendDataToReactNativeApp = async () => {
                window.ReactNativeWebView.postMessage('Data from WebView / Website');
              };
            </script>

            <div id='rbcloud_player19462'></div>
<script src='https://c23.radioboss.fm/w/player.js?u=https%3A%2F%2Fc23.radioboss.fm%3A8013%2Fstream&amp;wid=19462'></script>
           
<div style="margin-top:30px;">
<!-- BEGIN CBOX - www.cbox.ws - v4.3 -->
<div id="cboxdiv" style="position: relative; margin: 0 auto; width: auto; font-size: 0; line-height: 0;">
<div style="position: relative; height: 370px; overflow: auto; overflow-y: auto; -webkit-overflow-scrolling: touch; border: 0px solid;"><iframe src="https://www3.cbox.ws/box/?boxid=3527133&boxtag=jYmZ2x&sec=main" marginheight="0" marginwidth="0" frameborder="0" width="100%" height="100%" scrolling="auto" allowtransparency="yes" name="cboxmain3-3527133" id="cboxmain3-3527133"></iframe></div>
<div style="position: relative; height: 80px; overflow: hidden; border: 0px solid; border-top: 0px;"><iframe src="https://www3.cbox.ws/box/?boxid=3527133&boxtag=jYmZ2x&sec=form" allow="autoplay" marginheight="0" marginwidth="0" frameborder="0" width="100%" height="100%" scrolling="no" allowtransparency="yes" name="cboxform3-3527133" id="cboxform3-3527133"></iframe></div>
</div>
<!-- END CBOX --> 


</div>


</body>
        </html>        
`,
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;