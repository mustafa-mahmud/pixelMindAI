import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

export function UploadTopBar() {
  return (
    <View className="absolute left-0 right-0 top-0 z-50 h-16 flex-row items-center justify-between border-b border-white/10 bg-[#201f1f]/70 px-5">
      <Pressable
        onPress={() => router.back()}
        className="h-10 w-10 items-center justify-center rounded-full active:scale-95 active:bg-white/5"
      >
        <MaterialIcons name="arrow-back" size={26} color="#e5e2e1" />
      </Pressable>

      <Text className="font-[Hanken_Grotesk] text-[28px] font-bold leading-[34px] tracking-[-1px] text-[#ddb7ff]">
        Upload Photo
      </Text>

      <View className="h-10 w-10" />
    </View>
  );
}
