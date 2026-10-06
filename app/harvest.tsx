import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { AppTabs } from "../components/AppTabs";

const bars = [25, 37, 43, 57, 76, 66];

export default function HarvestScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f7ed" />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Harvest</Text>
        <View style={styles.segmentRow}><Text style={styles.segmentActive}>This season</Text><Text style={styles.segment}>All time</Text></View>
        <View style={styles.summary}>
            <Image source={require("../assets/images/onboarding-harvest.jpg")} resizeMode="cover" style={styles.photo} />
          <View style={styles.summaryText}>
            <Text style={styles.kicker}>Total harvested</Text>
            <Text style={styles.total}>120 kg</Text>
            <Text style={styles.estimate}>Est. value: $240</Text>
          </View>
        </View>
        <View style={styles.chartCard}>
          <Text style={styles.sectionTitle}>Harvest (kg)</Text>
          <View style={styles.chart}>
            {bars.map((height, index) => (
              <View key={index} style={styles.barWrap}>
                <View style={[styles.bar, { height }]} />
                <Text style={styles.month}>{["Mar", "Apr", "May", "Jun", "Jul", "Aug"][index]}</Text>
              </View>
            ))}
          </View>
        </View>
        <View style={styles.recordsHeader}><Text style={styles.sectionTitle}>Harvest records</Text><Pressable onPress={() => router.push("/activity")}><Text style={styles.viewAll}>View all</Text></Pressable></View>
        <Pressable style={styles.record} onPress={() => router.push("/market")}>
          <View><Text style={styles.recordDate}>May 20, 2025</Text><Text style={styles.recordAmount}>20 kg</Text></View>
          <Ionicons name="chevron-forward" size={17} color="#587566" />
        </Pressable>
      </ScrollView>
      <AppTabs selected="Farm" />
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
  summary: { flexDirection: "row", alignItems: "center", backgroundColor: "#eef4e8", borderRadius: 15, padding: 10, marginTop: 12 },
  photo: { width: 87, height: 79, borderRadius: 11, backgroundColor: "#dae7d4" },
  summaryText: { marginLeft: 11, flex: 1 },
  kicker: { color: "#587364", fontSize: 10 },
  total: { color: "#103f2e", fontSize: 19, fontWeight: "800", marginTop: 3 },
  estimate: { color: "#6e8074", fontSize: 9, marginTop: 3 },
  chartCard: { backgroundColor: "#fff", borderRadius: 15, borderWidth: 1, borderColor: "#e6eadd", padding: 12, marginTop: 13 },
  sectionTitle: { color: "#164632", fontSize: 12, fontWeight: "800" },
  chart: { height: 112, flexDirection: "row", alignItems: "flex-end", justifyContent: "space-between", gap: 7, paddingTop: 8 },
  barWrap: { flex: 1, height: "100%", justifyContent: "flex-end", alignItems: "center", gap: 4 },
  bar: { width: "78%", borderTopLeftRadius: 4, borderTopRightRadius: 4, backgroundColor: "#2c9847" },
  month: { color: "#718177", fontSize: 7 },
  recordsHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 15, marginBottom: 7 },
  viewAll: { color: "#087143", fontSize: 10, fontWeight: "700" },
  record: { backgroundColor: "#fff", borderRadius: 12, borderWidth: 1, borderColor: "#e6eadd", padding: 11, flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  recordDate: { color: "#456251", fontSize: 10 },
  recordAmount: { color: "#164632", fontSize: 11, fontWeight: "800", marginTop: 4 },
});
