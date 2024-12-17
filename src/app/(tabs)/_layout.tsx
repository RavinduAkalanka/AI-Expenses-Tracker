import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import {
  ChartLine,
  Users,
  Settings,
  ChartNoAxesGantt,
} from "lucide-react-native";

export default function TabLayout() {
  return (
    <View style={{ flex: 1, backgroundColor: "#f9fafb" }}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#030712",
            borderRadius: 16,
            height: 90,
            marginHorizontal: 16,
            marginVertical: 18,
            paddingHorizontal: 22,
            paddingVertical: 32,
            paddingTop: 18,
            position: "absolute",
          },
        }}
      >
        <Tabs.Screen
          name="feed"
          options={{
            tabBarLabel: ({ focused }) =>
              focused ? (
                <Text
                  style={{
                    fontFamily: "Karla-Regular",
                    fontSize: 14,
                    color: "#f9fafb",
                  }}
                >
                  Feed
                </Text>
              ) : null,
            tabBarIcon: ({ focused }) => (
              <ChartNoAxesGantt
                color={focused ? "#f9fafb" : "#6b7280"}
                size={24}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="insights"
          options={{
            tabBarLabel: ({ focused }) =>
              focused ? (
                <Text
                  style={{
                    fontFamily: "Karla-Regular",
                    fontSize: 14,
                    color: "#f9fafb",
                  }}
                >
                  Insights
                </Text>
              ) : null,
            tabBarIcon: ({ focused }) => (
              <ChartLine color={focused ? "#f9fafb" : "#6b7280"} size={24} />
            ),
          }}
        />

        <Tabs.Screen
          name="family"
          options={{
            tabBarLabel: ({ focused }) =>
              focused ? (
                <Text
                  style={{
                    fontFamily: "Karla-Regular",
                    fontSize: 14,
                    color: "#f9fafb",
                  }}
                >
                  Family
                </Text>
              ) : null,
            tabBarIcon: ({ focused }) => (
              <Users color={focused ? "#f9fafb" : "#6b7280"} size={24} />
            ),
          }}
        />

        <Tabs.Screen
          name="setting"
          options={{
            tabBarLabel: ({ focused }) =>
              focused ? (
                <Text
                  style={{
                    fontFamily: "Karla-Regular",
                    fontSize: 14,
                    color: "#f9fafb",
                  }}
                >
                  Settings
                </Text>
              ) : null,
            tabBarIcon: ({ focused }) => (
              <Settings color={focused ? "#f9fafb" : "#6b7280"} size={24} />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}
