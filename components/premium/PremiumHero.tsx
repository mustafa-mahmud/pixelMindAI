import { Image } from 'expo-image';
import { Text, View } from 'react-native';

import { HERO_IMAGE_URL } from './data';

export function PremiumHero() {
  return (
    <View className="relative mb-12 h-72 overflow-hidden rounded-[24px]">
      <Image
        source={{ uri: HERO_IMAGE_URL }}
        contentFit="cover"
        className="absolute inset-0 h-full w-full"
      />
      <View className="absolute inset-0 bg-[#131313]/20" />
      <View className="absolute bottom-0 left-0 right-0 h-44 bg-[#131313]/80" />
      <View className="absolute bottom-6 left-6 right-6 items-center">
        <Text className="mb-3 rounded-full border border-[#ddb7ff]/30 bg-[#ddb7ff]/20 px-3 py-1 text-[14px] font-medium leading-5 tracking-[0.3px] text-[#ddb7ff]">
          PREMIUM MEMBERSHIP
        </Text>
        <Text className="text-center text-[48px] font-extrabold leading-[56px] tracking-[-1px] text-white">
          PixelMind AI Pro
        </Text>
        <Text className="mt-2 text-center text-[16px] font-normal leading-6 text-[#cfc2d6]">
          Unlock the full potential of creative intelligence.
        </Text>
      </View>
    </View>
  );
}
