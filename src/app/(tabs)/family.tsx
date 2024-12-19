import { View, ScrollView } from "react-native";
import Header from "@/src/Components/Family/Header";
import FamilyMemberCard from "@/src/Components/Family/FamilyMemberCard";
import AddButton from "@/src/Components/AddButton";

export default function FamilyScreen() {
  const familyMembers = [
    {
      id: 1,
      name: "Ravindu Akalanka",
      nickname: "Son",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png",
    },
    {
      id: 2,
      name: "Chamod Kalpitha",
      nickname: "Son",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png",
    },
  ];

  return (
    <View className="flex-1">
      {/* Header */}
      <Header />

      {/* Family Member List */}
      <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
        {familyMembers.map((member) => (
          <FamilyMemberCard
            key={member.id} 
            name={member.name}
            nickname={member.nickname}
            imageUrl={member.imageUrl}
          />
        ))}
      </ScrollView>

      <AddButton onPress={() => console.log("Add family member")} />
    </View>
  );
}
