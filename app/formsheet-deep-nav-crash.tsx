import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function FormSheetDeepNavCrash() {
  return (
    <View style={{ height: 400 }}>
      <Link
        href={"/fullscreenmodal-no-bb"}
        style={{
          height: 200,
          width: "100%",
          backgroundColor: "red",
        }}
      >
        <Text>/fullscreenmodal-no-bb</Text>
      </Link>
    </View>
  );
}
