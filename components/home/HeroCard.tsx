import { MaterialIcons } from '@expo/vector-icons';
import type { ComponentProps, ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';

import { COLORS } from './data';

type IconName = ComponentProps<typeof MaterialIcons>['name'];

type HeroButtonProps = {
  label: string;
  icon: IconName;
  variant: 'primary' | 'secondary';
};

function GlassPanel({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <View className={`border border-white/10 bg-[#141414]/70 ${className}`}>
      {children}
    </View>
  );
}

function HeroButton({ label, icon, variant }: HeroButtonProps) {
  const isPrimary = variant === 'primary';

  return (
    <Pressable
      className={`w-full flex-row items-center justify-center gap-2 rounded-2xl py-4 active:scale-[0.98] ${
        isPrimary
          ? 'bg-primary-container'
          : 'border border-secondary bg-secondary/5'
      }`}
      onPress={() => router.push('/upload')}
      style={isPrimary ? styles.purpleGlow : styles.cyanGlow}
    >
      <MaterialIcons
        name={icon}
        size={22}
        color={isPrimary ? COLORS.onPrimaryContainer : COLORS.secondary}
      />
      <Text
        className={`font-label-md text-label-md font-bold ${
          isPrimary ? 'text-on-primary-container' : 'text-secondary'
        }`}
      >
        {label}
      </Text>
    </Pressable>
  );
}

export function HeroCard() {
  return (
    <GlassPanel className="overflow-hidden rounded-[32px] p-8">
      <View className="gap-6">
        <View>
          <Text className="font-headline-lg text-headline-lg text-white">
            Start Creating
          </Text>
          <Text className="max-w-[240px] font-body-md text-body-md text-on-surface-variant">
            Transform your vision into digital masterpieces with AI.
          </Text>
        </View>

        <View className="gap-3">
          <HeroButton
            label="Upload Photo"
            icon="upload-file"
            variant="primary"
          />
          <HeroButton
            label="Generate AI Image"
            icon="auto-fix-high"
            variant="secondary"
          />
        </View>
      </View>
    </GlassPanel>
  );
}

export { GlassPanel };

const styles = StyleSheet.create({
  purpleGlow: {
    shadowColor: '#b76dff',
    shadowOpacity: 0.25,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 0 },
    elevation: 8,
  },
  cyanGlow: {
    shadowColor: '#4cd7f6',
    shadowOpacity: 0.3,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 0 },
    elevation: 6,
  },
});
