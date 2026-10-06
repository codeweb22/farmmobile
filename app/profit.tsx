import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { AppTabs } from "../components/AppTabs";

const figures = [
  { label: "Total sales", value: "$340", icon: "cart-outline" },
  { label: "Total costs", value: "$220", icon: "receipt-outline" },
  { label: "Net profit", value: "$120", icon: "trending-up", positive: true },
];

export default function ProfitScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f7ed" />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Profit</Text>
        <View style={styles.segmentRow}><Text style={styles.segmentActive}>This season</Text><Text style={styles.segment}>All time</Text></View>
        <View style={styles.profitCard}>
          <View style={styles.profitHeading}><Ionicons name="trending-up" size={21} color="#0a7848" /><Text style={styles.profitLabel}>Estimated profit</Text></View>
          <Text style={styles.profitValue}>$120</Text>
        </View>
        <View style={styles.figureList}>
          {figures.map((item) => (
            <View key={item.label} style={[styles.figureRow, item.positive && styles.netRow]}>
              <Ionicons name={item.icon as any} size={15} color={item.positive ? "#147247" : "#4d7060"} />
              <Text style={[styles.figureLabel, item.positive && styles.netText]}>{item.label}</Text>
              <Text style={[styles.figureValue, item.positive && styles.netText]}>{item.value}</Text>
            </View>
          ))}
        </View>
        <Pressable onPress={() => router.push("/market")} style={styles.reportButton}><Text style={styles.reportText}>View detailed report</Text></Pressable>
        <View style={styles.encouragement}>
          <View style={styles.trophy}><Ionicons name="trophy" size={20} color="#dc8a22" /></View>
          <View style={styles.encouragementCopy}><Text style={styles.keepGoing}>Keep going!</Text><Text style={styles.encouragementText}>You’re on track to reach your goal.</Text></View>
        </View>
      </ScrollView>
      <AppTabs selected="Market" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#f8f7ed" },
  content: { flexGrow: 1, paddingHorizontal: 18, paddingTop: 17, paddingBottom: 18 },
  title: { color: "#103f2e", fontSize: 22, fontWeight: "800" },
  segmentRow: { flexDirection: "row", backgroundColor: "#e9eee4", borderRadius: 20, padding: 3, marginTop: 12 },
  segmentActive: { flex: 1, textAlign: "center", color: "#fff", backgroundColor: "#087143", borderRadius: 17, overflow: "hidden", paddingVertical: 7, fontSize: 10, fontWeight: "800" },
  segment: { flex: 1, textAlign: "center", color: "#587364", paddingVertical: 7, fontSize: 10, fontWeight: "700" },
  profitCard: { backgroundColor: "#edf3e8", borderRadius: 15, padding: 14, marginTop: 12 },
  profitHeading: { flexDirection: "row", alignItems: "center", gap: 8 },
  profitLabel: { color: "#476754", fontSize: 10, fontWeight: "700" },
  profitValue: { color: "#103f2e", fontSize: 25, fontWeight: "800", marginTop: 6 },
  figureList: { backgroundColor: "#fff", borderRadius: 14, borderWidth: 1, borderColor: "#e3eade", paddingHorizontal: 11, marginTop: 10 },
  figureRow: { minHeight: 40, flexDirection: "row", alignItems: "center", gap: 8, borderBottomWidth: 1, borderBottomColor: "#eff1ea" },
  netRow: { backgroundColor: "#edf6e9", marginHorizontal: -11, paddingHorizontal: 11, borderBottomWidth: 0, borderRadius: 8 },
  figureLabel: { flex: 1, color: "#4c6858", fontSize: 10, fontWeight: "600" },
  figureValue: { color: "#174632", fontSize: 10, fontWeight: "700" },
  netText: { color: "#0a6c43", fontWeight: "800" },
  reportButton: { height: 39, borderRadius: 20, borderWidth: 1, borderColor: "#78a68a", alignItems: "center", justifyContent: "center", marginTop: 10 },
  reportText: { color: "#176843", fontSize: 10, fontWeight: "800" },
  encouragement: { flexDirection: "row", alignItems: "center", backgroundColor: "#fff", borderRadius: 13, borderWidth: 1, borderColor: "#e6eadd", padding: 10, marginTop: 10 },
  trophy: { width: 38, height: 38, borderRadius: 12, backgroundColor: "#fff3d9", alignItems: "center", justifyContent: "center", marginRight: 9 },
  encouragementCopy: { flex: 1 },
  keepGoing: { color: "#174632", fontSize: 11, fontWeight: "800" },
  encouragementText: { color: "#6b7f72", fontSize: 9, marginTop: 3 },
});
