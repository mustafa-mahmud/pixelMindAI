import { View } from 'react-native';

export function SplashBadge() {
  return (
    <View className="flex-row items-center gap-2 rounded-full border border-white/10 bg-surface-container/70 px-4 py-1.5 shadow-2xl">
      <View className="h-1.5 w-1.5 rounded-full bg-secondary shadow-secondary" />
      <View className="h-4 justify-center">
        <View className="h-2 w-24 rounded-full bg-on-surface-variant/80" />
      </View>
    </View>
  );
}
