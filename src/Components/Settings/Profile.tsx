import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { PencilLine } from "lucide-react-native";

export default function Profile() {
  const user = {
    name: "Ravindu Akalanka",
    email: "ravinduakalankazoysa@gmail.com",
    profileImageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png",
  };
  
  return (
    <View>
      {/* Title */}
      <Text className="text-4xl font-karla-bold mt-6 ml-5 text-left">
        Settings
      </Text>
      <Text className="text-[#1F2937] text-base ml-6 mt-[2px] font-Karla-Regular">
        Fine tune your app more
      </Text>

      <View className="items-center mb-6 mt-7">
        {/* Profile Image */}
        <View>
          <Image
            source={{
              uri: user.profileImageUrl,
            }}
            className="w-[80] h-[80] rounded-full"
          />
        </View>

        {/* Profile Name */}
        <Text className="text-[18px] text-[#030712] font-karla-bold mt-1">
          {user.name}
        </Text>
        <Text className="text-[14px] text-[#1F2937] font-Karla-Regular">
          {user.email}
        </Text>

        {/* Change Button */}
        <Pressable className="mt-2 active:opacity-80 flex-row items-center">
        <PencilLine size={22} color="#030712" /> 
          <Text className="text-[15px] text-[#030712] font-karla-bold ml-2">
            Change
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
