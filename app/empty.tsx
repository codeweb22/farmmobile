import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Pressable, StatusBar, StyleSheet, Text, View } from "react-native";
import { AppTabs } from "../components/AppTabs";

export default function EmptyScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f7ed" />
      <View style={styles.content}>
        <View style={styles.plant}>
          <View style={styles.leafLeft} /><View style={styles.leafRight} /><View style={styles.stem} /><View style={styles.soil} />
        </View>
        <Text style={styles.title}>No farm data yet</Text>
        <Text style={styles.subtitle}>Start tracking your farm to see your progress, activities and harvests.</Text>
        <Pressable accessibilityRole="button" onPress={() => router.push("/tracking")} style={styles.primary}>
          <Text style={styles.primaryText}>Add your farm</Text>
        </Pressable>
      </View>
      <AppTabs selected="Farm" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#f8f7ed" },
  content: { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 25 },
  plant: { width: 104, height: 105, alignItems: "center", justifyContent: "center", marginBottom: 10 },
  stem: { position: "absolute", width: 4, height: 35, bottom: 26, backgroundColor: "#39804e", borderRadius: 3 },
  leafLeft: { position: "absolute", width: 28, height: 16, borderTopLeftRadius: 22, borderBottomRightRadius: 22, backgroundColor: "#25834b", top: 37, left: 29, transform: [{ rotate: "-30deg" }] },
  leafRight: { position: "absolute", width: 29, height: 17, borderTopRightRadius: 22, borderBottomLeftRadius: 22, backgroundColor: "#5c9d4e", top: 28, right: 25, transform: [{ rotate: "25deg" }] },
  soil: { position: "absolute", bottom: 15, width: 76, height: 14, borderTopLeftRadius: 40, borderTopRightRadius: 40, backgroundColor: "#d8c9a0" },
  title: { color: "#103f2e", fontSize: 17, fontWeight: "800", marginTop: 4 },
  subtitle: { color: "#536d5d", fontSize: 11, lineHeight: 16, textAlign: "center", marginTop: 6, maxWidth: 260 },
  primary: { width: "100%", height: 42, borderRadius: 22, backgroundColor: "#087143", alignItems: "center", justifyContent: "center", marginTop: 17 },
  primaryText: { color: "#fff", fontSize: 11, fontWeight: "800" },
});
