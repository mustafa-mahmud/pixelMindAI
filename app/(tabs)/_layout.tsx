import { COLORS } from '@/components/home/data';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { View } from 'react-native';

const Layout = () => {
  const icons = {
    home: ['home', 'home-outline'],
    profile: ['person', 'person-outline'],
    history: ['time', 'time-outline'],
    upload: ['cloud-upload', 'cloud-upload-outline'],
  } as const;
  ///////////////////////////////////////////////////
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarLabel: '',
        tabBarStyle: {
          position: 'absolute',
          left: '5%',
          right: '5%',
          bottom: 20,
          borderRadius: 9999,
          borderWidth: 1,
          borderColor: 'rgba(255,255,255,0.1)',
          backgroundColor: 'rgba(30,30,30,0.7)',
          paddingHorizontal: 16,
          paddingVertical: 8,
          height: 64,
          shadowColor: '#4cd7f6',
          shadowOpacity: 0.15,
          shadowRadius: 20,
          shadowOffset: { width: 0, height: 0 },
          elevation: 5,
        },
        tabBarIcon: ({ focused, color, size }) => {
          return (
            <View
              style={{
                ...(focused && {
                  shadowColor: '#4cd7f6',
                  elevation: 10,
                }),
                marginTop: 22,
                width: 40,
                height: 40,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: focused
                  ? 'rgba(76,215,246,0.15)'
                  : 'transparent',
              }}
            >
              <Ionicons
                name={
                  focused
                    ? icons[route.name as keyof typeof icons][0]
                    : icons[route.name as keyof typeof icons][1]
                }
                size={20}
                color={focused ? COLORS.secondary : COLORS.onSurfaceVariant}
              />
            </View>
          );
        },
      })}
    >
      <Tabs.Screen name="home" />
      <Tabs.Screen name="profile" />
      <Tabs.Screen name="history" />
      <Tabs.Screen name="upload" />
    </Tabs>
  );
};

export default Layout;
