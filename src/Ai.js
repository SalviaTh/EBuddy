import { StatusBar } from "expo-status-bar";
import { Text,View,StyleSheet , ImageBackground} from "react-native";
import React,{useEffect} from "react";
import { useFonts } from "expo-font";


export default function Ai({ route }) {
  const { name } = route.params;
  const [fonts] =useFonts({
    baloo:require("../assets/fonts/static/Baloo2-ExtraBold.ttf"),
  });

  return (
    <ImageBackground source={require("../assets/background.png")} style={styles.bg}
        resizeMode='cover'
       >
    <View style={styles.container}>
        
        <StatusBar style="light">
        </StatusBar>
      <Text style={styles.text}>Hello {name}!</Text>
    </View>
    </ImageBackground>
  );
}
const styles=StyleSheet.create(
    {
        container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center'
        },
        bg:{
            flex:1,
        width:"100%",
        height:"100%",
        },
        text:{
            fontFamily:'baloo',
            fontSize:25,
        }
    }
)

