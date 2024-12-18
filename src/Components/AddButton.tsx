import { TouchableOpacity, View } from "react-native";
import { Plus } from "lucide-react-native"; // Ensure lucide-react-native is installed

export default function AddButton({ onPress }: { onPress: () => void }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="absolute bottom-[19px] right-[16px] bg-black w-14 h-14 rounded-lg items-center justify-center shadow-lg"
      activeOpacity={0.7}
      style={{
        position: "absolute", // Ensure the button is fixed
        bottom: 127, // Margin from the bottom
        right: 16, // Margin from the right
      }}
    >
      <View>
        <Plus color="white" size={28} />
      </View>
    </TouchableOpacity>
  );
}
