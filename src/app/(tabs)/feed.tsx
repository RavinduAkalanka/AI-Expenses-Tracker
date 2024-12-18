import { View, ScrollView } from "react-native";
import Header from "@/src/Components/Feed/Header";
import SummaryCard from "@/src/Components/Feed/SummaryCard";
import AddButton from "@/src/Components/AddButton";

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
          <SummaryCard
            title="Today"
            income={0}
            expense={70}
            balance={-70}
            transactions={[
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
            ]}
          />

          <SummaryCard
            title="Yesterday"
            date="7th November 2024"
            income={1500}
            expense={500}
            balance={1000}
            transactions={[
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
            ]}
          />

          <SummaryCard
            title="Yesterday"
            date="7th November 2024"
            income={1500}
            expense={500}
            balance={1000}
            transactions={[
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
            ]}
          />
        </View>
      </ScrollView>

      <AddButton onPress={() => {}} />
    </View>
  );
}
