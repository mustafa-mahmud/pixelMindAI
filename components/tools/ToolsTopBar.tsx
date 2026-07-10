import { Image } from 'expo-image';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Pressable, Text, TextInput, View } from 'react-native';

import { palette } from './data';

export function ToolsTopBar() {
  return (
    <View className="absolute left-0 right-0 top-0 z-50 h-16 flex-row items-center justify-between border-b border-white/10 bg-[#201f1f]/70 px-5">
      <View className="flex-row items-center gap-4">
        <Pressable className="rounded-full p-2 active:scale-95">
          <MaterialIcons
            name="arrow-back"
            size={24}
            color={palette.onSurface}
          />
        </Pressable>
        <Text className="text-[28px] font-bold leading-[34px] tracking-[-1px] text-[#ddb7ff]">
          AI Tools
        </Text>
      </View>
      <View className="flex-row items-center gap-2">
        <View className="relative hidden h-10 w-64 flex-row items-center rounded-full bg-[#353534] md:flex">
          <MaterialIcons
            name="search"
            size={24}
            color={palette.onSurfaceVariant}
            className="absolute left-3 z-10"
          />
          <TextInput
            placeholder="Search tools..."
            placeholderTextColor={palette.onSurfaceVariant}
            className="h-10 w-full rounded-full px-4 pl-10 text-sm font-medium leading-5 tracking-[0.28px] text-[#e5e2e1]"
          />
        </View>
        <Pressable className="rounded-full p-2 md:hidden">
          <MaterialIcons name="search" size={24} color={palette.onSurface} />
        </Pressable>
        <View className="h-10 w-10 overflow-hidden rounded-full border-2 border-[#ddb7ff]/20 bg-[#2a2a2a]">
          <Image
            source="https://picsum.photos/600/400?tools-avatar=1"
            contentFit="cover"
            className="h-full w-full"
          />
        </View>
      </View>
    </View>
  );
}
