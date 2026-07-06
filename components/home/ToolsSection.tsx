import { MaterialIcons } from '@expo/vector-icons';
import type { ComponentProps } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';

import { COLORS, TOOLS } from './data';
import { GlassPanel } from './HeroCard';

type IconName = ComponentProps<typeof MaterialIcons>['name'];

function ToolChip({ label, icon }: { label: string; icon: IconName }) {
  return (
    <Pressable className="active:scale-95">
      <GlassPanel className="flex-row items-center gap-2 rounded-full px-6 py-3">
        <MaterialIcons name={icon} size={20} color={COLORS.secondary} />
        <Text className="font-label-md text-label-md text-on-surface">
          {label}
        </Text>
      </GlassPanel>
    </Pressable>
  );
}

export function ToolsSection() {
  return (
    <View className="gap-4">
      <View className="flex-row items-center justify-between">
        <Text className="font-label-md text-label-md font-bold text-on-surface">
          AI Tools
        </Text>
        <Pressable>
          <Text className="font-label-sm text-label-sm text-secondary">
            View All
          </Text>
        </Pressable>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="-mx-container-margin-mobile"
        contentContainerClassName="gap-3 px-container-margin-mobile"
      >
        {TOOLS.map((tool) => (
          <ToolChip key={tool.label} label={tool.label} icon={tool.icon} />
        ))}
      </ScrollView>
    </View>
  );
}
