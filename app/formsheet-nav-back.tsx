import { Text, View } from "react-native";

export default function FormSheet003() {
  return (
    <View style={{ padding: 24, gap: 8 }}>
      <Text>
        Simply put your finger _above_ the formSheet container and make a
        confident swipe back right after.
      </Text>

      <Text>
        The bug that will happen is that both the formSheet will get closed (due
        to a touch gesture onto the backdrop) and a navigation back (due to
        Androids nav system).
      </Text>
    </View>
  );
}
