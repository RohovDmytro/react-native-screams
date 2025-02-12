import { useRouter } from "expo-router";
import { Button, View } from "react-native";

export default function FormSheetToRoot() {
  const router = useRouter();

  return (
    <View style={{ paddingTop: 80 }}>
      <Button title="replace -> /" onPress={() => router.replace("/")} />

      <Button
        title="replace -> two"
        onPress={() => router.replace("/(tabs)/two")}
      />

      <Button title="push -> two" onPress={() => router.push("/(tabs)/two")} />

      <Button title="push -> /" onPress={() => router.push("/")} />
    </View>
  );
}
