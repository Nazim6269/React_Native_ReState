import { settings } from "@/constants/data";
import icons from "@/constants/icons";
import images from "@/constants/images";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface SettingItemsProps {
  icon: any;
  title: string;
  onPress?: () => void;
  textStyle?: any;
  showArrow?: boolean;
}

const SettingItems = ({
  icon,
  title,
  onPress,
  textStyle,
  showArrow = true,
}: SettingItemsProps) => (
  <TouchableOpacity className="flex flex-row justify-between items-center py-3">
    <View className="flex flex-row items-center gap-3">
      <Image source={icon} className="size-6" />
      <Text className={`font-rubik-medium text-lg text-black-300 ${textStyle}`}>
        {title}
      </Text>
    </View>
    {showArrow && <Image source={icons.rightArrow} className="size-5" />}
  </TouchableOpacity>
);

const Profile = () => {
  const handleLogOut = async () => {};
  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32 px-7"
      >
        <View className="flex flex-row items-center justify-between mt-3">
          <Text className="font-rubik-bold text-xl"> Profile</Text>
          <Image source={icons.bell} className="size-5" />
        </View>

        <View className="flex flex-row justify-center items-center mt-5">
          <View className="flex flex-col items-center mt-5">
            <Image
              source={images.avatar}
              className="size-44 relative rounded-full"
            />
            <TouchableOpacity>
              <Image source={icons.edit} className="size-9" />
            </TouchableOpacity>
            <Text className="text-2xl font-rubik-bold mt-2">Nazim | Dev</Text>
          </View>
        </View>

        <View className="mt-10 flex flex-col">
          <SettingItems icon={icons.calendar} title="My Bookings" />
          <SettingItems icon={icons.wallet} title="Payment" />
        </View>

        <View className="flex flex-col mt-5 border-t border-primary-200 pt-5">
          {settings.slice(2).map((item, index) => (
            <SettingItems key={index} {...item} />
          ))}
        </View>

        <View className="flex flex-col mt-5 border-t border-primary-200 pt-5">
          <SettingItems
            icon={icons.logout}
            title="Logout"
            onPress={handleLogOut}
            textStyle="text-danger"
            showArrow={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
