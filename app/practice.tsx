import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";

export default function PracticeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f7ed" />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Pressable onPress={() => router.back()} style={styles.back}><Ionicons name="chevron-back" size={19} color="#174632" /></Pressable>
          <Text style={styles.title}>Try It Yourself</Text>
          <View style={styles.spacer} />
        </View>
        <Text style={styles.intro}>Follow the steps to prepare your nursery bed on your farm.</Text>
        <Image source={require("../assets/images/onboarding-seedlings.jpg")} resizeMode="cover" style={styles.photo} />
        <Text style={styles.stepCount}>Step 1 of 4</Text>
        <Text style={styles.stepTitle}>Clear the area</Text>
        <Text style={styles.copy}>Remove weeds, stones and debris from the area where you will prepare the nursery bed.</Text>
        <Pressable onPress={() => router.push("/success" as any)} style={styles.primary}>
          <Text style={styles.primaryText}>Mark as done</Text>
        </Pressable>
        <Pressable onPress={() => router.push("/assistant")} style={styles.help}>
          <Ionicons name="chatbubble-ellipses-outline" size={16} color="#236a49" />
          <Text style={styles.helpText}>Need help?</Text>
          <Text style={styles.ask}>Ask AI</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#f8f7ed" },
  content: { flexGrow: 1, paddingHorizontal: 18, paddingTop: 8, paddingBottom: 20 },
  header: { flexDirection: "row", alignItems: "center" },
  back: { width: 30, height: 32, justifyContent: "center" },
  title: { flex: 1, color: "#103f2e", fontSize: 16, fontWeight: "800", marginLeft: 4 },
  spacer: { width: 26 },
  intro: { color: "#365b49", fontSize: 11, lineHeight: 16, marginTop: 6 },
  photo: { width: "100%", height: 153, borderRadius: 13, marginTop: 12, backgroundColor: "#d9e8d1" },
  stepCount: { color: "#718176", fontSize: 10, fontWeight: "700", marginTop: 14 },
  stepTitle: { color: "#103f2e", fontSize: 15, fontWeight: "800", marginTop: 3 },
  copy: { color: "#4f675a", fontSize: 11, lineHeight: 16, marginTop: 5 },
  primary: { height: 42, borderRadius: 22, backgroundColor: "#087143", alignItems: "center", justifyContent: "center", marginTop: 16 },
  primaryText: { color: "#fff", fontSize: 11, fontWeight: "800" },
  help: { height: 38, borderRadius: 20, borderWidth: 1, borderColor: "#94b8a0", backgroundColor: "#fffef8", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 7, marginTop: 8 },
  helpText: { color: "#315744", fontSize: 10, fontWeight: "700" },
  ask: { color: "#688175", fontSize: 9 },
});
