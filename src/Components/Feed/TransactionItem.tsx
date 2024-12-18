import { View, Text } from "react-native";

interface TransactionItemProps {
  name: string;
  amount: number;
  time: string;
  person: string;
  paymentMethod: string; 
}

export default function TransactionItem({
  name,
  amount,
  time,
  person,
  paymentMethod, 
}: TransactionItemProps) {
  return (
    <View className="flex-row justify-between items-center py-2">
      <View>
        <Text className="font-karla-bold text-[18px] text-[#030712]">{name}</Text>
        <Text className="font-karla-regular text-[14px] text-[#030712]">
          {time} by {person}
        </Text>
      </View>
      
      <View className="items-end">
        <Text className="font-karla-bold text-[18px] text-[#030712]">${amount.toFixed(2)}</Text>
        <Text className="font-karla-regular text-[14px] text-[#030712]">{paymentMethod}</Text> 
      </View>
    </View>
  );
}
