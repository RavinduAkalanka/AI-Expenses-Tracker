import React from "react";
import { View, Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";

interface PieChartComponentProps {
  data: {
    name: string;
    population: number;
    color: string;
    legendFontColor: string;
    legendFontSize: number;
  }[];
}

export const PieChartComponent: React.FC<PieChartComponentProps> = ({ data }) => {
  const screenWidth = Dimensions.get("window").width;

  return (
    <View className="items-center justify-center">
      <PieChart
        data={data}
        width={screenWidth - 32} 
        height={187}
        chartConfig={{
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        accessor={"population"}
        backgroundColor={"transparent"}
        paddingLeft={"1"}
        center={[0, 0]}
        absolute
      />
    </View>
  );
};
