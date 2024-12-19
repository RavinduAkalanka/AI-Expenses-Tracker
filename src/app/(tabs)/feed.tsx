import { View, ScrollView } from "react-native";
import Header from "@/src/Components/Feed/Header";
import SummaryCard from "@/src/Components/Feed/SummaryCard";
import AddButton from "@/src/Components/AddButton";

const summaryData = [
  {
    title: "Today",
    income: 0,
    expense: 70,
    balance: -70,
    transactions: [
      {
        name: "Car Payments",
        amount: 25,
        time: "1 hr ago",
        person: "me",
        paymentMethod: "Cash",
      },
      {
        name: "Card Installment",
        amount: 255,
        time: "1 hr ago",
        person: "wife",
        paymentMethod: "Cash",
      },
      {
        name: "Card Installment",
        amount: 255,
        time: "1 hr ago",
        person: "wife",
        paymentMethod: "Cash",
      },
    ],
  },
  {
    title: "Yesterday",
    date: "7th November 2024",
    income: 1500,
    expense: 500,
    balance: 1000,
    transactions: [
      {
        name: "Lunch",
        amount: 25,
        time: "1 hr ago",
        person: "me",
        paymentMethod: "Cash",
      },
      {
        name: "Blacky’s food",
        amount: 255,
        time: "1 hr ago",
        person: "wife",
        paymentMethod: "Cash",
      },
    ],
  },
  {
    title: "Day Before Yesterday",
    date: "6th November 2024",
    income: 1200,
    expense: 300,
    balance: 900,
    transactions: [
      {
        name: "Dinner",
        amount: 50,
        time: "2 hrs ago",
        person: "me",
        paymentMethod: "Card",
      },
      {
        name: "Groceries",
        amount: 250,
        time: "3 hrs ago",
        person: "wife",
        paymentMethod: "Card",
      },
    ],
  },
];

export default function FeedScreen() {
  return (
    <View className="flex-1">
      {/* Header */}
      <View className="z-10">
        <Header />
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Summary Cards */}
        <View className="flex-1 px-4 mt-4">
          {summaryData.map((data, index) => (
            <SummaryCard
              key={index}
              title={data.title}
              date={data.date}
              income={data.income}
              expense={data.expense}
              balance={data.balance}
              transactions={data.transactions}
            />
          ))}
        </View>
      </ScrollView>

      {/* Add Button */}
      <AddButton onPress={() => {}} />
    </View>
  );
}
