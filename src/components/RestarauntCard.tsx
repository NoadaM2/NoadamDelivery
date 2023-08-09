import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";

const RestarauntCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity style={tw`bg-white mr-3 shadow`}>
      <Image source={{ uri: imgUrl }} style={tw`h-36 w-64 rounded-sm`} />
      <View style={tw`px-3 pb-4`}>
        <Text style={tw`font-bold text-lg pt-2`}>{title}</Text>
        <View style={tw`flex-row items-center`}>
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text style={tw`text-xs text-green-500 ml-1`}>{rating}</Text>
          <Text style={tw`text-xs text-gray-500 ml-1`}>{genre}</Text>
        </View>
        <View style={tw`flex-row items-center mt-1`}>
          <MapPinIcon color="gray" opacity={0.4} size={22} />
          <Text style={tw`text-xs text-gray-500 ml-1`}>{address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestarauntCard;
