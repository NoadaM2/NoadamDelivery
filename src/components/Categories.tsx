import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";
import { createFakeCategory } from "../utils/generator";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 0 }}
    >
      <CategoryCard cat={createFakeCategory()} />
      <CategoryCard cat={createFakeCategory()} />
      <CategoryCard cat={createFakeCategory()} />
      <CategoryCard cat={createFakeCategory()} />
      <CategoryCard cat={createFakeCategory()} />
    </ScrollView>
  );
};

export default Categories;
