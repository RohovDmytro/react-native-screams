import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/components/useColorScheme";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: "modal" }} />

          {/**
           * hello, bugs
           */}
          <Stack.Screen
            name={"formsheet-scroll-vs-close"}
            options={{
              presentation: "formSheet",
              headerShown: false,
              gestureDirection: "vertical",
              animation: "slide_from_bottom",
              sheetAllowedDetents: "fitToContents",
            }}
          />

          <Stack.Screen
            name={"formsheet-fit-to-content-not"}
            options={{
              presentation: "formSheet",
              gestureDirection: "vertical",
              animation: "slide_from_bottom",
              sheetAllowedDetents: "fitToContents",
            }}
          />

          <Stack.Screen
            name={"formsheet-nav-back"}
            options={{
              presentation: "formSheet",
              headerShown: false,
              gestureDirection: "vertical",
              animation: "slide_from_bottom",
              sheetAllowedDetents: "fitToContents",
            }}
          />

          <Stack.Screen
            name={"formsheet-playground"}
            options={{
              presentation: "formSheet",
              headerShown: false,
              gestureDirection: "vertical",
              animation: "slide_from_bottom",
              sheetAllowedDetents: "fitToContents",
            }}
          />

          <Stack.Screen
            name={"formsheet-flex-1"}
            options={{
              presentation: "formSheet",
              headerShown: false,
              gestureDirection: "vertical",
              animation: "slide_from_bottom",
              sheetAllowedDetents: "fitToContents",
              contentStyle: {
                flex: 1,
              },
            }}
          />

          <Stack.Screen
            name={"formsheet-deep-nav-crash"}
            options={{
              presentation: "formSheet",
              headerShown: false,
              gestureDirection: "vertical",
              animation: "slide_from_bottom",
              sheetAllowedDetents: "fitToContents",
              contentStyle: {},
            }}
          />

          <Stack.Screen
            name={"fullscreenmodal-no-bb"}
            options={{
              presentation: "fullScreenModal",
              headerShown: true,
              headerBackVisible: true,
              headerBackTitle: "Back",
              animation: "slide_from_bottom",
            }}
          />

          <Stack.Screen
            name={"formsheet-nested-nasty"}
            options={{
              presentation: "formSheet",
              animation: "slide_from_bottom",
              sheetAllowedDetents: "fitToContents",
            }}
          />

          <Stack.Screen
            name={"formsheet-rngh-steals"}
            options={{
              presentation: "formSheet",
              headerShown: true,
              animation: "slide_from_bottom",
              sheetAllowedDetents: "fitToContents",
            }}
          />

          <Stack.Screen
            name={"formsheet-to-root"}
            options={{
              presentation: "formSheet",
              headerShown: true,
              animation: "slide_from_bottom",
            }}
          />

          <Stack.Screen
            name={"formsheet-dimensions"}
            options={{
              presentation: "formSheet",
              headerShown: false,
              gestureDirection: "vertical",
              animation: "slide_from_bottom",
              sheetAllowedDetents: "fitToContents",
            }}
          />

          <Stack.Screen
            name={"formsheet-extra-padding"}
            options={{
              presentation: "formSheet",
              headerShown: false,
              gestureDirection: "vertical",
              animation: "slide_from_bottom",
              sheetAllowedDetents: "fitToContents",
            }}
          />
        </Stack>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
