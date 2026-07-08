import { MaterialIcons } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';

export function PremiumBottomAction() {
  return (
    <View className="w-full p-6">
      <Pressable className="h-16 w-full flex-row items-center justify-center gap-2 rounded-full bg-[#FFD700] shadow-[0_0_40px_rgba(221,183,255,0.4)] active:scale-95">
        <Text className="text-[28px] font-bold leading-[34px] tracking-[-1px] text-[#400071]">
          Upgrade Now
        </Text>
        <MaterialIcons name="arrow-forward" size={28} color="#400071" />
      </Pressable>
    </View>
  );
}
