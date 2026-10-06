import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { FarmPathBrand } from "../components/FarmPathBrand";

const states = [
  { title: "Loading", caption: "Loading your journey...", icon: "sync", color: "#16804c" },
  { title: "Success", caption: "Saved successfully!", icon: "checkmark-circle", color: "#087143" },
  { title: "Error", caption: "Something went wrong. Please try again.", icon: "warning", color: "#f04b37" },
  { title: "No Results", caption: "Try a different search or check back later.", icon: "search", color: "#769084" },
];

export default function StatesScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f7ed" />
      <ScrollView contentContainerStyle={styles.content}>
        {states.map((state) => (
          <View key={state.title} style={styles.card}>
            <Text style={styles.heading}>{state.title}</Text>
            <View style={styles.stateContent}>
              <Ionicons name={state.icon as any} size={25} color={state.color} />
              <Text style={styles.caption}>{state.caption}</Text>
            </View>
          </View>
        ))}
        <View style={styles.brand}><FarmPathBrand stacked markSize={34} textSize={19} /></View>
        <Text style={styles.tagline}>Real Farming. Real Progress.</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#f8f7ed" },
  content: { flexGrow: 1, padding: 18, justifyContent: "center" },
  card: { minHeight: 105, borderWidth: 1, borderColor: "#9cb9a5", borderRadius: 14, backgroundColor: "#fffef8", padding: 12, marginBottom: 10 },
  heading: { color: "#163f30", fontSize: 11, fontWeight: "800" },
  stateContent: { flex: 1, alignItems: "center", justifyContent: "center", gap: 8 },
  caption: { color: "#66776c", fontSize: 10, textAlign: "center" },
  brand: { alignItems: "center", marginTop: 9 },
  tagline: { color: "#507260", fontSize: 8, textAlign: "center", marginTop: 3 },
});
