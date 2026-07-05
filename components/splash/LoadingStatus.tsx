import { useEffect, useRef, useState } from 'react';
import { Animated, Easing, Text, View } from 'react-native';

import { loadingPhrases } from '@/constants/splash';

const AnimatedView = Animated.View;

export function LoadingStatus() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const fade = useRef(new Animated.Value(1)).current;
  const spin = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spin, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, [spin]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      Animated.timing(fade, {
        toValue: 0,
        duration: 250,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }).start(() => {
        setPhraseIndex(
          (currentIndex) => (currentIndex + 1) % loadingPhrases.length,
        );
        Animated.timing(fade, {
          toValue: 1,
          duration: 250,
          easing: Easing.in(Easing.ease),
          useNativeDriver: true,
        }).start();
      });
    }, 3000);

    return () => clearInterval(intervalId);
  }, [fade]);

  const spinValue = spin.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View className="items-center gap-6">
      <View className="items-center gap-4">
        <AnimatedView
          className="h-12 w-12 rounded-full border-2 border-secondary/10 border-t-secondary shadow-lg shadow-secondary"
          style={{ transform: [{ rotate: spinValue }] }}
        />
        <Animated.Text
          className="text-center font-body-md text-body-md text-on-surface-variant"
          style={{ opacity: fade }}
        >
          {loadingPhrases[phraseIndex]}
        </Animated.Text>
      </View>
      <View className="mt-4 items-center gap-1">
        <Text className="font-label-sm text-label-sm text-outline-variant">
          v1.0.2
        </Text>
        <View className="h-px w-24 bg-outline-variant/30" />
      </View>
    </View>
  );
}
