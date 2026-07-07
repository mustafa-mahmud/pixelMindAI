import { MaterialIcons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

import { storageUsage } from './data';

export function StorageCard() {
  return (
    <View
      className="space-y-4 rounded-[28px] border border-white/10 bg-[#141414]/70 p-6"
      style={{ borderTopColor: 'rgba(255,255,255,0.15)' }}
    >
      <View className="flex-row items-end justify-between">
        <View className="space-y-1">
          <Text className="text-sm font-medium uppercase leading-5 tracking-wider text-[#4cd7f6]">
            Cloud Storage
          </Text>
          <Text className="text-[28px] font-bold leading-[34px] text-[#e5e2e1]">
            {storageUsage.used}{' '}
            <Text className="text-base font-normal leading-6 text-[#cfc2d6]">
              / {storageUsage.total}
            </Text>
          </Text>
        </View>
        <MaterialIcons name="cloud-queue" size={26} color="#cfc2d6" />
      </View>

      <View className="h-3 w-full overflow-hidden rounded-full bg-white/5">
        <View
          className="h-full rounded-full"
          style={{
            width: `${storageUsage.percent}%`,
            backgroundColor: '#4cd7f6',
            shadowColor: '#4cd7f6',
            shadowOpacity: 0.3,
            shadowRadius: 15,
          }}
        />
      </View>

      <Text className="text-right text-xs font-semibold leading-4 text-[#cfc2d6]">
        {storageUsage.percent}% space used
      </Text>
    </View>
  );
}
