import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { AppTabs } from "../components/AppTabs";

const stages = [
  { name: "Learn", count: "3 / 8", icon: "book", value: 0.38 },
  { name: "Watch", count: "3 / 8", icon: "play", value: 0.38 },
  { name: "Practice", count: "2 / 8", icon: "checkmark-circle", value: 0.25 },
  { name: "Complete", count: "2 / 8", icon: "ribbon", value: 0.25 },
];

export default function JourneyScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f7ed" />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Your Journey</Text>
        <View style={styles.segmentRow}>
          <Text style={styles.segmentSelected}>Overview</Text>
          <Text style={styles.segment}>Activities</Text>
          <Text style={styles.segment}>Lessons</Text>
        </View>
        <View style={styles.progressCard}>
          <View style={styles.ringOuter}>
            <View style={styles.ringInner} />
            <Text style={styles.percent}>35%</Text>
          </View>
          <Text style={styles.progressTitle}>Overall progress</Text>
          <Text style={styles.progressCaption}>12 of 34 days</Text>
        </View>
        <Text style={styles.sectionTitle}>Progress by stage</Text>
        <View style={styles.stageList}>
          {stages.map((stage) => (
            <View key={stage.name} style={styles.stageRow}>
              <View style={styles.stageIcon}>
                <Ionicons name={stage.icon as any} size={16} color="#176144" />
              </View>
              <Text style={styles.stageName}>{stage.name}</Text>
              <View style={styles.miniTrack}>
                <View style={[styles.miniFill, { width: `${stage.value * 100}%` }]} />
              </View>
              <Text style={styles.stageCount}>{stage.count}</Text>
            </View>
          ))}
        </View>
        <Pressable style={styles.nextCard} onPress={() => router.push("/lesson")}>
          <View>
            <Text style={styles.nextTitle}>Next lesson</Text>
            <Text style={styles.nextCopy}>Preparing nursery bed</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color="#0b613e" />
        </Pressable>
      </ScrollView>
      <AppTabs selected="Journey" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#f8f7ed" },
  content: { flexGrow: 1, paddingHorizontal: 20, paddingTop: 18, paddingBottom: 18 },
  title: { color: "#073d2e", fontSize: 22, fontWeight: "800" },
  segmentRow: { flexDirection: "row", gap: 7, marginTop: 14 },
  segmentSelected: { color: "#fff", backgroundColor: "#087143", paddingHorizontal: 13, paddingVertical: 8, overflow: "hidden", borderRadius: 20, fontSize: 11, fontWeight: "700" },
  segment: { color: "#456456", backgroundColor: "#e9eee4", paddingHorizontal: 13, paddingVertical: 8, overflow: "hidden", borderRadius: 20, fontSize: 11, fontWeight: "700" },
  progressCard: { marginTop: 15, alignItems: "center", backgroundColor: "#ffffff", borderRadius: 18, paddingVertical: 18, borderWidth: 1, borderColor: "#e6eadd" },
  ringOuter: { width: 112, height: 112, borderRadius: 56, borderWidth: 10, borderColor: "#c9e2c5", borderTopColor: "#12804e", alignItems: "center", justifyContent: "center", transform: [{ rotate: "-40deg" }] },
  ringInner: { ...StyleSheet.absoluteFill, borderRadius: 56, borderWidth: 1, borderColor: "transparent" },
  percent: { color: "#134a34", fontSize: 23, fontWeight: "800", transform: [{ rotate: "40deg" }] },
  progressTitle: { color: "#164632", fontSize: 12, fontWeight: "700", marginTop: 8 },
  progressCaption: { color: "#758379", fontSize: 10, marginTop: 3 },
  sectionTitle: { color: "#103f2e", fontSize: 14, fontWeight: "800", marginTop: 19, marginBottom: 8 },
  stageList: { backgroundColor: "#fff", borderRadius: 15, borderWidth: 1, borderColor: "#e6eadd", paddingHorizontal: 11 },
  stageRow: { minHeight: 48, flexDirection: "row", alignItems: "center", borderBottomWidth: 1, borderBottomColor: "#eef0e9", gap: 8 },
  stageIcon: { width: 25, height: 25, borderRadius: 8, backgroundColor: "#eaf2e5", alignItems: "center", justifyContent: "center" },
  stageName: { width: 66, color: "#315744", fontSize: 11, fontWeight: "700" },
  miniTrack: { flex: 1, height: 5, borderRadius: 5, backgroundColor: "#e6eee2", overflow: "hidden" },
  miniFill: { height: 5, borderRadius: 5, backgroundColor: "#258150" },
  stageCount: { color: "#5f776a", fontSize: 10, width: 34, textAlign: "right" },
  nextCard: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: "#eef4e8", borderRadius: 14, padding: 13, marginTop: 13 },
  nextTitle: { color: "#537060", fontSize: 10, fontWeight: "600" },
  nextCopy: { color: "#174632", fontSize: 12, fontWeight: "800", marginTop: 3 },
});
