import { useEffect, useRef } from 'react';
import { Animated, Easing, View } from 'react-native';

const AnimatedView = Animated.View;

export function SplashOrb() {
  const pulse = useRef(new Animated.Value(0)).current;
  const rotate = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, {
          toValue: 1,
          duration: 1500,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(pulse, {
          toValue: 0,
          duration: 1500,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
    ).start();

    Animated.loop(
      Animated.timing(rotate, {
        toValue: 1,
        duration: 12000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, [pulse, rotate]);

  const glowScale = pulse.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.12],
  });
  const orbScale = pulse.interpolate({
    inputRange: [0, 1],
    outputRange: [0.96, 1.04],
  });
  const spin = rotate.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View className="relative h-64 w-64 items-center justify-center">
      <AnimatedView
        className="absolute h-56 w-56 rounded-full bg-primary/40 opacity-60"
        style={{ transform: [{ scale: glowScale }] }}
      />
      <AnimatedView
        className="h-44 w-44 items-center justify-center rounded-full border border-secondary/30 bg-primary-container/70 shadow-2xl shadow-primary"
        style={{ transform: [{ scale: orbScale }, { rotate: spin }] }}
      >
        <View className="absolute h-36 w-36 rounded-full border border-secondary/40" />
        <View className="absolute h-28 w-28 rounded-full border border-white/10" />
        <View className="h-20 w-20 rounded-full bg-primary shadow-2xl shadow-primary" />
        <View className="absolute h-2 w-2 rounded-full bg-secondary left-8 top-12" />
        <View className="absolute h-1.5 w-1.5 rounded-full bg-tertiary right-10 bottom-12" />
      </AnimatedView>
    </View>
  );
}
