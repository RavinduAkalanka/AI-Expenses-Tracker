import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";

interface FiltersProps {
  onMemberChange: (member: string) => void;
  onDurationChange: (duration: string) => void;
}

export default function Filters({ onMemberChange, onDurationChange }: FiltersProps) {
    const [selectedMember, setSelectedMember] = useState("Ravindu Akalanka");
    const [selectedDuration, setSelectedDuration] = useState("Week");
  
  const familyMembers = ["Ravindu Akalanka", "Chamod Kalpitha", "Manusha Dilshan", "Linuka Shehan"];
  const durations = ["Week", "Month", "Custom"];

  return (
    <View style={styles.container}>
      {/* Sort by Family Member */}
      <View style={styles.dropdownContainer}>
        <Text style={styles.label}>Sort by family member</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={selectedMember}
            onValueChange={(itemValue) => {
              setSelectedMember(itemValue);
              onMemberChange(itemValue);
            }}
            style={styles.picker}
            dropdownIconColor="white"
            mode="dropdown"
          >
            {familyMembers.map((member) => (
              <Picker.Item label={member} value={member} key={member} style={styles.pickerText} />
            ))}
          </Picker>
        </View>
      </View>

      {/* Sort by Duration */}
      <View style={styles.durationContainer}>
        <Text style={styles.label}>Sort by duration</Text>
        <View style={styles.durationWrapper}>
          {durations.map((duration) => (
            <TouchableOpacity
              key={duration}
              onPress={() => {
                setSelectedDuration(duration);
                onDurationChange(duration);
              }}
              style={[
                styles.durationButton,
                selectedDuration === duration && styles.selectedButton,
              ]}
            >
              <Text
                style={[
                  styles.durationText,
                  selectedDuration === duration && styles.selectedText,
                ]}
              >
                {duration}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
    paddingHorizontal: 8,
  },
  dropdownContainer: {
    flex: 1,
    marginHorizontal: 4,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#030712",
    marginBottom: 8,
  },
  pickerWrapper: {
    backgroundColor: "#030712",
    borderRadius: 8,
    overflow: "hidden",
    height: 34,
    justifyContent: "center",
  },
  picker: {
    height: 50,
    color: "white",
  },
  pickerText: {
    fontSize: 14,
    fontFamily: "Karla-Bold", 
  },
  durationContainer: {
    flex: 1,
    marginHorizontal: 4,
  },
  durationWrapper: {
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center",
  },
  durationButton: {
    flex: 1, 
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 8,
    backgroundColor: "#F1F1F1", 
    marginHorizontal: 4,
  },
  selectedButton: {
    backgroundColor: "black", 
  },
  durationText: {
    fontSize: 14,
    fontFamily: "Karla-Bold", 
    color: "#030712", 
  },
  selectedText: {
    color: "white", 
    fontWeight: "bold",
  },
});
