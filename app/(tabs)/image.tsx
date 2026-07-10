import { ScrollView, View } from 'react-native';

import {
  GenerateAction,
  ImageBottomNavigation,
  ImageIntro,
  ImageSettings,
  ImageTopBar,
  PromptComposer,
  VisualStyleGrid,
} from '../../components/image';
import { Header } from '@/components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ImageScreen() {
  return (
    <SafeAreaView
      edges={['top', 'bottom']}
      className="min-h-full flex-1 bg-[#131313]"
    >
      <Header />
      <ScrollView
        className="flex-1"
        contentContainerClassName="px-5 pb-24 pt-24"
        showsVerticalScrollIndicator={false}
      >
        <ImageIntro />

        <View className="gap-8">
          <PromptComposer />
          <VisualStyleGrid />
          <ImageSettings />
        </View>
        <GenerateAction />
      </ScrollView>
    </SafeAreaView>
  );
}
