import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React,{useState} from 'react';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';


export default function Login() {
  const [name,setName]=useState("");
  const navigation = useNavigation();

  const [fonts]=useFonts({
    baloo:require("../assets/fonts/static/Baloo2-ExtraBold.ttf"),
});
  const handleSubmit=()=>{
    // alert(name);
    if(!name.trim()) return;
    navigation.navigate("Ai",{name});
  };
  if (!fonts) {
  return null;
}

  return (
    <ImageBackground source={require("../assets/background.png")}
    style={styles.bg}
    resizeMode='cover'
   >
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.textfont}>Enter Name</Text>
      <TextInput placeholder='Type your Name' style={styles.input} placeholderTextColor={"#999"} value={name} onChangeText={setName}></TextInput>
      <TouchableOpacity onPress={handleSubmit} style={styles.button}><Text style={styles.buttonText}>Start Learning</Text></TouchableOpacity>
      
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:"#FFF0C4",
    // width:"80%",
    // height:"20%",
  },
  bg:{
    flex:1,
    width:"100%",
    height:"100%",
  },
  textfont:{
    color: '#fff158',
    fontSize:38,
    fontWeight:'bold',
    fontFamily:'baloo',

  },
  input:{
    backgroundColor:"#edb5b1",
    width:"70%",
    padding:14,
    borderRadius:10,
    fontSize:18,
    margin:20,
    alignItems:'center',

  },
  button:{
    backgroundColor:"#ffbe25",
    width:"70%",
    marginBottom:20,
    padding:14,
    borderRadius:20,
    borderWidth:2,
    borderColor:"#fff",
    alignItems:"center"
  },
  buttonText:{
    fontSize:22,
    fontWeight:'bold',
    fontFamily:'baloo',

  },
});
