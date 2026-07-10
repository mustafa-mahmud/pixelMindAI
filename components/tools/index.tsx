import { ScrollView, View } from 'react-native';

import { PremiumCard } from './PremiumCard';
import { RecentCreations } from './RecentCreations';
import { ToolsBottomNavigation } from './ToolsBottomNavigation';
import { ToolsGrid } from './ToolsGrid';
import { ToolsTopBar } from './ToolsTopBar';
import { Header } from '../Header';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ToolsScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#131313]" edges={['top', 'bottom']}>
      <Header />
      <ScrollView
        className="flex-1"
        contentContainerClassName="px-5 pb-32 pt-10 md:px-10"
      >
        <View className="mx-auto w-full max-w-7xl">
          <PremiumCard />
          <ToolsGrid />
          <RecentCreations />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
