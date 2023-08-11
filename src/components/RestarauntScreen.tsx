import { View, Text } from "react-native";
import React from "react";
import { Restaraunt } from "../types";
import { useRoute } from "@react-navigation/native";

const RestarauntScreen = () => {
  const {
    params: { rest },
  } = useRoute();
  const title = rest.title;
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default RestarauntScreen;
