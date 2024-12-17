import React from "react";
import { View, Text, Switch } from "react-native";
import { ChevronRight } from "lucide-react-native";

interface PreferenceItemProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  isSwitch?: boolean;
  switchValue?: boolean;
  onSwitchChange?: (value: boolean) => void;
}

export default function PreferenceItem({
  icon,
  title,
  description,
  isSwitch = false,
  switchValue,
  onSwitchChange,
}: PreferenceItemProps) {
  return (
    <View className="flex-row justify-between items-center mb-4">
      <View className="flex-row items-center">
        {icon}
        <Text className="font-Karla-Medium text-[18px] text-[#030712] ml-4">{title}</Text>
      </View>

      {isSwitch ? (
        <Switch 
          value={switchValue}
          onValueChange={onSwitchChange}
          trackColor={{ false: "#d1d5db", true: "#374151" }}  // Set the track color (background)
          thumbColor={switchValue ? "#d1d5db" : "#374151"}  // Set the thumb color (circle)
        />
      ) : (
        <View className="flex-row items-center">
          <Text className="font-Karla-SemiBold text-[18px] text-[#6B7280]">{description}</Text>
          <ChevronRight size={18} color="#6B7280" className="ml-2" />
        </View>
      )}
    </View>
  );
}
