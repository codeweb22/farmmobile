import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";

const tips = [
  "Identify the cause",
  "Add the right fertilizer",
  "Improve drainage",
  "Monitor for 1–2 weeks",
];

export default function VideoGuideScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f7ed" />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Pressable onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={20} color="#174632" />
          </Pressable>
          <Text style={styles.headerTitle}>AI Farmer</Text>
          <View style={styles.spacer} />
        </View>
        <Text style={styles.title}>Fixing Yellow Leaves in Pepper Plants</Text>
        <View style={styles.player}>
          <Image
            source={require("../assets/images/onboarding-peppers.jpg")}
            resizeMode="cover"
            style={styles.photo}
          />
          <View style={styles.play}>
            <Ionicons name="play" size={23} color="#fff" />
          </View>
        </View>
        <Text style={styles.section}>What to do</Text>
        <View style={styles.list}>
          {tips.map((tip, index) => (
            <View key={tip} style={styles.row}>
              <View style={styles.number}>
                <Text style={styles.numberText}>{index + 1}</Text>
              </View>
              <Text style={styles.tip}>{tip}</Text>
            </View>
          ))}
        </View>
        <Pressable style={styles.primary} onPress={() => router.push("/video")}>
          <Text style={styles.primaryText}>Show video</Text>
        </Pressable>
        <Pressable style={styles.secondary} onPress={() => router.push("/practice")}>
          <Text style={styles.secondaryText}>Mark as learned</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#f8f7ed" },
  content: {
    flexGrow: 1,
    paddingHorizontal: 18,
    paddingTop: 8,
    paddingBottom: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 11,
  },
  headerTitle: { color: "#164632", fontSize: 14, fontWeight: "800" },
  spacer: { flex: 1 },
  title: {
    color: "#103f2e",
    fontSize: 16,
    fontWeight: "800",
    marginBottom: 10,
  },
  player: {
    height: 196,
    borderRadius: 14,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#234b31",
  },
  photo: {
    ...StyleSheet.absoluteFill,
    width: "100%",
    height: "100%",
    opacity: 0.88,
  },
  play: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "rgba(0,0,0,0.55)",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 3,
  },
  section: {
    color: "#164632",
    fontSize: 12,
    fontWeight: "800",
    marginTop: 14,
    marginBottom: 8,
  },
  list: { gap: 8 },
  row: { flexDirection: "row", alignItems: "center", gap: 8 },
  number: {
    width: 21,
    height: 21,
    borderRadius: 11,
    backgroundColor: "#087143",
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: { color: "#fff", fontSize: 9, fontWeight: "800" },
  tip: { color: "#365846", fontSize: 11, fontWeight: "600" },
  primary: {
    height: 42,
    borderRadius: 22,
    backgroundColor: "#087143",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  primaryText: { color: "#fff", fontSize: 11, fontWeight: "800" },
  secondary: { height: 40, borderRadius: 22, borderWidth: 1, borderColor: "#7cac8c", alignItems: "center", justifyContent: "center", marginTop: 7 },
  secondaryText: { color: "#176843", fontSize: 11, fontWeight: "700" },
});
