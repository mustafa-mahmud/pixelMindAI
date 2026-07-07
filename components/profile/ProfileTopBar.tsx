import { MaterialIcons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { Text, View } from 'react-native';

import { profileUser } from './data';

export function ProfileTopBar() {
  return (
    <View className="absolute left-0 right-0 top-0 z-50 h-16 flex-row items-center justify-between border-b border-white/10 bg-[#201f1f]/70 px-5">
      <View className="flex-row items-center gap-3">
        <MaterialIcons name="menu" size={26} color="#ddb7ff" />
        <Text className="text-[28px] font-bold leading-[34px] tracking-[-1px] text-[#ddb7ff]">
          LUMINA AI
        </Text>
      </View>
      <View className="h-10 w-10 overflow-hidden rounded-full border border-[#ddb7ff]/20">
        <Image
          source={{ uri: profileUser.smallAvatarUrl }}
          contentFit="cover"
          // className="h-full w-full"
          style={{
            width: 50,
            height: 50,
          }}
        />
      </View>
    </View>
  );
}
