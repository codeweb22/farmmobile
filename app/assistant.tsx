import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, StatusBar, StyleSheet, Text, TextInput, View } from "react-native";

const prompts = [
  "What should I do if my plants have yellow leaves?",
  "How much water do pepper plants need?",
  "When can I start harvesting?",
];

export default function AssistantScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f7ed" />
      <View style={styles.screen}>
        <View style={styles.header}>
          <Pressable onPress={() => router.back()} style={styles.back}>
            <Ionicons name="chevron-back" size={20} color="#174633" />
          </Pressable>
          <Text style={styles.title}>Ask FarmPath</Text>
          <Pressable onPress={() => router.push("/voice")} style={styles.voiceButton}>
            <Ionicons name="mic-outline" size={17} color="#087143" />
          </Pressable>
        </View>
        <View style={styles.greetingRow}>
          <View style={styles.botIcon}><Ionicons name="leaf" size={18} color="#fff" /></View>
          <View style={styles.greetingBubble}>
            <Text style={styles.greeting}>Hi John 👋</Text>
            <Text style={styles.reply}>Ask me anything about your current lesson.</Text>
          </View>
        </View>
        <Text style={styles.promptHeader}>Suggested questions</Text>
        <View style={styles.promptList}>
          {prompts.map((prompt) => (
              <Pressable key={prompt} onPress={() => prompt.includes("yellow leaves") && router.push("/guide")} style={styles.prompt}>
              <Ionicons name="checkmark-circle-outline" size={16} color="#208250" />
              <Text style={styles.promptText}>{prompt}</Text>
            </Pressable>
          ))}
        </View>
        <Pressable onPress={() => router.push("/recommend")} style={styles.recommend}>
          <Ionicons name="sparkles-outline" size={14} color="#18804c" />
          <Text style={styles.recommendText}>See your recommended next steps</Text>
          <Ionicons name="chevron-forward" size={14} color="#678070" />
        </Pressable>
        <View style={styles.composer}>
          <TextInput placeholder="Type your question..." placeholderTextColor="#829188" style={styles.input} />
          <Pressable style={styles.send} accessibilityLabel="Send question">
            <Ionicons name="arrow-up" size={18} color="#fff" />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#f8f7ed" },
  screen: { flex: 1, paddingHorizontal: 18, paddingTop: 10, paddingBottom: 14 },
  header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 24 },
  back: { width: 34, height: 34, borderRadius: 17, alignItems: "center", justifyContent: "center" },
  title: { color: "#123e2d", fontSize: 16, fontWeight: "800" },
  voiceButton: { width: 34, height: 34, borderRadius: 17, backgroundColor: "#e7f0e2", alignItems: "center", justifyContent: "center" },
  greetingRow: { flexDirection: "row", alignItems: "flex-start", gap: 8 },
  botIcon: { width: 31, height: 31, borderRadius: 11, backgroundColor: "#087143", alignItems: "center", justifyContent: "center" },
  greetingBubble: { flex: 1, backgroundColor: "#fff", padding: 12, borderRadius: 14, borderWidth: 1, borderColor: "#e5eadd" },
  greeting: { color: "#1a4c36", fontSize: 11, fontWeight: "800" },
  reply: { color: "#566d60", fontSize: 11, lineHeight: 16, marginTop: 4 },
  promptHeader: { color: "#174633", fontSize: 11, fontWeight: "800", marginTop: 17, marginBottom: 8 },
  promptList: { gap: 7 },
  prompt: { flexDirection: "row", alignItems: "center", gap: 7, backgroundColor: "#fff", borderRadius: 12, borderWidth: 1, borderColor: "#e5eadd", paddingHorizontal: 9, paddingVertical: 9 },
  promptText: { flex: 1, color: "#355846", fontSize: 10, fontWeight: "600" },
  recommend: { flexDirection: "row", alignItems: "center", gap: 6, paddingVertical: 10 },
  recommendText: { flex: 1, color: "#276546", fontSize: 10, fontWeight: "700" },
  composer: { flexDirection: "row", alignItems: "center", gap: 8, borderRadius: 24, backgroundColor: "#fff", borderWidth: 1, borderColor: "#e5eadd", padding: 5, paddingLeft: 13, marginTop: "auto" },
  input: { flex: 1, minHeight: 36, color: "#244936", fontSize: 11 },
  send: { width: 34, height: 34, borderRadius: 17, backgroundColor: "#087143", alignItems: "center", justifyContent: "center" },
});
