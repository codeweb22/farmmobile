import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";

const steps = ["Clear the area", "Mix compost with soil", "Make the nursery bed", "Water and level the bed"];

export default function VideoScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f7ed" />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Pressable onPress={() => router.back()} style={styles.back}><Ionicons name="chevron-back" size={19} color="#174632" /></Pressable>
          <Text style={styles.title}>Preparing Nursery Bed</Text>
          <View style={styles.spacer} />
        </View>
        <Pressable style={styles.player} accessibilityRole="button" accessibilityLabel="Play lesson video">
          <Image source={require("../assets/images/onboarding-seedlings.jpg")} resizeMode="cover" style={styles.photo} />
          <View style={styles.playCircle}><Ionicons name="play" size={25} color="#fff" /></View>
          <View style={styles.controls}>
            <Ionicons name="play" size={12} color="#fff" />
            <View style={styles.videoTrack}><View style={styles.videoProgress} /></View>
            <Text style={styles.time}>1:14 / 8:00</Text>
            <Ionicons name="expand" size={12} color="#fff" />
          </View>
        </Pressable>
        <View style={styles.tabRow}>
          <Text style={styles.tabActive}>Steps</Text>
          <Text style={styles.tab}>Key points</Text>
        </View>
        <Text style={styles.sectionTitle}>Follow along</Text>
        <View style={styles.steps}>
          {steps.map((step, index) => (
            <View key={step} style={styles.stepRow}>
              <View style={styles.number}><Text style={styles.numberText}>{index + 1}</Text></View>
              <Text style={styles.stepText}>{step}</Text>
            </View>
          ))}
        </View>
        <Pressable onPress={() => router.push("/practice")} style={styles.primary}>
          <Text style={styles.primaryText}>Continue to practice</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#f8f7ed" },
  content: { flexGrow: 1, paddingHorizontal: 18, paddingTop: 8, paddingBottom: 20 },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 9 },
  back: { width: 31, height: 31, justifyContent: "center" },
  title: { flex: 1, color: "#174632", fontSize: 15, fontWeight: "800", marginLeft: 3 },
  spacer: { width: 24 },
  player: { height: 198, borderRadius: 14, overflow: "hidden", alignItems: "center", justifyContent: "center", backgroundColor: "#183a26" },
  photo: { ...StyleSheet.absoluteFill, width: "100%", height: "100%", opacity: 0.88 },
  playCircle: { width: 47, height: 47, borderRadius: 24, backgroundColor: "rgba(0,0,0,0.62)", alignItems: "center", justifyContent: "center", paddingLeft: 3 },
  controls: { position: "absolute", bottom: 8, left: 10, right: 10, flexDirection: "row", alignItems: "center", gap: 7 },
  videoTrack: { flex: 1, height: 3, backgroundColor: "rgba(255,255,255,0.65)", borderRadius: 2 },
  videoProgress: { width: "19%", height: 3, backgroundColor: "#fff", borderRadius: 2 },
  time: { color: "#fff", fontSize: 8 },
  tabRow: { flexDirection: "row", marginTop: 14, borderBottomWidth: 1, borderBottomColor: "#dce5dc" },
  tabActive: { flex: 1, textAlign: "center", color: "#087143", fontSize: 11, fontWeight: "800", paddingVertical: 9, borderBottomWidth: 2, borderBottomColor: "#087143" },
  tab: { flex: 1, textAlign: "center", color: "#758278", fontSize: 11, fontWeight: "600", paddingVertical: 9 },
  sectionTitle: { color: "#103f2e", fontSize: 13, fontWeight: "800", marginTop: 12, marginBottom: 8 },
  steps: { gap: 8 },
  stepRow: { flexDirection: "row", alignItems: "center", gap: 8 },
  number: { width: 22, height: 22, borderRadius: 11, backgroundColor: "#087143", alignItems: "center", justifyContent: "center" },
  numberText: { color: "#fff", fontSize: 10, fontWeight: "800" },
  stepText: { color: "#335745", fontSize: 11, fontWeight: "600" },
  primary: { height: 42, borderRadius: 22, backgroundColor: "#087143", alignItems: "center", justifyContent: "center", marginTop: 14 },
  primaryText: { color: "#fff", fontSize: 11, fontWeight: "800" },
});
