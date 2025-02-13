import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function FormExtraPadding() {
  const insets = useSafeAreaInsets();

  return (
    <View>
      <View style={{ height: 400, backgroundColor: "pink" }} />
      <View style={{ height: insets.bottom, backgroundColor: "lightgreen" }} />
    </View>
  );
}
