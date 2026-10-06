import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { AppTabs } from "../components/AppTabs";

const rows = [
  { title: "Notifications", icon: "notifications-outline", toggle: true },
  { title: "Language", icon: "globe-outline", value: "English" },
  { title: "Units", icon: "speedometer-outline", value: "Metric (kg, ha)" },
  { title: "Data & sync", icon: "cloud-outline" },
  { title: "About FarmPath", icon: "information-circle-outline" },
  { title: "Privacy policy", icon: "lock-closed-outline" },
  { title: "Terms of service", icon: "document-text-outline" },
];

export default function SettingsScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f7ed" />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Pressable onPress={() => router.back()} style={styles.back}><Ionicons name="chevron-back" size={19} color="#174632" /></Pressable>
          <Text style={styles.title}>Settings</Text>
        </View>
        <View style={styles.list}>
          {rows.map((row) => (
            <Pressable key={row.title} style={styles.row}>
              <Ionicons name={row.icon as any} size={16} color="#2f6c4d" />
              <Text style={styles.rowTitle}>{row.title}</Text>
              {row.toggle ? <View style={styles.switch}><View style={styles.knob} /></View> : <><Text style={styles.value}>{row.value}</Text><Ionicons name="chevron-forward" size={14} color="#758379" /></>}
            </Pressable>
          ))}
        </View>
      </ScrollView>
      <AppTabs selected="More" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#f8f7ed" },
  content: { flexGrow: 1, paddingHorizontal: 18, paddingTop: 13, paddingBottom: 18 },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 12 },
  back: { width: 31, height: 32, justifyContent: "center" },
  title: { color: "#103f2e", fontSize: 20, fontWeight: "800", marginLeft: 3 },
  list: { backgroundColor: "#fff", borderRadius: 15, borderWidth: 1, borderColor: "#e5eadd", paddingHorizontal: 11 },
  row: { minHeight: 47, flexDirection: "row", alignItems: "center", borderBottomWidth: 1, borderBottomColor: "#eef0e9", gap: 9 },
  rowTitle: { flex: 1, color: "#365846", fontSize: 10, fontWeight: "600" },
  value: { color: "#748177", fontSize: 9, marginRight: 5 },
  switch: { width: 32, height: 19, borderRadius: 10, backgroundColor: "#087143", justifyContent: "center", paddingHorizontal: 2, alignItems: "flex-end" },
  knob: { width: 15, height: 15, borderRadius: 8, backgroundColor: "#fff" },
});
