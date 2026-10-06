import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, Pressable, StatusBar, StyleSheet, Text, View } from "react-native";

export default function OnboardingScreen() {
  return <SafeAreaView style={s.safe}>
    <StatusBar barStyle="dark-content" backgroundColor="#FAF9F0" />
    <View style={s.content}>
      <View style={s.brand}><View style={s.leaves}><Ionicons name="leaf" size={28} color="#176344"/><Ionicons name="leaf" size={24} color="#0E593A"/></View><Text style={s.brandText}>FarmPath</Text></View>
      <View style={s.copy}><Text style={s.title}>Your Farming Journey{`\n`}Starts Here</Text><Text style={s.description}>Learn, practice, track and grow your pepper farm — step by step.</Text></View>
      <View style={s.art}><View style={s.hillBack}/><View style={s.hillFront}/><Image source={require("../assets/images/onboarding-farm.png")} resizeMode="cover" style={s.photo}/></View>
      <View style={s.actions}><Pressable accessibilityRole="button" onPress={()=>router.push("/sign-up")} style={({pressed})=>[s.primary,pressed&&{opacity:.86}]}><Text style={s.primaryText}>Get Started</Text></Pressable><Pressable onPress={()=>router.push("/login")} style={s.login}><Text style={s.loginText}>I already have an account</Text></Pressable></View>
    </View>
  </SafeAreaView>;
}
const s=StyleSheet.create({safe:{flex:1,backgroundColor:"#FAF9F0"},content:{flex:1,paddingHorizontal:23,paddingTop:17,paddingBottom:20},brand:{alignItems:"center",marginTop:8},leaves:{height:40,flexDirection:"row",alignItems:"center",gap:-7},brandText:{fontSize:23,fontWeight:"800",letterSpacing:-.6,color:"#06452F",marginTop:0},copy:{marginTop:25},title:{fontSize:25,fontWeight:"800",lineHeight:30,color:"#103D30",letterSpacing:-.35},description:{fontSize:14,lineHeight:20,color:"#335C4B",marginTop:8,maxWidth:330},art:{flex:1,minHeight:220,maxHeight:390,marginTop:18,justifyContent:"flex-end",position:"relative"},hillBack:{position:"absolute",top:14,left:-35,width:"76%",height:112,borderRadius:90,backgroundColor:"#E3E9D5",transform:[{rotate:"-9deg"}]},hillFront:{position:"absolute",top:44,right:-25,width:"69%",height:100,borderRadius:90,backgroundColor:"#CCDCC0",transform:[{rotate:"8deg"}]},photo:{width:"100%",height:"82%",borderRadius:22,backgroundColor:"#DCE8D6"},actions:{alignItems:"center",gap:14,paddingTop:15},primary:{height:52,width:"100%",borderRadius:28,backgroundColor:"#00683F",alignItems:"center",justifyContent:"center",shadowColor:"#104A31",shadowOpacity:.12,shadowRadius:9,shadowOffset:{width:0,height:4},elevation:2},primaryText:{fontSize:15,color:"#fff",fontWeight:"800"},login:{minHeight:34,justifyContent:"center",paddingHorizontal:10},loginText:{fontSize:12,color:"#164737",fontWeight:"600"}});
