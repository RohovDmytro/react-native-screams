import { useEffect, useState } from "react";
import { View } from "react-native";

export default function FormSheet002() {
  const [height, setHeight] = useState(100);
  const [color, setColor] = useState("red");

  useEffect(() => {
    setTimeout(() => {
      setHeight(500);
      setColor("blue");
    }, 1000);
  });

  return (
    <View
      style={{
        height: height,
        backgroundColor: color,
      }}
    />
  );
}
