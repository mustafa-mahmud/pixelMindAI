import { MaterialIcons } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';

import type { SettingItem } from './data';
import { settings } from './data';

function ProfileToggle({
  enabled,
  accent,
}: {
  enabled?: boolean;
  accent: string;
}) {
  return (
    <View
      className="h-6 w-11 justify-center rounded-full p-0.5"
      style={{ backgroundColor: enabled ? accent : 'rgba(255,255,255,0.1)' }}
    >
      <View
        className="h-5 w-5 rounded-full bg-white"
        style={{ transform: [{ translateX: enabled ? 20 : 0 }] }}
      />
    </View>
  );
}

function SettingsRow({ item }: { item: SettingItem }) {
  const isToggle = item.type === 'toggle';
  const toggleAccent = item.id === 'dark-theme' ? '#ddb7ff' : '#4cd7f6';

  return (
    <Pressable className="flex-row items-center justify-between p-4 active:bg-white/5">
      <View className="flex-row items-center gap-4">
        <View
          className={`h-10 w-10 items-center justify-center rounded-xl ${item.accentClass}`}
        >
          <MaterialIcons
            name={item.icon as keyof typeof MaterialIcons.glyphMap}
            size={24}
          />
        </View>
        <View>
          <Text className="text-base leading-6 text-[#e5e2e1]">
            {item.label}
          </Text>
          {item.sublabel ? (
            <Text className="text-xs font-semibold leading-4 text-[#cfc2d6]">
              {item.sublabel}
            </Text>
          ) : null}
        </View>
      </View>

      {isToggle ? (
        <ProfileToggle enabled={item.enabled} accent={toggleAccent} />
      ) : (
        <MaterialIcons name="chevron-right" size={26} color="#cfc2d6" />
      )}
    </Pressable>
  );
}

export function SettingsList() {
  return (
    <View className="space-y-3">
      <Text className="px-2 text-sm font-medium uppercase leading-5 tracking-widest text-[#cfc2d6]">
        General Settings
      </Text>
      <View
        className="overflow-hidden rounded-2xl border border-white/10 bg-[#141414]/70"
        style={{ borderTopColor: 'rgba(255,255,255,0.15)' }}
      >
        {settings.map((item, index) => (
          <View
            key={item.id}
            className={index > 0 ? 'border-t border-white/5' : undefined}
          >
            <SettingsRow item={item} />
          </View>
        ))}
      </View>
    </View>
  );
}
