import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";
import { Restaraunt } from "../types";
import { useNavigation } from "@react-navigation/native";

const RestarauntCard = ({ rest }: { rest: Restaraunt }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Restaraunt", { rest });
      }}
      style={tw`bg-white mr-3 shadow`}
    >
      <Image source={{ uri: rest.imgUrl }} style={tw`h-36 w-64 rounded-sm`} />
      <View style={tw`px-3 pb-4`}>
        <Text style={tw`font-bold text-lg pt-2`}>{rest.title}</Text>
        <View style={tw`flex-row items-center`}>
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text style={tw`text-xs text-green-500 ml-1`}>{rest.rating}</Text>
          <Text style={tw`text-xs text-gray-500 ml-1`}>{rest.genre}</Text>
        </View>
        <View style={tw`flex-row items-center mt-1`}>
          <MapPinIcon color="gray" opacity={0.4} size={22} />
          <Text style={tw`text-xs text-gray-500 ml-1`}>{rest.address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestarauntCard;
