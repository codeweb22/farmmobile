import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, StatusBar, StyleSheet, Text, View } from "react-native";
import { AppTabs } from "../components/AppTabs";

export default function OfflineScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f7ed" />
      <View style={styles.content}>
        <View style={styles.wifiIcon}><Ionicons name="wifi" size={43} color="#8a9187" /></View>
        <Text style={styles.title}>You’re offline</Text>
        <Text style={styles.copy}>No internet connection.{"\n"}Some features may be limited.</Text>
        <Pressable onPress={() => router.replace("/dashboard")} style={styles.primary}>
          <Text style={styles.primaryText}>Try again</Text>
        </Pressable>
        <Pressable onPress={() => router.replace("/dashboard")} style={styles.secondary}>
          <Text style={styles.secondaryText}>Continue offline</Text>
        </Pressable>
      </View>
      <AppTabs selected="Home" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#f8f7ed" },
  content: { flex: 1, paddingHorizontal: 26, alignItems: "center", justifyContent: "center" },
  wifiIcon: { width: 80, height: 80, alignItems: "center", justifyContent: "center", marginBottom: 12 },
  title: { color: "#123e2d", fontSize: 19, fontWeight: "800", marginTop: 4 },
  copy: { color: "#6b7a70", fontSize: 12, lineHeight: 18, textAlign: "center", marginTop: 7 },
  primary: { width: "100%", height: 44, borderRadius: 23, backgroundColor: "#087143", alignItems: "center", justifyContent: "center", marginTop: 20 },
  primaryText: { color: "#fff", fontSize: 12, fontWeight: "800" },
  secondary: { width: "100%", height: 42, borderRadius: 22, borderWidth: 1, borderColor: "#80ae91", alignItems: "center", justifyContent: "center", marginTop: 8 },
  secondaryText: { color: "#206a45", fontSize: 11, fontWeight: "700" },
});
