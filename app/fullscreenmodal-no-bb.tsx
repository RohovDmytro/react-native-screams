import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Button, View } from "react-native";

export default function Layout() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // router.back();
    }, 1000);
  }, []);

  return (
    <View style={{}}>
      <Button title="Back" onPress={() => router.back()} />
    </View>
  );
}
