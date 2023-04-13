import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

import Home from './Components/Home';
function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Home />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(4,78,1, 0.6)',
  },
});

export default App;
