import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Image, Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";

const crops=[
  {name:"Pepper Farming",emoji:"🌶️",tint:"#E8F2DF"},
  {name:"Yam Farming",emoji:"🍠",tint:"#F1E8DA"},
  {name:"Tomato Farming",emoji:"🍅",tint:"#F7E5DA"},
  {name:"Corn Farming",emoji:"🌽",tint:"#F5EFD7"},
  {name:"Cassava Farming",emoji:"🌿",tint:"#E4EDDF"},
  {name:"Plantain Farming",emoji:"🍌",tint:"#F5EFD7"},
  {name:"Vegetable Farming",emoji:"🥬",tint:"#E4EDDF"},
];
export default function CropsScreen(){const [selected,setSelected]=useState("Pepper Farming");const activeCrop=crops.find(crop=>crop.name===selected)??crops[0];return <SafeAreaView style={s.safe}><StatusBar barStyle="dark-content" backgroundColor="#FAF9F0"/><ScrollView contentContainerStyle={s.content} showsVerticalScrollIndicator={false}><View style={s.top}><Pressable onPress={()=>router.back()} style={s.back}><Ionicons name="chevron-back" size={19} color="#164632"/></Pressable><Text style={s.title}>Choose Your Crop</Text></View><Text style={s.subtitle}>Start your farming journey with one crop. You can add more later.</Text>
  <Image source={require("../assets/images/onboarding-peppers.jpg")} resizeMode="cover" style={s.heroImage}/>
  <Pressable accessibilityRole="radio" accessibilityState={{selected:true}} style={[s.row,s.activeRow,s.selectedRow]}><View style={[s.thumb,{backgroundColor:activeCrop.tint}]}><Text style={s.emoji}>{activeCrop.emoji}</Text></View><Text style={s.name}>{activeCrop.name}</Text><Ionicons name="checkmark-circle" size={19} color="#087143"/></Pressable>
  <View style={s.list}>{crops.filter(crop=>crop.name!==selected).map(crop=><Pressable key={crop.name} accessibilityRole="radio" accessibilityState={{selected:false}} onPress={()=>setSelected(crop.name)} style={s.row}><View style={[s.thumb,{backgroundColor:crop.tint}]}><Text style={s.emoji}>{crop.emoji}</Text></View><Text style={s.name}>{crop.name}</Text></Pressable>)}</View>
  <Pressable accessibilityRole="button" onPress={()=>router.replace("/dashboard")} style={s.continue}><Text style={s.continueText}>Continue</Text></Pressable>
  </ScrollView></SafeAreaView>}
const s=StyleSheet.create({safe:{flex:1,backgroundColor:"#FAF9F0"},content:{flexGrow:1,paddingHorizontal:20,paddingTop:21,paddingBottom:27},top:{flexDirection:"row",alignItems:"center",gap:4},back:{width:30,height:34,justifyContent:"center"},title:{fontSize:22,fontWeight:"800",color:"#103D30",letterSpacing:-.3},subtitle:{fontSize:13,lineHeight:19,color:"#315C4A",marginTop:4},heroImage:{width:"100%",height:88,borderRadius:13,marginTop:13,backgroundColor:"#E1E8DA"},list:{marginTop:5,gap:6},row:{minHeight:38,flexDirection:"row",alignItems:"center",backgroundColor:"#FFFDF7",borderRadius:11,paddingHorizontal:8,borderWidth:1,borderColor:"#E5E9DE"},selectedRow:{marginTop:7},activeRow:{borderColor:"#18844D",backgroundColor:"#F3F8ED"},thumb:{width:27,height:27,borderRadius:9,alignItems:"center",justifyContent:"center"},emoji:{fontSize:15},name:{flex:1,color:"#174332",fontSize:10,fontWeight:"700",marginLeft:9},continue:{height:44,borderRadius:25,backgroundColor:"#00683F",alignItems:"center",justifyContent:"center",marginTop:12},continueText:{fontSize:13,color:"white",fontWeight:"800"}});
