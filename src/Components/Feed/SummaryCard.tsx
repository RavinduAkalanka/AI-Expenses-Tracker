import { View, Text } from "react-native";
import TransactionItem from "./TransactionItem";

interface SummaryCardProps {
  title: string;
  date?: string;
  income: number;
  expense: number;
  balance: number;
  transactions: {
    name: string;
    amount: number;
    time: string;
    person: string;
    paymentMethod: string;
  }[];
}

export default function SummaryCard({
  title,
  date,
  income,
  expense,
  balance,
  transactions,
}: SummaryCardProps) {
  return (
    <View className="bg-[#E5E7EB] p-4 rounded-lg my-4 mx-4 ">
      <View className="flex items-center justify-center mb-4">
        <Text className="text-[18px] font-karla-SemiBold text-[#030712]">
          {title}
        </Text>
        {date && (
          <Text className="font-karla-SemiBold text-[14px] text-[#515864]">
            {date}
          </Text>
        )}
      </View>

      <View className="flex-row justify-between mt-2 mb-2">
        {/* Income Section */}
        <View className="flex-1 items-center">
          <Text className="font-karla-SemiBold text-[18px] text-[#030712]">${income.toFixed(2)}</Text>
          <Text className="font-karla-regular text-[14px] text-[#1F2937]">Income</Text>
        </View>

        {/* Expense Section */}
        <View className="flex-1 items-center">
          <Text className="font-karla-SemiBold text-[18px] text-[#030712]">${expense.toFixed(2)}</Text>
          <Text className="font-karla-regular text-[14px] text-[#1F2937]">Expense</Text>
        </View>

        {/* Balance Section */}
        <View className="flex-1 items-center">
          <Text className="font-karla-SemiBold text-[18px] text-[#030712]">${balance.toFixed(2)}</Text>
          <Text className="font-karla-regular text-[14px] text-[#1F2937]">Balance</Text>
        </View>
      </View>

      {/* Render Transaction Items */}
      {transactions.map((transaction, index) => (
        <TransactionItem key={index} {...transaction} />
      ))}
    </View>
  );
}
