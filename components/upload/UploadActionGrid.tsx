import { MaterialIcons } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';

type UploadActionButtonProps = {
  icon: keyof typeof MaterialIcons.glyphMap;
  label: string;
  variant: 'primary' | 'glass';
};

function UploadActionButton({ icon, label, variant }: UploadActionButtonProps) {
  const isPrimary = variant === 'primary';

  return (
    <Pressable
      className={`flex-1 items-center justify-center gap-3 rounded-[24px] p-6 active:scale-95 ${
        isPrimary
          ? 'bg-[#ddb7ff] shadow-lg shadow-[#ddb7ff]/20'
          : 'border border-white/10 bg-[#141414]/70 shadow-lg shadow-black/20 active:bg-white/5'
      }`}
    >
      <MaterialIcons
        name={icon}
        size={34}
        color={isPrimary ? '#490080' : '#e5e2e1'}
      />
      <Text
        className={`text-center font-[Hanken_Grotesk] text-[16px] font-bold leading-5 ${
          isPrimary ? 'text-[#490080]' : 'text-[#e5e2e1]'
        }`}
      >
        {label}
      </Text>
    </Pressable>
  );
}

export function UploadActionGrid() {
  return (
    <View className="mt-8 w-full flex-row gap-4">
      <UploadActionButton
        icon="photo-library"
        label="Browse Gallery"
        variant="primary"
      />
      <UploadActionButton
        icon="photo-camera"
        label="Open Camera"
        variant="glass"
      />
    </View>
  );
}
