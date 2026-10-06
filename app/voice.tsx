import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, StatusBar, StyleSheet, Text, View } from "react-native";

const bars = [10, 17, 24, 13, 30, 19, 11, 23, 16, 29, 12, 20, 9];

export default function VoiceScreen() {
  const [listening, setListening] = useState(true);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#073a2a" />
      <View style={styles.screen}>
        <View style={styles.header}>
          <Pressable onPress={() => router.back()} style={styles.back}><Ionicons name="chevron-back" size={20} color="#fff" /></Pressable>
          <Text style={styles.title}>AI Farmer</Text>
          <View style={styles.spacer} />
        </View>
        <View style={styles.voiceArt}>
          <View style={styles.face}><Ionicons name="leaf" size={34} color="#fff" /><View style={styles.faceDots}><View style={styles.faceDot} /><View style={styles.faceDot} /></View></View>
          <Text style={styles.status}>{listening ? "Listening..." : "Tap to start"}</Text>
          <View style={styles.wave}>
            {bars.map((height, index) => <View key={index} style={[styles.bar, { height }]} />)}
          </View>
          <Text style={styles.hint}>{listening ? "Tap to stop" : "Ask your farming question"}</Text>
        </View>
        <View style={styles.bottomControls}>
          <View style={styles.sideWave}>{bars.slice(0, 5).map((height, index) => <View key={index} style={[styles.sideBar, { height: height * 0.6 }]} />)}</View>
          <Pressable accessibilityRole="button" accessibilityLabel={listening ? "Stop listening" : "Start listening"} onPress={() => setListening(!listening)} style={styles.mic}>
            <Ionicons name={listening ? "stop" : "mic"} size={25} color="#0c5136" />
          </Pressable>
          <View style={styles.sideWave}>{bars.slice(5, 10).map((height, index) => <View key={index} style={[styles.sideBar, { height: height * 0.6 }]} />)}</View>
        </View>
        <Pressable onPress={() => router.push("/assistant")} style={styles.chatLink}><Ionicons name="chatbubble-outline" size={15} color="#cde6d5" /><Text style={styles.chatText}>Type instead</Text></Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#073a2a" },
  screen: { flex: 1, paddingHorizontal: 19, paddingTop: 10, paddingBottom: 22, backgroundColor: "#073a2a" },
  header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  back: { width: 32, height: 32, justifyContent: "center" },
  title: { color: "#fff", fontSize: 15, fontWeight: "700" },
  spacer: { width: 32 },
  voiceArt: { flex: 1, alignItems: "center", justifyContent: "center", marginTop: -20 },
  face: { width: 89, height: 89, borderRadius: 45, borderWidth: 2, borderColor: "#e6f0dc", alignItems: "center", justifyContent: "center", marginBottom: 17 },
  faceDots: { position: "absolute", flexDirection: "row", top: 52, gap: 19 },
  faceDot: { width: 4, height: 4, borderRadius: 2, backgroundColor: "#fff" },
  status: { color: "#fff", fontSize: 20, fontWeight: "700" },
  wave: { flexDirection: "row", alignItems: "center", gap: 5, height: 38, marginTop: 19 },
  bar: { width: 3, borderRadius: 3, backgroundColor: "#4cbd70" },
  hint: { color: "#c7decf", fontSize: 10, marginTop: 8 },
  bottomControls: { flexDirection: "row", alignItems: "center", justifyContent: "space-around", marginBottom: 16 },
  sideWave: { flexDirection: "row", alignItems: "center", gap: 4, height: 32 },
  sideBar: { width: 2, borderRadius: 2, backgroundColor: "#3a9d62" },
  mic: { width: 58, height: 58, borderRadius: 29, backgroundColor: "#f6f7e8", alignItems: "center", justifyContent: "center" },
  chatLink: { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 6 },
  chatText: { color: "#cde6d5", fontSize: 10 },
});
