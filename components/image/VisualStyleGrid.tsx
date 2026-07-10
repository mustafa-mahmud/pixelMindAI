import { Image } from 'expo-image';
import { Text, TouchableOpacity, View } from 'react-native';

import { styleOptions } from './data';

export function VisualStyleGrid() {
  return (
    <View>
      <Text className="mb-4 px-1 text-[10px] font-medium uppercase leading-5 tracking-[2px] text-[#cfc2d6]">
        Visual Style
      </Text>
      <View className="flex-row flex-wrap gap-3">
        {styleOptions.map((option, index) => {
          const active = index === 0;

          return (
            <TouchableOpacity
              key={option.title}
              activeOpacity={0.9}
              className={`w-[48%] gap-3 rounded-xl border bg-[#141414]/70 p-4 ${
                active ? 'border-[#4cd7f6] bg-[#4cd7f6]/10' : 'border-white/10'
              }`}
            >
              <View className="aspect-square w-full overflow-hidden rounded-lg">
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                  source={{ uri: option.imageUrl }}
                  contentFit="cover"
                />
              </View>
              <Text
                className={`text-center text-[14px] font-medium leading-5 tracking-[0.28px] ${
                  active ? 'text-[#4cd7f6]' : 'text-[#e5e2e1]'
                }`}
              >
                {option.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
