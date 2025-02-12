import { useRouter } from "expo-router";
import { Button, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function FormSheetRnghSteals() {
  const router = useRouter();

  return (
    <ScrollView
      style={{ height: "100%" }}
      contentContainerStyle={{ flexGrow: 1, paddingTop: 80 }}
    >
      <Button title="back" onPress={router.back} />
      <View
        style={{ height: 2000, width: "100%", backgroundColor: "lightgreen" }}
      />
    </ScrollView>
  );
}
