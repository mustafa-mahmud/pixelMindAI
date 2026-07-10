import { Image } from 'expo-image';
import { Pressable, Text, View } from 'react-native';

export function PremiumCard() {
  return (
    <Pressable className="mb-10 overflow-hidden rounded-[24px] bg-[#b76dff]">
      <View className="relative overflow-hidden rounded-[24px] bg-[#b76dff] p-8">
        <View className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[#ddb7ff]/80" />
        <View className="absolute -bottom-12 -right-8 h-48 w-48 rounded-full bg-[#ffd8e7]/80" />
        <View className="absolute inset-0 bg-white/10 opacity-30" />
        <View className="relative z-10 gap-6 md:flex-row md:items-center md:justify-between">
          <View className="items-start gap-2">
            <Text className="rounded-full bg-[#400071] px-3 py-1 text-[10px] font-bold uppercase tracking-[2px] text-white">
              Unlock Everything
            </Text>
            <Text className="text-[48px] font-extrabold leading-[56px] tracking-[-1px] text-[#400071]">
              PixelMind Pro
            </Text>
            <Text className="max-w-md text-lg leading-7 text-[#400071]/80">
              Unlimited high-res exports, batch processing, and exclusive early
              access to GPT-5 powered editing models.
            </Text>
            <Pressable className="mt-4 rounded-full bg-[#400071] px-8 py-3 shadow-xl shadow-black/30">
              <Text className="text-sm font-medium leading-5 tracking-[0.28px] text-white">
                Upgrade Now
              </Text>
            </Pressable>
          </View>
          <View className="hidden h-48 w-72 rotate-3 overflow-hidden rounded-2xl shadow-2xl shadow-black/40 md:flex">
            <Image
              source="https://picsum.photos/600/400?tools-premium=1"
              contentFit="cover"
              className="h-full w-full"
            />
          </View>
        </View>
      </View>
    </Pressable>
  );
}
