import { Pressable, Text, View } from 'react-native';

export function LogoutSection() {
  return (
    <View className="items-center pt-8">
      <Pressable className="rounded-full border border-[#ffb4ab]/20 bg-[#93000a]/20 px-8 py-3 active:scale-95">
        <Text className="text-sm font-medium leading-5 tracking-[0.28px] text-[#ffb4ab]">
          Log Out
        </Text>
      </Pressable>
      <Text className="mt-4 text-xs font-semibold leading-4 text-[#cfc2d6] opacity-50">
        Lumina Studio v4.2.0-stable
      </Text>
    </View>
  );
}
