import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { AppTabs } from "../components/AppTabs";

const sales = [
  { date: "May 18, 2025", quantity: "5 kg", amount: "$100" },
  { date: "May 12, 2025", quantity: "4 kg", amount: "$80" },
  { date: "May 5, 2025", quantity: "3 kg", amount: "$60" },
];

export default function MarketScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f7ed" />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Sales</Text>
        <View style={styles.segmentRow}><Text style={styles.segmentActive}>This season</Text><Text style={styles.segment}>All time</Text></View>
        <View style={styles.summary}>
          <View style={styles.moneyIcon}><Ionicons name="cash" size={22} color="#fff" /></View>
          <View style={styles.summaryText}><Text style={styles.label}>Total sold</Text><Text style={styles.total}>$340</Text><Text style={styles.caption}>1.2 kg  ·  3 sales</Text></View>
        </View>
        <View style={styles.sectionHeader}><Text style={styles.sectionTitle}>Recent sales</Text><Pressable onPress={() => router.push("/activity")}><Text style={styles.viewAll}>View all</Text></Pressable></View>
        <View style={styles.list}>
          {sales.map((sale) => (
            <View key={sale.date} style={styles.row}>
              <View style={styles.calendar}><Ionicons name="calendar-outline" size={14} color="#236947" /></View>
              <Text style={styles.date}>{sale.date}</Text>
              <Text style={styles.quantity}>{sale.quantity}</Text>
              <Text style={styles.amount}>{sale.amount}</Text>
            </View>
          ))}
        </View>
        <Pressable onPress={() => router.push("/activity")} style={styles.button}><Text style={styles.buttonText}>View all sales</Text></Pressable>
      </ScrollView>
      <AppTabs selected="Market" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#f8f7ed" },
  content: { flexGrow: 1, paddingHorizontal: 18, paddingTop: 17, paddingBottom: 17 },
  title: { color: "#103f2e", fontSize: 22, fontWeight: "800" },
  segmentRow: { flexDirection: "row", backgroundColor: "#e9eee4", borderRadius: 20, padding: 3, marginTop: 12 },
  segmentActive: { flex: 1, textAlign: "center", color: "#fff", backgroundColor: "#087143", borderRadius: 17, overflow: "hidden", paddingVertical: 7, fontSize: 10, fontWeight: "800" },
  segment: { flex: 1, textAlign: "center", color: "#587364", paddingVertical: 7, fontSize: 10, fontWeight: "700" },
  summary: { flexDirection: "row", alignItems: "center", backgroundColor: "#eef4e8", borderRadius: 15, padding: 13, marginTop: 12 },
  moneyIcon: { width: 46, height: 46, borderRadius: 23, backgroundColor: "#13854e", alignItems: "center", justifyContent: "center", marginRight: 12 },
  summaryText: { flex: 1 },
  label: { color: "#5e7768", fontSize: 10 },
  total: { color: "#123f2d", fontSize: 21, fontWeight: "800", marginTop: 2 },
  caption: { color: "#6e8074", fontSize: 9, marginTop: 2 },
  sectionHeader: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 17, marginBottom: 8 },
  sectionTitle: { color: "#164632", fontSize: 13, fontWeight: "800" },
  viewAll: { color: "#087143", fontSize: 10, fontWeight: "700" },
  list: { backgroundColor: "#fff", borderRadius: 14, borderWidth: 1, borderColor: "#e6eadd", paddingHorizontal: 10 },
  row: { minHeight: 48, flexDirection: "row", alignItems: "center", borderBottomWidth: 1, borderBottomColor: "#eef0e9", gap: 8 },
  calendar: { width: 24, height: 24, borderRadius: 7, backgroundColor: "#eaf2e5", alignItems: "center", justifyContent: "center" },
  date: { flex: 1, color: "#365846", fontSize: 9, fontWeight: "600" },
  quantity: { color: "#6d7f73", fontSize: 9, width: 32 },
  amount: { color: "#174632", fontSize: 10, fontWeight: "800", width: 32, textAlign: "right" },
  button: { height: 41, borderRadius: 21, borderWidth: 1, borderColor: "#78a68a", alignItems: "center", justifyContent: "center", marginTop: 13 },
  buttonText: { color: "#176843", fontSize: 10, fontWeight: "800" },
});
