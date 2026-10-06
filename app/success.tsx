import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, Pressable, StatusBar, StyleSheet, Text, View } from "react-native";

export default function SuccessScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f7ed" />
      <View style={styles.content}>
        <View style={styles.confetti}>
          <View style={[styles.confettiDot, styles.dotOne]} /><View style={[styles.confettiDot, styles.dotTwo]} /><View style={[styles.confettiDot, styles.dotThree]} /><View style={[styles.confettiDot, styles.dotFour]} />
          <View style={styles.checkCircle}><Ionicons name="checkmark" size={37} color="#fff" /></View>
        </View>
        <Text style={styles.title}>Great job!</Text>
        <Text style={styles.subtitle}>You completed this activity.</Text>
        <View style={styles.completedCard}>
          <Image source={require("../assets/images/onboarding-farm.png")} resizeMode="cover" style={styles.photo} />
          <View style={styles.lessonMeta}><Text style={styles.lessonTitle}>Preparing Nursery Bed</Text><Text style={styles.lessonSub}>Lesson 3 of 8</Text></View>
        </View>
        <Pressable onPress={() => router.push("/lesson")} style={styles.primary}><Text style={styles.primaryText}>Next lesson</Text></Pressable>
        <Pressable onPress={() => router.replace("/dashboard")} style={styles.secondary}><Text style={styles.secondaryText}>Back to home</Text></Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#f8f7ed" },
  content: { flex: 1, paddingHorizontal: 20, alignItems: "center", justifyContent: "center" },
  confetti: { width: 110, height: 95, alignItems: "center", justifyContent: "center" },
  checkCircle: { width: 68, height: 68, borderRadius: 34, backgroundColor: "#087143", alignItems: "center", justifyContent: "center" },
  confettiDot: { position: "absolute", width: 5, height: 9, borderRadius: 3, backgroundColor: "#f2b632" },
  dotOne: { top: 8, left: 15, transform: [{ rotate: "-28deg" }] },
  dotTwo: { top: 12, right: 12, backgroundColor: "#53a45b", transform: [{ rotate: "28deg" }] },
  dotThree: { bottom: 5, left: 20, backgroundColor: "#64a55c" },
  dotFour: { bottom: 9, right: 18, backgroundColor: "#f2b632", transform: [{ rotate: "28deg" }] },
  title: { color: "#103f2e", fontSize: 21, fontWeight: "800", marginTop: 3 },
  subtitle: { color: "#4c6958", fontSize: 10, marginTop: 4 },
  completedCard: { width: "100%", minHeight: 65, flexDirection: "row", alignItems: "center", backgroundColor: "#fff", borderWidth: 1, borderColor: "#e4eadd", borderRadius: 13, padding: 7, marginTop: 18 },
  photo: { width: 52, height: 48, borderRadius: 9 },
  lessonMeta: { marginLeft: 9 },
  lessonTitle: { color: "#174632", fontSize: 10, fontWeight: "800" },
  lessonSub: { color: "#758278", fontSize: 9, marginTop: 4 },
  primary: { width: "100%", height: 42, borderRadius: 22, backgroundColor: "#087143", alignItems: "center", justifyContent: "center", marginTop: 17 },
  primaryText: { color: "#fff", fontSize: 11, fontWeight: "800" },
  secondary: { width: "100%", height: 40, borderRadius: 22, borderWidth: 1, borderColor: "#81ae91", alignItems: "center", justifyContent: "center", marginTop: 8 },
  secondaryText: { color: "#176843", fontSize: 11, fontWeight: "700" },
});
