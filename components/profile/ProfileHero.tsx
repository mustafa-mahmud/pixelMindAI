import { Image } from 'expo-image';
import { Text, View } from 'react-native';

import { profileUser } from './data';

export function ProfileHero() {
  return (
    <View className="items-center mt-5 space-y-4 text-center">
      <View className="relative">
        <View className="h-32 w-32 rounded-full border-2 border-[#ddb7ff] bg-[#353534] p-1">
          <Image
            source={{ uri: profileUser.avatarUrl }}
            contentFit="cover"
            style={{
              height: '100%',
              width: '100%',
              borderRadius: 100,
            }}
          />
        </View>
        <View
          className="absolute -bottom-2 self-center rounded-full bg-[#ddb7ff] px-4 py-0.5"
          style={{
            shadowColor: '#ddb7ff',
            shadowOpacity: 0.4,
            shadowRadius: 15,
          }}
        >
          <Text className="text-xs font-semibold leading-4 text-[#490080]">
            PRO
          </Text>
        </View>
      </View>

      <View className="items-center my-5">
        <Text className="text-[25px] font-bold leading-10 tracking-[-0.32px] text-[#e5e2e1]">
          {profileUser.name}
        </Text>
        <Text className="text-base text-center leading-6 text-[#cfc2d6]">
          {profileUser.email}
        </Text>
      </View>
    </View>
  );
}
