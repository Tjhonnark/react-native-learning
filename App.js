import React from 'react';
import {Text, View} from 'react-native'; 

const App = () => {
  return( 
  <View style={styles.container}>
    <Text style={styles.text}>Hello World!!</Text>
  </View>
  );
 };

 const styles = StyleSheet.create({
   container: {
     flex:1, 
     justifyContent: 'center', 
     alignItems: 'center',
     backgroundColor: "#292929",
    }, 
    text: {
      fontSize: 30
    },

 });

export default App;