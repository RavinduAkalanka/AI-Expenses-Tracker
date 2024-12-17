import React, { useState } from "react";
import { ScrollView, View, Text } from "react-native";
import Profile from "@/src/Components/Settings/Profile";
import PreferenceItem from "@/src/Components/Settings/PreferenceItem";
import { Bell, Palette, DollarSign, Bug, Mail } from 'lucide-react-native';

export default function Settings() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [crashReportEnabled, setCrashReportEnabled] = useState(false);

  return (
    <ScrollView className="flex-1">
      {/* Header Section */}
      <Profile />

      {/* Preferences Section */}
      <View className="mt-10 mx-4">
        <Text className="font-karla-bold text-[18px] text-[#6B7280]">Preferences</Text>

        {/* Notification Toggle */}
        <PreferenceItem
          icon={<Bell color="#030712" size={24} />}
          title="Notification"
          isSwitch
          switchValue={notificationsEnabled}
          onSwitchChange={(value) => setNotificationsEnabled(value)}
        />

        {/* Theme Selection */}
        <PreferenceItem
          icon={<Palette color="#030712" size={24} />}
          title="Theme"
          description="Light "
        />

        {/* Currency Selection */}
        <PreferenceItem
          icon={<DollarSign color="#030712" size={24} />}
          title="Choose currency"
          description="Doller "
        />

        {/* Crash Report Toggle */}
        <PreferenceItem
          icon={<Bug color="#030712" size={24} />}
          title="Send crash report"
          isSwitch
          switchValue={crashReportEnabled}
          onSwitchChange={(value) => setCrashReportEnabled(value)}
        />

        {/* Suggestions */}
        <PreferenceItem
          icon={<Mail color="#030712" size={24} />}
          title="Send suggestions and concerns"
        />
      </View>
    </ScrollView>
  );
}
