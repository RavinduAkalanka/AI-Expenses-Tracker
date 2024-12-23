// SpentCard.tsx
import React from "react";
import { TouchableOpacity, Text, View } from "react-native";

interface SpentCardProps {
  title: string;
  amount: string;
  isSelected: boolean;
  onPress: () => void;
}

// Function Declaration for SpentCard
export function SpentCard({
  title,
  amount,
  isSelected,
  onPress,
}: SpentCardProps) {
  return (
    <TouchableOpacity
      className={`flex-1 h-28 w-44 rounded-xl p-4 ${
        isSelected ? "bg-[#030712]" : "bg-[#E5E7EB]"
      } ml-4 mr-4 mb-2`}
      onPress={onPress}
    >
      <Text
        className={`text-[24px] text-center mt-3 font-karla-bold ${
          isSelected ? "text-white" : "text-black"
        }`}
      >
        ${amount}
      </Text>

      <Text
        className={`text-base text-center font-Karla-Regular ${
          isSelected ? "text-white" : "text-black"
        }`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
