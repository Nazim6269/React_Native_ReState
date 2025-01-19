import icons from "@/constants/icons";
import images from "@/constants/images";
import { login } from "@/lib/appwrite";
import { useGlobalContext } from "@/lib/global-provider";
import React from "react";
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
  const { refetch } = useGlobalContext();
  const handleLogin = async () => {
    try {
      const result = await login();
      if (result) {
        refetch();
      }
    } catch (error) {
      Alert.alert("Failed to login");
    }
  };
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.onboarding}
          className="w-full h-4/6"
          resizeMode="contain"
        />

        <View className="px-10">
          <Text className="text-base text-center font-rubik text-black-200 uppercase">
            Welcome to ReState
          </Text>
          <Text className="text-3xl font-rubik-bold text-black-300 text-center mt-2">
            Let's get you closer to{"\n "}
            <Text className="text-primary-300">Your ideal home</Text>
          </Text>
          <Text className="mt-12 text-lg text-center font-rubik text-black-200">
            Login to ReState with google{" "}
          </Text>

          <TouchableOpacity
            onPress={handleLogin}
            className="bg-white shadow-lg shadow-zinc-300 rounded-full w-full mt-5 py-4"
          >
            <View className="flex justify-center items-center flex-row">
              <Image
                source={icons.google}
                className="w-5 h-5"
                resizeMode="contain"
              />
              <Text className="ml-2 text-lg font-rubik-medium text-black-300">
                Continue with google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
