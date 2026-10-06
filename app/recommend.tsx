import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";

const ideas = [
  { title: "Apply organic fertilizer", time: "Today" },
  { title: "Check for pests", time: "In 3 days" },
  { title: "Water your plants", time: "Tomorrow" },
];

export default function RecommendScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f7ed" />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Pressable onPress={() => router.back()} style={styles.back}><Ionicons name="chevron-back" size={19} color="#174632" /></Pressable>
          <Text style={styles.title}>AI Farmer</Text>
          <View style={styles.spacer} />
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Your next best steps</Text>
          {ideas.map((idea, index) => (
            <View key={idea.title} style={styles.idea}>
              <View style={styles.number}><Text style={styles.numberText}>{index + 1}</Text></View>
              <View style={styles.ideaCopy}><Text style={styles.ideaTitle}>{idea.title}</Text><Text style={styles.ideaTime}>{idea.time}</Text></View>
            </View>
          ))}
          <Pressable onPress={() => router.push("/journey")} style={styles.primary}><Text style={styles.primaryText}>View full plan</Text></Pressable>
          <Pressable onPress={() => router.push("/journey")} style={styles.secondary}><Text style={styles.secondaryText}>Save to my journey</Text></Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#f8f7ed" },
  content: { flexGrow: 1, paddingHorizontal: 18, paddingTop: 9 },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 16 },
  back: { width: 31, height: 32, justifyContent: "center" },
  title: { color: "#103f2e", fontSize: 15, fontWeight: "800", marginLeft: 3 },
  spacer: { flex: 1 },
  card: { backgroundColor: "#fff", borderRadius: 15, borderWidth: 1, borderColor: "#e5eadd", padding: 13 },
  cardTitle: { color: "#174632", fontSize: 13, fontWeight: "800", marginBottom: 8 },
  idea: { minHeight: 49, flexDirection: "row", alignItems: "center", gap: 8, borderBottomWidth: 1, borderBottomColor: "#eff1ea" },
  number: { width: 20, height: 20, borderRadius: 10, backgroundColor: "#0a7a47", alignItems: "center", justifyContent: "center" },
  numberText: { color: "#fff", fontSize: 9, fontWeight: "800" },
  ideaCopy: { flex: 1 },
  ideaTitle: { color: "#315744", fontSize: 10, fontWeight: "700" },
  ideaTime: { color: "#77867c", fontSize: 9, marginTop: 3 },
  primary: { height: 39, borderRadius: 20, backgroundColor: "#087143", alignItems: "center", justifyContent: "center", marginTop: 11 },
  primaryText: { color: "#fff", fontSize: 10, fontWeight: "800" },
  secondary: { height: 38, borderRadius: 20, borderWidth: 1, borderColor: "#80ae91", alignItems: "center", justifyContent: "center", marginTop: 7 },
  secondaryText: { color: "#176843", fontSize: 10, fontWeight: "700" },
});
