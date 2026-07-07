import { MaterialIcons } from '@expo/vector-icons';
import { Pressable, View } from 'react-native';

const navItems = [
  { id: 'home', icon: 'home' },
  { id: 'tools', icon: 'auto-fix-high' },
  { id: 'upload', icon: 'add-a-photo' },
  { id: 'history', icon: 'history' },
  { id: 'profile', icon: 'person' },
] as const;

export function ProfileBottomNavigation() {
  return (
    <View
      className="absolute bottom-6 left-[5%] right-[5%] z-50 flex-row items-center justify-around rounded-full border border-white/10 bg-[#1c1b1b]/70 px-4 py-2"
      style={{ shadowColor: '#4cd7f6', shadowOpacity: 0.15, shadowRadius: 20 }}
    >
      {navItems.map((item) => {
        const isActive = item.id === 'profile';

        return (
          <Pressable
            key={item.id}
            className={
              isActive
                ? 'h-12 w-12 items-center justify-center rounded-full bg-[#4cd7f6]/20 active:scale-90'
                : 'h-12 w-12 items-center justify-center active:scale-90'
            }
            style={
              isActive
                ? {
                    shadowColor: '#4cd7f6',
                    shadowOpacity: 0.3,
                    shadowRadius: 15,
                  }
                : undefined
            }
          >
            <MaterialIcons
              name={item.icon}
              size={25}
              color={isActive ? '#4cd7f6' : '#cfc2d6'}
            />
          </Pressable>
        );
      })}
    </View>
  );
}
