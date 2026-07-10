import { MaterialIcons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { Text, TouchableOpacity, View } from 'react-native';

import { avatarUrl } from './data';

export function ImageTopBar() {
  return (
    <View className="absolute left-0 right-0 top-0 z-50 h-16 flex-row items-center justify-between border-b border-white/10 bg-[#201f1f]/70 px-5">
      <View className="flex-row items-center gap-3">
        <MaterialIcons name="menu" size={24} color="#ddb7ff" />
        <Text className="font-extrabold text-[28px] leading-[34px] tracking-[-1px] text-[#ddb7ff]">
          LUMINA AI
        </Text>
      </View>

      <View className="flex-row items-center gap-4">
        <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full">
          <MaterialIcons name="history" size={24} color="#cfc2d6" />
        </TouchableOpacity>
        <View className="h-8 w-8 overflow-hidden rounded-full border border-[#ddb7ff]/30">
          <Image
            source={{ uri: avatarUrl }}
            className="h-full w-full"
            contentFit="cover"
          />
        </View>
      </View>
    </View>
  );
}
