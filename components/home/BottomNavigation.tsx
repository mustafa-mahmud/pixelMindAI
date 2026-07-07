import { MaterialIcons } from '@expo/vector-icons';
import { Pressable, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';

import { COLORS, NAV_ITEMS, PROJECT_COLUMNS } from './data';

export function BottomNavigation() {
  const insets = useSafeAreaInsets();
  console.log(NAV_ITEMS);

  return (
    <View
      className="absolute left-[5%] right-[5%] z-50 flex-row items-center justify-around rounded-full border border-white/10 bg-surface-container-low/70 px-4 py-2"
      style={[styles.bar, { bottom: Math.max(insets.bottom, 24) }]}
    >
      {NAV_ITEMS.map((item, index) => {
        return (
          <Pressable
            key={item.icon}
            className={`h-12 w-12 items-center justify-center rounded-full active:scale-90 ${
              item.active ? 'bg-secondary/20' : ''
            }`}
            style={item.active ? styles.active : undefined}
            onPress={() => {
              console.log(123);
              router.push(item.link);
            }}
          >
            <MaterialIcons
              name={item.icon}
              size={24}
              color={item.active ? COLORS.secondary : COLORS.onSurfaceVariant}
            />
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    shadowColor: '#4cd7f6',
    shadowOpacity: 0.15,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 0 },
    elevation: 12,
  },
  active: {
    shadowColor: '#4cd7f6',
    shadowOpacity: 0.4,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 0 },
    elevation: 8,
  },
});
