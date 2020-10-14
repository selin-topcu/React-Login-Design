import React from 'react';
import { Image,StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput } from 'react-native';




const Separator = () => (
  <View style={styles.separator} />
);

const App = () => (
  
  
  <SafeAreaView style={styles.container}>

<view>
<Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGI4Nxio--hjZNAbWFyNqrxuH3J8hjn6h7NA&usqp=CAU" }} style={{ width: 198, height: 63, alignItems: 'center',}} />

</view>
    <View >

    <Text style={styles.title}>
Giriş yapmak için     {"\n"}
kullanıcı adı ve şifre giriniz!</Text>
     
    </View>
    
    <Separator />
    <View style={styles.fixToText}>
    <TextInput value="username" style={{ margin:5, width:250, height:30, borderColor: 'gray', borderWidth: 2 }}  onChangeText={(text) => this.setState({text})}
    />
      </View>
      <View style={styles.fixToText}>
    <TextInput value="password" style={{ margin:5, width:250, height:30, borderColor: 'gray', borderWidth: 2 }}
    />
      </View>
    <View style={styles.fixToText}>


        <Button 
          title="GİRİŞ"
          color="#C5C4C4"s
        />
        
         </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
    alignItems: 'center',
  },
  title: {
    fontFamily: "sans-serif",
    textAlign: 'center',
    fontSize:'18px',
    marginVertical: 8,
    color: '#6BB19E',
  },
  fixToText: {
    justifyContent: 'center',
    flexDirection: 'row'
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',

  },
});

export default App;
