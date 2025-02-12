import { useEffect, useState } from "react";
import { View } from "react-native";

export default function FormSheetFitToContentNot() {
  const [height, setHeight] = useState(100);
  useEffect(() => {
    setTimeout(() => {
      setHeight(500);
    }, 800);
  });

  return (
    <View
      style={{
        height: height,
        backgroundColor: "lightblue",
      }}
    />
  );
}
