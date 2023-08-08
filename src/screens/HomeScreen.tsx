import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, SafeAreaView, Text, View } from "react-native";
import tw from "twrnc";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView>
      <View style={tw`flex-row pb-3 items-center mx-4 space-x-2`}>
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          style={tw`h-7 w-7 bg-gray-300 p-4 rounded-full`}
        />
        <View style={tw`ml-2`}>
          <Text style={tw`font-bold text-gray-400 text-xs`}>
            Привезем сейчас!
          </Text>
          <Text style={tw`font-bold text-xl`}>NoadaM Delivery</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
