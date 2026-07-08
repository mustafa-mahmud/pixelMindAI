import { Text, View } from 'react-native';

export function UploadFormatHint() {
  return (
    <View className="mt-8 items-center">
      <Text className="font-[Geist] text-[12px] font-semibold uppercase leading-4 tracking-[3px] text-[#cfc2d6]">
        Supported formats
      </Text>
      <Text className="mt-1 font-[Hanken_Grotesk] text-lg font-bold leading-7 text-[#4cd7f6]">
        JPG, PNG, HEIC
      </Text>
    </View>
  );
}
