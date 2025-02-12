import { StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import { Link } from "expo-router";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Link href={"/formsheet-playground"}>
        <Text>/formsheet-playground</Text>
      </Link>

      <Link href={"/formsheet-scroll-vs-close"}>
        <Text>/formsheet-scroll-vs-close</Text>
      </Link>

      <Link href={"/formsheet-fit-to-content-not"}>
        <Text>/formsheet-fit-to-content-not</Text>
      </Link>

      <Link href={"/formsheet-nav-back"}>
        <Text>/formsheet-003</Text>
      </Link>

      <Link href={"/formsheet-flex-1"}>
        <Text>/formsheet-flex-1</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
