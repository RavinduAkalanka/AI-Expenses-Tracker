import { View, Text, Image, TouchableOpacity } from "react-native";
import { Trash2 } from "lucide-react-native"; 

interface FamilyMemberCardProps {
  name: string;
  nickname: string;
  imageUrl: string;
}

export default function FamilyMemberCard({ name, nickname, imageUrl }: FamilyMemberCardProps) {
  return (
    <View className="flex-row items-center bg-[#E5E7EB]  h-20 mx-4 mb-4 rounded-lg">

      <Image source={{ uri: imageUrl }} className="w-12 h-12 rounded-full ml-4 my-4 mr-2" />

      <View className="flex-1">
        <Text className="font-karla-bold text-[#030712 text-[18px]">{name}</Text>
        <Text className="font-Karla-Regular text-[14px] text-[#030712">Nick name: {nickname}</Text>
      </View>

      <TouchableOpacity className="mr-4 my-4" activeOpacity={0.7}>
        <Trash2 color="#D33B23" size={24} />
      </TouchableOpacity>
    </View>
  );
}
