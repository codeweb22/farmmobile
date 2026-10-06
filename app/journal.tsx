import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { AppTabs } from "../components/AppTabs";

const entries = [
  { date: "Sep 29", title: "Watering", note: "Completed the morning irrigation and checked soil moisture.", tag: "Field work" },
  { date: "Sep 27", title: "Weeding", note: "Cleared weeds between rows and noted what plant stress looked like.", tag: "Maintenance" },
  { date: "Sep 25", title: "Seedling care", note: "Applied balanced nutrients to young pepper plants after inspection.", tag: "Crop care" },
];

export default function JournalScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f7ed" />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Farm journal</Text>
          <Pressable style={styles.addButton}>
            <Ionicons name="add" size={18} color="#ffffff" />
          </Pressable>
        </View>

        <View style={styles.summaryRow}>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryNumber}>14</Text>
            <Text style={styles.summaryLabel}>Entries</Text>
          </View>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryNumber}>8</Text>
            <Text style={styles.summaryLabel}>Photos</Text>
          </View>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryNumber}>5</Text>
            <Text style={styles.summaryLabel}>Milestones</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent entries</Text>
          {entries.map((entry) => (
            <View key={entry.date + entry.title} style={styles.entryCard}>
              <View style={styles.entryHeader}>
                <Text style={styles.entryDate}>{entry.date}</Text>
                <Text style={styles.entryTag}>{entry.tag}</Text>
              </View>
              <Text style={styles.entryTitle}>{entry.title}</Text>
              <Text style={styles.entryNote}>{entry.note}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <AppTabs selected="Farm" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f8f7ed",
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 28,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  title: {
    color: "#0d3d2d",
    fontSize: 28,
    fontWeight: "800",
  },
  addButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#126d46",
    alignItems: "center",
    justifyContent: "center",
  },
  summaryRow: {
    flexDirection: "row",
    gap: 10,
  },
  summaryCard: {
    flex: 1,
    backgroundColor: "#edf9f0",
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: "#dfeedd",
  },
  summaryNumber: {
    color: "#0d3d2d",
    fontSize: 24,
    fontWeight: "800",
  },
  summaryLabel: {
    color: "#57766d",
    fontSize: 11,
    fontWeight: "700",
    marginTop: 6,
  },
  section: {
    marginTop: 22,
  },
  sectionTitle: {
    color: "#0d3d2d",
    fontSize: 16,
    fontWeight: "800",
    marginBottom: 10,
  },
  entryCard: {
    backgroundColor: "#ffffff",
    borderRadius: 18,
    padding: 14,
    borderWidth: 1,
    borderColor: "#e1e9e2",
    marginBottom: 12,
  },
  entryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  entryDate: {
    color: "#5a7068",
    fontSize: 12,
    fontWeight: "700",
  },
  entryTag: {
    backgroundColor: "#eaf5ea",
    color: "#164f3b",
    fontSize: 10,
    fontWeight: "800",
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  entryTitle: {
    color: "#0d3d2d",
    fontSize: 18,
    fontWeight: "800",
    marginTop: 10,
  },
  entryNote: {
    color: "#4a645d",
    fontSize: 13,
    lineHeight: 18,
    marginTop: 7,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: "#eef6ee",
    borderTopWidth: 1,
    borderTopColor: "#dfe9df",
  },
  navItem: {
    flex: 1,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 52,
  },
  navItemActive: {
    flex: 1,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 52,
    backgroundColor: "#1d6f47",
  },
  tabContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  tabLabel: {
    color: "#60756b",
    fontSize: 11,
    fontWeight: "700",
  },
  tabLabelActive: {
    color: "#ffffff",
    fontSize: 11,
    fontWeight: "700",
  },
});
