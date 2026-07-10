import { Text, TextInput, View } from 'react-native';

export function PromptComposer() {
  return (
    <View className="relative">
      <Text className="mb-3 px-1 text-[10px] font-medium uppercase leading-5 tracking-[2px] text-[#cfc2d6]">
        Describe your imagination
      </Text>
      <TextInput
        multiline
        placeholder="E.g. A futuristic glass city under a bioluminescent sky, vibrant cyan and purple reflections, ultra-detailed 8k photography..."
        placeholderTextColor="#988d9f"
        textAlignVertical="top"
        className="h-48 w-full rounded-2xl border border-white/10 bg-[#141414]/70 p-6 pr-16 text-[18px] leading-7 text-[#e5e2e1]"
      />
      <Text className="absolute bottom-4 right-4 text-[12px] font-semibold leading-4 text-[#988d9f]">
        0 / 1000
      </Text>
    </View>
  );
}
