import { Text, View } from 'react-native';

export function ImageIntro() {
  return (
    <View className="mb-10 items-center">
      <Text className="mb-2 text-center text-[32px] font-bold leading-10 tracking-[-0.32px] text-white">
        AI Image Generator
      </Text>
      <Text className="max-w-lg text-center text-[16px] font-normal leading-6 text-[#cfc2d6]">
        Transform your creative visions into high-fidelity digital art with our
        precision engine.
      </Text>
    </View>
  );
}
