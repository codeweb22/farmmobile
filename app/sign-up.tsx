import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from "react-native";

export default function SignUpScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FAF9F0" />
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <Pressable onPress={() => router.back()} style={styles.back}>
          <Ionicons name="chevron-back" size={20} color="#174632" />
        </Pressable>

        <View style={styles.header}>
          <Text style={styles.title}>Create your account</Text>
          <Text style={styles.subtitle}>
            Join FarmPath and start your farming journey.
          </Text>
        </View>

        <View style={styles.form}>
          <View style={styles.inputRow}><Ionicons name="person-outline" size={16} color="#4f7964" /><TextInput
            placeholder="Full name"
            placeholderTextColor="#7a9183"
            style={styles.input}
          /></View>
          <View style={styles.inputRow}><Ionicons name="call-outline" size={16} color="#4f7964" /><TextInput
            placeholder="Phone number"
            placeholderTextColor="#7a9183"
            style={styles.input}
            keyboardType="phone-pad"
          /></View>
          <View style={styles.inputRow}><Ionicons name="mail-outline" size={16} color="#4f7964" /><TextInput
            placeholder="Email address"
            placeholderTextColor="#7a9183"
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
          /></View>
          <View style={styles.inputRow}><Ionicons name="lock-closed-outline" size={16} color="#4f7964" /><TextInput
            placeholder="Password"
            placeholderTextColor="#7a9183"
            style={styles.input}
            secureTextEntry
          /><Ionicons name="eye-outline" size={16} color="#799085" /></View>
        </View>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Register for FarmPath"
          style={({ pressed }) => [
            styles.primaryButton,
            pressed && styles.pressed,
          ]}
        >
          <Text style={styles.primaryLabel}>Sign Up</Text>
        </Pressable>

        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>or</Text>
          <View style={styles.dividerLine} />
        </View>

        <Pressable style={styles.socialButton}>
          <Text style={styles.socialIcon}>G</Text>
          <Text style={styles.socialLabel}>Continue with Google</Text>
        </Pressable>

        <Pressable style={styles.socialButton}>
          <Text style={styles.socialIcon}></Text>
          <Text style={styles.socialLabel}>Continue with Apple</Text>
        </Pressable>

        <View style={styles.footerRow}>
          <Text style={styles.footerText}>Already have an account?</Text>
          <Pressable onPress={() => router.push("/login")}>
            <Text style={styles.linkText}>Log in</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FAF9F0",
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 28,
  },
  back: { height: 36, justifyContent: "center", marginBottom: 9 },
  header: {
    marginBottom: 20,
  },
  title: {
    color: "#0a3a2e",
    fontSize: 21,
    fontWeight: "800",
    lineHeight: 24,
  },
  subtitle: {
    marginTop: 6,
    color: "#3b5d52",
    fontSize: 12,
    lineHeight: 18,
    maxWidth: 290,
  },
  form: {
    marginTop: 19,
    gap: 9,
  },
  inputRow: { height: 47, flexDirection: "row", alignItems: "center", gap: 9, borderRadius: 10, paddingHorizontal: 12, backgroundColor: "#FFFDF7", borderWidth: 1, borderColor: "#D7E2D9" },
  input: {
    flex: 1,
    paddingVertical: 0,
    color: "#0a3a2e",
    fontSize: 13,
  },
  primaryButton: {
    marginTop: 19,
    width: "100%",
    minHeight: 48,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00683f",
    shadowColor: "#104a31",
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  primaryLabel: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "700",
  },
  dividerContainer: {
    marginTop: 15,
    marginBottom: 4,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#d6ddd5",
  },
  dividerText: {
    color: "#5c7267",
    fontSize: 12,
    fontWeight: "600",
  },
  socialButton: {
    marginTop: 10,
    height: 43,
    borderRadius: 11,
    backgroundColor: "#FFFDF7",
    borderWidth: 1,
    borderColor: "#dfe7e2",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  socialIcon: {
    color: "#0d3a2e",
    fontSize: 17,
    fontWeight: "800",
  },
  socialLabel: {
    color: "#163e35",
    fontSize: 12,
    fontWeight: "600",
  },
  footerRow: {
    marginTop: 21,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },
  footerText: {
    color: "#59776a",
    fontSize: 12,
  },
  linkText: {
    color: "#0d6b48",
    fontWeight: "700",
    fontSize: 12,
  },
  pressed: {
    opacity: 0.86,
  },
});
