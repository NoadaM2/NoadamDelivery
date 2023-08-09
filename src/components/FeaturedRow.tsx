import { View, Text, ScrollView } from "react-native";
import React from "react";
import tw from "twrnc";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestarauntCard from "./RestarauntCard";
// TODO: Replace all #00CCBB to contant
const FeaturedRow = ({ title, description }) => {
  return (
    <View>
      <View style={tw`mt-4 flex-row items-center justify-between px-4`}>
        <Text style={tw`font-bold text-lg`}>{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text style={tw`text-xs text-gray-500 px-4`}>{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        style={tw`pt-4`}
      >
        <RestarauntCard
          id={1}
          imgUrl="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80"
          title="Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="Short Test Description"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
