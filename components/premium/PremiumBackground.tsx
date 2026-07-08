import { View } from 'react-native';

export function PremiumBackground() {
  return (
    <View className="absolute inset-0 bg-[#131313]">
      <View className="absolute -right-32 -top-28 h-80 w-80 rounded-full bg-[#ddb7ff]/15" />
      <View className="absolute -bottom-24 -left-36 h-80 w-80 rounded-full bg-[#4cd7f6]/10" />
    </View>
  );
}
