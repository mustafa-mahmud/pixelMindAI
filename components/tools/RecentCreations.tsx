import { Image } from 'expo-image';
import { Pressable, Text, View } from 'react-native';

import { recentCreations } from './data';

export function RecentCreations() {
  return (
    <View className="mt-12">
      <View className="mb-6 flex-row items-center justify-between">
        <Text className="text-[28px] font-bold leading-[34px] text-[#e5e2e1]">
          Recent Creations
        </Text>
        <Pressable>
          <Text className="text-sm font-medium leading-5 tracking-[0.28px] text-[#4cd7f6]">
            View All
          </Text>
        </Pressable>
      </View>
      <View className="flex-row flex-wrap gap-4">
        {recentCreations.map((creation) => (
          <Pressable
            key={creation.id}
            className="aspect-square flex-1 basis-[28%] overflow-hidden rounded-2xl border border-white/10 bg-[#2a2a2a] md:basis-[14%]"
          >
            <Image
              source={{ uri: creation.uri }}
              contentFit="cover"
              className="h-full w-full"
              style={{
                height: '100%',
                width: '100%',
              }}
            />
          </Pressable>
        ))}
      </View>
    </View>
  );
}
