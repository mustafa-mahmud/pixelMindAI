import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Pressable, View } from 'react-native';

import { palette } from './data';

const navItems = [
  { icon: 'home', active: false },
  { icon: 'auto-fix-high', active: true },
  { icon: 'add-a-photo', active: false },
  { icon: 'history', active: false },
  { icon: 'person', active: false },
] as const;

export function ToolsBottomNavigation() {
  return (
    <View className="absolute bottom-6 left-[5%] right-[5%] z-50 flex-row items-center justify-around rounded-full border border-white/10 bg-[#1c1b1b]/70 px-4 py-2 shadow-xl shadow-[#4cd7f6]/20 md:left-auto md:right-auto md:w-[400px] md:self-center">
      {navItems.map((item) => (
        <Pressable
          key={item.icon}
          className={
            item.active
              ? 'h-12 w-12 items-center justify-center rounded-full bg-[#4cd7f6]/20 shadow-lg shadow-[#4cd7f6]/30 active:scale-90'
              : 'h-12 w-12 items-center justify-center active:scale-90'
          }
        >
          <MaterialIcons
            name={item.icon}
            size={24}
            color={item.active ? palette.secondary : palette.onSurfaceVariant}
          />
        </Pressable>
      ))}
    </View>
  );
}
