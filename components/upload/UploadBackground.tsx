import { View } from 'react-native';

export function UploadBackground() {
  return (
    <View className="pointer-events-none absolute inset-0 -z-10 opacity-20">
      <View className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-[#ddb7ff]/20 opacity-70" />
      <View className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-[#4cd7f6]/20 opacity-70" />
    </View>
  );
}
