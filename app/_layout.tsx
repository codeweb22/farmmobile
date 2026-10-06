import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "./global.css";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack
        initialRouteName="index"
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="onboarding" />
        <Stack.Screen name="login" />
        <Stack.Screen name="sign-up" />
        <Stack.Screen name="dashboard" />
        <Stack.Screen name="crops" />
        <Stack.Screen name="learning" />
        <Stack.Screen name="activity" />
        <Stack.Screen name="farm" />
        <Stack.Screen name="lesson" />
        <Stack.Screen name="video" />
        <Stack.Screen name="practice" />
        <Stack.Screen name="tracking" />
        <Stack.Screen name="harvest" />
        <Stack.Screen name="market" />
        <Stack.Screen name="profit" />
        <Stack.Screen name="journal" />
        <Stack.Screen name="profile" />
        <Stack.Screen name="settings" />
        <Stack.Screen name="assistant" />
        <Stack.Screen name="guide" />
        <Stack.Screen name="voice" />
        <Stack.Screen name="recommend" />
        <Stack.Screen name="success" />
        <Stack.Screen name="empty" />
        <Stack.Screen name="offline" />
        <Stack.Screen name="states" />
        <Stack.Screen name="journey" />
      </Stack>
    </SafeAreaProvider>
  );
}
