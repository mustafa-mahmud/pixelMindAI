import { MaterialIcons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';

export function GenerateAction() {
  return (
    <View className="bg-[#131313]/95  pt-12">
      <TouchableOpacity
        activeOpacity={0.95}
        className="h-[74px] w-full flex-row items-center justify-center gap-3 overflow-hidden rounded-full bg-[#ddb7ff] shadow-2xl shadow-[#ddb7ff]/30"
      >
        <MaterialIcons name="auto-fix-high" size={28} color="#490080" />
        <Text className="text-[20px] font-bold leading-[34px] tracking-[-1px] text-[#490080]">
          Generate Masterpiece
        </Text>
      </TouchableOpacity>
    </View>
  );
}
