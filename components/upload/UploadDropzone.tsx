import { MaterialIcons } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';

export function UploadDropzone() {
  return (
    <Pressable className="relative aspect-square w-full items-center justify-center overflow-hidden rounded-[24px] border-2 border-dashed border-[#ddb7ff]/50 bg-[#141414]/70 shadow-lg shadow-black/30 active:scale-[0.99]">
      <View className="pointer-events-none absolute inset-0 bg-[#ddb7ff]/10 opacity-50" />
      <View className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-[#4cd7f6]/10 opacity-80" />
      <View className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[#ddb7ff]/10 opacity-80" />

      <View className="relative z-10 flex-col items-center">
        <View className="mb-4 h-20 w-20 items-center justify-center rounded-full bg-[#ddb7ff]/10">
          <MaterialIcons name="cloud-upload" size={44} color="#ddb7ff" />
        </View>

        <Text className="text-center font-[Hanken_Grotesk] text-[28px] font-bold leading-[34px] text-[#e5e2e1]">
          Drag photo here
        </Text>

        <Text className="mt-2 font-[Inter] text-[16px] font-normal leading-6 text-[#cfc2d6]">
          or tap to select from files
        </Text>
      </View>
    </Pressable>
  );
}
