import { View, Text } from "react-native";

interface ExpenseCardProps {
  title: string;
  entries: number;
  amount: number;
  percentage: number;
}

export default function ExpenseCard({
  title,
  entries,
  amount,
  percentage
}: ExpenseCardProps) {
  return (
    <View className="flex-row items-center bg-[#E5E7EB] p-4 rounded-lg mx-4 mb-4">

      {/* Expense Details */}
      <View className="flex-1">
        <Text className="text-[18px] font-karla-bold  text-[#030712]">{title}</Text>
        <Text className="text-[14px] text-karla-regular text-[#030712]">{entries} entries</Text>
      </View>

      {/* Amount and Percentage */}
      <View className="items-end">
        <Text className="text-[18px] font-karla-bold  text-[#030712]">${amount.toFixed(2)}</Text>
        <Text className="text-[14px] text-karla-regular text-[#030712]">{percentage}%</Text>
      </View>
    </View>
  );
}
