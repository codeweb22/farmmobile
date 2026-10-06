import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";

const needed = ["Clean land", "Compost or well-rotted manure", "Watering can or hose", "Shade (optional)"];

export default function LessonScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f7ed" />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Pressable onPress={() => router.back()} style={styles.back}>
            <Ionicons name="chevron-back" size={20} color="#164632" />
          </Pressable>
          <Text style={styles.lessonNo}>Lesson 3 of 8</Text>
          <View style={styles.spacer} />
        </View>
        <Text style={styles.title}>Preparing Nursery Bed</Text>
        <Text style={styles.intro}>A healthy nursery gives your seedlings the best start.</Text>
        <Image source={require("../assets/images/onboarding-seedlings.jpg")} resizeMode="cover" style={styles.photo} />
        <Text style={styles.sectionTitle}>What you need</Text>
        <View style={styles.checkList}>
          {needed.map((item) => (
            <View key={item} style={styles.checkRow}>
              <Ionicons name="checkmark" size={16} color="#087143" />
              <Text style={styles.checkText}>{item}</Text>
            </View>
          ))}
        </View>
        <Pressable onPress={() => router.push("/video")} style={styles.primary}>
          <Ionicons name="play" size={14} color="#fff" />
          <Text style={styles.primaryText}>Watch the demonstration</Text>
        </Pressable>
        <Pressable onPress={() => router.push("/practice")} style={styles.secondary}>
          <Text style={styles.secondaryText}>Mark as learned</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#f8f7ed" },
  content: { flexGrow: 1, paddingHorizontal: 19, paddingTop: 10, paddingBottom: 24 },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 9 },
  back: { width: 32, height: 32, justifyContent: "center" },
  lessonNo: { color: "#758278", fontSize: 10, marginLeft: 3 },
  spacer: { flex: 1 },
  title: { color: "#073d2e", fontSize: 20, lineHeight: 25, fontWeight: "800" },
  intro: { color: "#345c4b", fontSize: 11, lineHeight: 16, marginTop: 4 },
  photo: { width: "100%", height: 150, borderRadius: 14, marginTop: 12, backgroundColor: "#d9e8d1" },
  sectionTitle: { color: "#103f2e", fontSize: 13, fontWeight: "800", marginTop: 13, marginBottom: 5 },
  checkList: { paddingHorizontal: 1 },
  checkRow: { minHeight: 25, flexDirection: "row", alignItems: "center", gap: 7 },
  checkText: { color: "#365746", fontSize: 11 },
  primary: { height: 42, borderRadius: 22, flexDirection: "row", gap: 7, alignItems: "center", justifyContent: "center", backgroundColor: "#087143", marginTop: 12 },
  primaryText: { color: "#fff", fontSize: 11, fontWeight: "800" },
  secondary: { height: 40, borderRadius: 21, borderWidth: 1, borderColor: "#7cac8c", alignItems: "center", justifyContent: "center", marginTop: 7 },
  secondaryText: { color: "#176843", fontSize: 11, fontWeight: "700" },
});
