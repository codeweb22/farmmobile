import { router } from "expo-router";
import { useEffect } from "react";
import { Image, Pressable, StatusBar, StyleSheet, Text, View } from "react-native";

export default function SplashScreen(){
  useEffect(()=>{const timer=setTimeout(()=>router.replace("/onboarding"),1800);return()=>clearTimeout(timer)},[]);
  return <Pressable accessibilityRole="button" accessibilityLabel="Continue to FarmPath" onPress={()=>router.replace("/onboarding")} style={s.screen}>
    <StatusBar barStyle="light-content" backgroundColor="#12391F"/><Image source={require("../assets/images/splash-foliage.png")} resizeMode="stretch" style={s.foliage}/><Image source={require("../assets/images/splash-peppers.png")} resizeMode="cover" style={s.peppers}/><View style={s.shade}/>
    <View style={s.brand}><View style={s.leafMark}><View style={s.leafLeft}/><View style={s.leafRight}/></View><Text style={s.name}>FarmPath</Text><Text style={s.tagline}>Real Farming. Real Progress.</Text></View>
    <View style={s.footer}><View style={s.indicatorActive}/><View style={s.indicator}/></View>
  </Pressable>
}
const s=StyleSheet.create({screen:{flex:1,backgroundColor:"#12391F",justifyContent:"center",overflow:"hidden"},foliage:{...StyleSheet.absoluteFill,width:"100%",height:"100%",opacity:.95},peppers:{position:"absolute",bottom:0,width:"100%",height:"42%",opacity:.96},shade:{...StyleSheet.absoluteFill,backgroundColor:"rgba(3,35,18,.22)"},brand:{alignItems:"center",marginTop:-4},leafMark:{width:60,height:45,position:"relative",marginBottom:10},leafLeft:{position:"absolute",left:9,top:7,width:24,height:34,borderTopLeftRadius:24,borderBottomRightRadius:24,backgroundColor:"#F2F5E9",transform:[{rotate:"-25deg"}]},leafRight:{position:"absolute",right:9,top:7,width:24,height:34,borderTopRightRadius:24,borderBottomLeftRadius:24,backgroundColor:"#F2F5E9",transform:[{rotate:"25deg"}]},name:{fontSize:29,fontWeight:"800",letterSpacing:-.7,color:"#fff"},tagline:{fontSize:12,fontWeight:"600",color:"#fff",marginTop:9},footer:{position:"absolute",bottom:23,alignSelf:"center",flexDirection:"row",alignItems:"center",gap:5},indicatorActive:{width:20,height:3,borderRadius:2,backgroundColor:"#fff"},indicator:{width:5,height:3,borderRadius:2,backgroundColor:"rgba(255,255,255,.68)"}});
