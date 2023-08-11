import { View, Text, ScrollView } from "react-native";
import React from "react";
import tw from "twrnc";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestarauntCard from "./RestarauntCard";
import { FeaturedRow as frType } from "../types";
import { createFakeRestaraunt } from "../utils/generator";

// TODO: Replace all #00CCBB to contant
const FeaturedRow = ({ featuredRow }: { featuredRow: frType }) => {
  return (
    <View>
      <View style={tw`mt-4 flex-row items-center justify-between px-4`}>
        <Text style={tw`font-bold text-lg`}>{featuredRow.title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text style={tw`text-xs text-gray-500 px-4`}>
        {featuredRow.description}
      </Text>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        style={tw`pt-4`}
      >
        <RestarauntCard rest={createFakeRestaraunt()} />
        <RestarauntCard rest={createFakeRestaraunt()} />
        <RestarauntCard rest={createFakeRestaraunt()} />
        <RestarauntCard rest={createFakeRestaraunt()} />
        <RestarauntCard rest={createFakeRestaraunt()} />
        <RestarauntCard rest={createFakeRestaraunt()} />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
