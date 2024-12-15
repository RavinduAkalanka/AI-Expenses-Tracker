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
                        marginHorizontal: 32,
                        marginVertical: 24,
                        paddingHorizontal: 24,
                        paddingVertical:32,
                        paddingTop:18,
                        position: "absolute",
                        bottom: 24,
                    },
                    // tabBarActiveTintColor: "#f9fafb",
                    // tabBarInactiveTintColor: "#6b7280",
                }}
            >
                
                <Tabs.Screen
                    name="feed"
                    options={{
                        tabBarLabel: ({ focused }) => (
                            <Text
                                style={{
                                    fontFamily: "Karla-Regular",
                                    fontSize: 14,
                                    color: focused ? "#f9fafb" : "#6b7280",
                                }}
                            >
                                Feed
                            </Text>
                        ),
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
                        tabBarLabel: ({ focused }) => (
                            <Text
                                style={{
                                    fontFamily: "Karla-Regular",
                                    fontSize: 14,
                                    color: focused ? "#f9fafb" : "#6b7280",
                                }}
                            >
                                Insights
                            </Text>
                        ),
                        tabBarIcon: ({ focused }) => (
                            <ChartLine
                                color={focused ? "#f9fafb" : "#6b7280"}
                                size={24}
                            />
                        ),
                    }}
                />

                
                <Tabs.Screen
                    name="family"
                    options={{
                        tabBarLabel: ({ focused }) => (
                            <Text
                                style={{
                                    fontFamily: "Karla-Regular",
                                    fontSize: 14,
                                    color: focused ? "#f9fafb" : "#6b7280",
                                }}
                            >
                                Family
                            </Text>
                        ),
                        tabBarIcon: ({ focused }) => (
                            <Users
                                color={focused ? "#f9fafb" : "#6b7280"}
                                size={24}
                            />
                        ),
                    }}
                />

                
                <Tabs.Screen
                    name="setting"
                    options={{
                        tabBarLabel: ({ focused }) => (
                            <Text
                                style={{
                                    fontFamily: "Karla-Regular",
                                    fontSize: 14,
                                    color: focused ? "#f9fafb" : "#6b7280",
                                }}
                            >
                                Settings
                            </Text>
                        ),
                        tabBarIcon: ({ focused }) => (
                            <Settings
                                color={focused ? "#f9fafb" : "#6b7280"}
                                size={24}
                            />
                        ),
                    }}
                />
            </Tabs>
        </View>
    );
}
