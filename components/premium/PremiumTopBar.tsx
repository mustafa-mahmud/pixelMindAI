import { MaterialIcons } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';

export function PremiumTopBar() {
  return (
    <View className="absolute left-0 right-0 top-0 z-50 h-16 flex-row items-center justify-between border-b border-white/10 bg-[#201f1f]/70 px-5">
      <View className="flex-row items-center gap-4">
        <Pressable className="h-10 w-10 items-center justify-center rounded-full active:scale-95 active:bg-white/5">
          <MaterialIcons name="close" size={26} color="#cfc2d6" />
        </Pressable>
      </View>
      <Text className="text-[28px] font-bold leading-[34px] tracking-[-1px] text-[#ddb7ff]">
        LUMINA AI
      </Text>
      <View className="w-10" />
    </View>
  );
}
