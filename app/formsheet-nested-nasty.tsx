import { ScrollView, View } from "react-native";
import Animated from "react-native-reanimated";

const ScrollViewReanimated = Animated.createAnimatedComponent(ScrollView);

export default function FormSheetReanimatedStealsToo() {
  return (
    <View
      style={{
        height: 600,
      }}
    >
      <View style={{ height: 50, backgroundColor: "black" }} />
      <ScrollView
        style={{ flex: 1, backgroundColor: "lightblue" }}
        contentContainerStyle={{ flexGrow: 1 }}
        nestedScrollEnabled
      >
        <View style={{ height: 50, backgroundColor: "yellow" }} />
        <ScrollView
          style={{ height: 100, backgroundColor: "lightgreen" }}
          contentContainerStyle={{
            height: 100,
          }}
          nestedScrollEnabled
        >
          <View style={{ height: 100, backgroundColor: "red" }} />
        </ScrollView>
        <View style={{ height: 300, backgroundColor: "yellow" }} />
      </ScrollView>
    </View>
  );
}
