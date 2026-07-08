import { MaterialIcons } from '@expo/vector-icons';
import type { ComponentProps } from 'react';
import { Text, View } from 'react-native';

import { perks } from './data';

type MaterialIconName = ComponentProps<typeof MaterialIcons>['name'];

export function PremiumPerks() {
  return (
    <View className="mb-12 gap-4">
      {perks.map((perk) => (
        <View
          key={perk.title}
          className="flex-row items-center gap-4 rounded-2xl border border-white/5 bg-[#141414]/70 p-4"
        >
          <View className="h-10 w-10 items-center justify-center rounded-full border border-[#4cd7f6]/20 bg-[#4cd7f6]/10">
            <MaterialIcons
              name={perk.icon as MaterialIconName}
              size={24}
              color="#4cd7f6"
            />
          </View>
          <View>
            <Text className="text-[14px] font-medium leading-5 tracking-[0.3px] text-[#e5e2e1]">
              {perk.title}
            </Text>
            <Text className="text-[12px] font-semibold leading-4 text-[#cfc2d6]">
              {perk.description}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
}
