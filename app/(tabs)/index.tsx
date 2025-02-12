import { StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import { PAGES } from "@/constants/pages";
import { Link } from "expo-router";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      {PAGES.map((item) => (
        <Link key={item.id} href={("/" + item.id) as any} replace>
          <Text>{item.id}</Text>
        </Link>
      ))}
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
