import { View, Text } from 'react-native'
import { Stack } from 'expo-router';
import React from 'react'
import "./global.css";
import {useFonts} from 'expo-font'

export default function RootLayout() {
    useFonts({
        'Karla-Regular':require('./../Assets/fonts/Karla-Regular.ttf'),
        'Karla-Medium':require('./../Assets/fonts/Karla-Medium.ttf'),
        'Karla-Semibold':require('./../Assets/fonts/Karla-SemiBold.ttf'),
        'Karla-Bold':require('./../Assets/fonts/Karla-Bold.ttf'),
    })
  return (
    <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen name='(tabs)' />
    </Stack>
  )
}
