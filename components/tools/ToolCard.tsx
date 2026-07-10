import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Pressable, Text, View } from 'react-native';

import { palette, ToolItem, toolToneClasses } from './data';

type ToolCardProps = {
  tool: ToolItem;
};

export function ToolCard({ tool }: ToolCardProps) {
  const tone = toolToneClasses[tool.tone];

  return (
    <Pressable className="min-h-40 flex-1 basis-[45%] items-center rounded-[24px] border border-white/10 bg-[#141414]/70 p-6 text-center active:scale-95 md:basis-[30%] lg:basis-[22%]">
      <View
        className={`mb-4 h-14 w-14 items-center justify-center rounded-2xl ${tone.background}`}
      >
        <MaterialIcons
          name={tool.icon as keyof typeof MaterialIcons.glyphMap}
          size={30}
          color={palette[tool.tone]}
        />
      </View>
      <Text className="mb-1 text-center text-sm font-medium leading-5 tracking-[0.28px] text-[#e5e2e1]">
        {tool.title}
      </Text>
      <Text className="text-center text-[11px] font-semibold leading-tight text-[#cfc2d6]">
        {tool.description}
      </Text>
    </Pressable>
  );
}
