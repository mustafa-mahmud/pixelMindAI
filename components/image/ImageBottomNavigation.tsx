import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity, View } from 'react-native';

import { navItems } from './data';

export function ImageBottomNavigation() {
  return (
    <View className="absolute bottom-6 left-[5%] right-[5%] z-50 flex-row items-center justify-around rounded-full border border-white/10 bg-[#1c1b1b]/70 px-4 py-2 shadow-2xl shadow-[#4cd7f6]/20">
      {navItems.map((item) => (
        <TouchableOpacity
          key={item.icon}
          activeOpacity={0.85}
          className={`h-12 w-12 items-center justify-center rounded-full ${
            item.active ? 'bg-[#4cd7f6]/20 shadow-lg shadow-[#4cd7f6]/30' : ''
          }`}
        >
          <MaterialIcons
            name={item.icon}
            size={24}
            color={item.active ? '#4cd7f6' : '#cfc2d6'}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}
