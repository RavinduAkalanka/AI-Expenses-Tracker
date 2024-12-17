import { Stack } from 'expo-router';
import React from 'react';
import { useFonts } from 'expo-font';
import { View, Text } from 'react-native';
import "./global.css";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'Karla-Regular': require('./../Assets/fonts/Karla-Regular.ttf'),
    'Karla-Medium': require('./../Assets/fonts/Karla-Medium.ttf'),
    'Karla-SemiBold': require('./../Assets/fonts/Karla-SemiBold.ttf'),
    'Karla-Bold': require('./../Assets/fonts/Karla-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>; // Loading screen while fonts are loading
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='(tabs)' />
    </Stack>
  );
}
