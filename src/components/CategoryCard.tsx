import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import { Category } from "../types";

const CategoryCard = ({ cat }: { cat: Category }) => {
  return (
    <TouchableOpacity style={tw`relative mr-2`}>
      <Image source={{ uri: cat.imgUrl }} style={tw`h-20 w-20 rounded`} />
      <Text style={tw`absolute bottom-1 left-1 text-white font-bold`}>
        {cat.title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
