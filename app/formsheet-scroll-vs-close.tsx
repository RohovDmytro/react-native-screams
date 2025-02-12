import { ScrollView, View } from "react-native";

export default function FormSheetSwipeToClose() {
  return (
    <View
      style={{
        backgroundColor: "red",
      }}
    >
      <ScrollView style={{ height: 200 }}>
        <View
          style={{ height: 100, backgroundColor: "blue", marginBottom: 10 }}
        />
        <View
          style={{ height: 100, backgroundColor: "blue", marginBottom: 10 }}
        />
        <View style={{ height: 100, backgroundColor: "blue" }} />
      </ScrollView>
    </View>
  );
}
