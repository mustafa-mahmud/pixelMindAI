import { Text, TouchableOpacity, View } from 'react-native';

import { ratioOptions } from './data';

export function ImageSettings() {
  return (
    <View className="gap-8">
      <View>
        <Text className="mb-4 px-1 text-[10px] font-medium uppercase leading-5 tracking-[2px] text-[#cfc2d6]">
          Aspect Ratio
        </Text>
        <View className="flex-row gap-4">
          {ratioOptions.map((option, index) => {
            const active = index === 0;

            return (
              <TouchableOpacity
                key={option.label}
                activeOpacity={0.9}
                className={`flex-1 items-center gap-2 rounded-xl border bg-[#141414]/70 py-4 ${
                  active
                    ? 'border-[#4cd7f6] bg-[#4cd7f6]/10'
                    : 'border-white/10'
                }`}
              >
                <View
                  className={`${option.boxClassName} rounded-sm border-2 ${
                    active ? 'border-[#4cd7f6]' : 'border-[#e5e2e1]'
                  }`}
                />
                <Text
                  className={`text-[12px] font-semibold leading-4 ${
                    active ? 'text-[#4cd7f6]' : 'text-[#e5e2e1]'
                  }`}
                >
                  {option.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <View>
        <Text className="mb-4 px-1 text-[10px] font-medium uppercase leading-5 tracking-[2px] text-[#cfc2d6]">
          AI Creativity (Guidance)
        </Text>
        <View className="px-2 pt-4">
          <View className="h-1 w-full rounded-lg bg-[#353534]">
            <View className="h-1 w-[70%] rounded-lg bg-[#4cd7f6]" />
            <View className="-mt-[11px] ml-[68%] h-5 w-5 rounded-full bg-[#4cd7f6] shadow-lg shadow-[#4cd7f6]" />
          </View>
          <View className="mt-3 flex-row justify-between">
            <Text className="text-[12px] font-semibold leading-4 text-[#988d9f]">
              Precise
            </Text>
            <Text className="text-[12px] font-semibold leading-4 text-[#988d9f]">
              Creative
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
