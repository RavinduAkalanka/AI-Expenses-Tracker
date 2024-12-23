// Insights.tsx
import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { SpentCard } from "@/src/Components/Insights/StatCard";
import Header from "@/src/Components/Insights/Header";
import { PieChartComponent } from "@/src/Components/Insights/PieChartComponent";
import Filters from "@/src/Components/Insights/Filters";
import ExpenseCard from "@/src/Components/Insights/ExpenseCard";
import AddButton from "@/src/Components/AddButton";

export default function Insights() {
  const stats = {
    earn: "150000.50", // Value for "Earn this week"
    spent: "292.50", // Value for "Spent this week"
  };

  //Chart data
  const chartData = [
    {
      name: "Spent",
      population: 292.5,
      color: "#374151",
      legendFontColor: "#000",
      legendFontSize: 14,
    },
    {
      name: "Earned",
      population: 950.5,
      color: "#D1D5DB",
      legendFontColor: "#000",
      legendFontSize: 14,
    },
    {
      name: "Savings",
      population: 600.0,
      color: "#9CA3AF",
      legendFontColor: "#000",
      legendFontSize: 14,
    },
    {
      name: "Investments",
      population: 700.0,
      color: "#6B7280",
      legendFontColor: "#000",
      legendFontSize: 14,
    },
  ];

  const expenses = [
    { id: 1, title: "Lunch", entries: 7, amount: 25, percentage: 30 },
    { id: 2, title: "Blacky's food", entries: 3, amount: 15, percentage: 18 },
    { id: 3, title: "Car payments", entries: 2, amount: 50, percentage: 25 },
    { id: 4, title: "Movies", entries: 2, amount: 20, percentage: 10 },
    { id: 5, title: "Groceries", entries: 5, amount: 35, percentage: 12 },
    { id: 6, title: "Gym Membership", entries: 1, amount: 30, percentage: 5 },
  ];  

  // State to track the selected box
  const [selectedBox, setSelectedBox] = useState<"earn" | "spent">("earn");

  // State for filter values (family member and duration)
  const [selectedMember, setSelectedMember] =
    useState<string>("Ravindu Akalanka");
  const [selectedDuration, setSelectedDuration] = useState<string>("Week");

  // Handle family member change
  const handleMemberChange = (member: string) => {
    setSelectedMember(member);
  };

  // Handle duration change
  const handleDurationChange = (duration: string) => {
    setSelectedDuration(duration);
  };

  return (
    <View className="flex-1">
      {/* Header */}
      <Header />

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Stat Cards */}
        <View className="flex-row space-x-2">
          {/* Earn This Week Card */}
          <SpentCard
            title="Earn this week"
            amount={stats.earn}
            isSelected={selectedBox === "earn"}
            onPress={() => setSelectedBox("earn")}
          />

          {/* Spent This Week Card */}
          <SpentCard
            title="Spent this week"
            amount={stats.spent}
            isSelected={selectedBox === "spent"}
            onPress={() => setSelectedBox("spent")}
          />
        </View>

        {/* Pie Chart */}
        <PieChartComponent data={chartData} />

        {/* Filters Component */}
        <Filters
          onMemberChange={handleMemberChange}
          onDurationChange={handleDurationChange}
        />

        {/*Expenses Card */}
        <View className="mt-[18px]">
          {expenses.map((expense) => (
            <ExpenseCard
              key={expense.id}
              title={expense.title}
              entries={expense.entries}
              amount={expense.amount}
              percentage={expense.percentage}
            />
          ))}
        </View>
      </ScrollView>

      {/* Add Button */}
      <AddButton onPress={() => {}} />
    </View>
  );
}
