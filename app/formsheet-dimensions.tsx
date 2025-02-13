import { Link } from "expo-router";
import { Text, useWindowDimensions, View } from "react-native";

export default function FormSheetDimensions() {
  alert("Nothing to see here. But there should be...");
  const dimensions = useWindowDimensions();

  return (
    <View style={{ height: dimensions.height, backgroundColor: "pink" }}>
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
