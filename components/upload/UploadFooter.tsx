import { Pressable, Text, View } from 'react-native';

export function UploadFooter() {
  return (
    <View className="absolute bottom-0 left-0 right-0 z-50 border-t border-white/5 bg-[#141414]/70 p-5">
      <View className="mx-auto w-full max-w-lg">
        <Pressable className="w-full rounded-full bg-[#4cd7f6] py-5 shadow-lg shadow-[#4cd7f6]/20 active:scale-[0.98]">
          <Text className="text-center font-[Hanken_Grotesk] text-xl font-extrabold leading-7 tracking-tight text-[#003640]">
            Continue
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
