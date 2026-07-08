import { MaterialIcons } from '@expo/vector-icons';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { COLORS, USER_AVATAR } from './home/data';

export function Header() {
  return (
    <View className="left-0 right-0 top-0 z-50 h-16 flex-row items-center justify-between border-b border-white/10 bg-surface-container/70 px-container-margin-mobile">
      <Text className="font-headline-lg-mobile text-headline-lg-mobile font-bold tracking-tighter text-primary text-[19px]">
        LUMINA AI
      </Text>

      <View className="flex-row items-center gap-4">
        <Pressable className="h-10 w-10 items-center justify-center rounded-full active:scale-95 active:bg-white/5">
          <MaterialIcons name="search" size={24} color={COLORS.onSurface} />
        </Pressable>

        <Pressable className="relative h-10 w-10 items-center justify-center rounded-full active:scale-95 active:bg-white/5">
          <MaterialIcons
            name="notifications"
            size={24}
            color={COLORS.onSurface}
          />
          <View className="absolute right-2 top-2 h-2 w-2 rounded-full bg-primary" />
        </Pressable>

        <View className="h-10 w-10 overflow-hidden rounded-full border border-white/20">
          <Image
            source={{ uri: USER_AVATAR }}
            className="h-full w-full"
            style={styles.cover}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cover: {
    resizeMode: 'cover',
  },
});
