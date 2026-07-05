import { View } from 'react-native';

export function BackgroundAtmosphere() {
  return (
    <View className="absolute inset-0 overflow-hidden bg-background">
      <View className="absolute inset-0 bg-surface-container-lowest opacity-70" />
      <View className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-primary/10" />
      <View className="absolute -right-20 bottom-28 h-64 w-64 rounded-full bg-secondary/10" />
      <View className="absolute left-16 top-28 h-1 w-1 rounded-full bg-white/25" />
      <View className="absolute right-20 top-40 h-1.5 w-1.5 rounded-full bg-secondary/20" />
      <View className="absolute bottom-40 left-24 h-1 w-1 rounded-full bg-primary/30" />
      <View className="absolute bottom-56 right-14 h-1 w-1 rounded-full bg-tertiary/20" />
      <View className="absolute inset-0 bg-surface/20 opacity-40" />
    </View>
  );
}
