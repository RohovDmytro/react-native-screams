import { StyleSheet } from "react-native";

import { Text } from "@/components/Themed";
import { PAGES } from "@/constants/pages";
import { Link } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";

export default function TabOneScreen() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      showsHorizontalScrollIndicator
      showsVerticalScrollIndicator
      contentContainerStyle={styles.contentContainerStyle}
    >
      {PAGES.map((item) => (
        <Link
          key={item.id}
          href={("/" + item.id) as any}
          replace={"replace" in item && !!item.replace}
          style={{
            height: 32,
            backgroundColor: "lightgrey",
          }}
        >
          <Text>{item.id}</Text>
        </Link>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    padding: 16,
    flexGrow: 1,
    gap: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
