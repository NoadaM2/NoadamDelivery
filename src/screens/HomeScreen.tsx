import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import {
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";

import tw from "twrnc";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import { fakerRU } from "@faker-js/faker";
import { createFakeFeatureRow } from "../utils/generator";

const address = fakerRU.location.streetAddress();

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView>
      <View style={tw`pb-2`}>
        {/* Header */}
        <View style={tw`flex-row pb-3 items-center mx-4`}>
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            style={tw`h-7 w-7 bg-gray-300 p-4 rounded-full`}
          />
          <View style={tw`flex-1 ml-2`}>
            <Text style={tw`font-bold text-gray-400 text-xs`}>
              Привезем сейчас!
            </Text>
            <View style={tw`flex-row items-center`}>
              <Text style={tw`font-bold text-xl`}>{address}</Text>
              <ChevronDownIcon size={20} color="#00CCBB" style={tw`ml-1`} />
            </View>
          </View>
          <UserIcon size={35} color="#00CCBB" />
        </View>
        {/* Search */}
        <View style={tw`flex-row items-center px-4`}>
          <View style={tw`flex-row flex-1 rounded bg-gray-200 p-3`}>
            <MagnifyingGlassIcon color="gray" size={20} />
            <TextInput
              style={tw`ml-1`}
              placeholder="Кафе, рестораны, блюда"
              keyboardType="default"
            />
          </View>
          <AdjustmentsVerticalIcon style={tw`mx-1`} size={24} color="#00CCBB" />
        </View>
      </View>

      {/* Body */}
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Categories */}
        <Categories />
        {/* Featured Rows */}
        <FeaturedRow featuredRow={createFakeFeatureRow()} />
        <FeaturedRow featuredRow={createFakeFeatureRow()} />
        <FeaturedRow featuredRow={createFakeFeatureRow()} />
      </ScrollView>
    </SafeAreaView>
  );
};
export default HomeScreen;
