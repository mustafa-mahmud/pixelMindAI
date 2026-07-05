import { Text, View } from 'react-native';

import { BackgroundAtmosphere } from './BackgroundAtmosphere';
import { LoadingStatus } from './LoadingStatus';
import { SplashBadge } from './SplashBadge';
import { SplashOrb } from './SplashOrb';

export function SplashScreen() {
  return (
    <View className="flex-1 overflow-hidden bg-background px-container-margin-mobile py-16">
      <BackgroundAtmosphere />
      <View className="z-10 flex-1 items-center justify-between">
        <View className="w-full items-center gap-4">
          <SplashBadge />
          <Text className="mt-4 font-headline-lg-mobile text-headline-lg-mobile text-on-surface">
            PixelMind AI
          </Text>
          <Text className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
            AI Photo Studio
          </Text>
        </View>

        <View className="w-full flex-1 items-center justify-center">
          <SplashOrb />
        </View>

        <LoadingStatus />
      </View>
    </View>
  );
}
