import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BottomNavigation } from './BottomNavigation';
import { Header } from './Header';
import { HeroCard } from './HeroCard';
import { RecentProjects } from './RecentProjects';
import { ToolsSection } from './ToolsSection';
import { TrendingStyles } from './TrendingStyles';

function WelcomeSection() {
  return (
    <View>
      <Text className="font-label-md text-label-md uppercase tracking-widest text-primary">
        Welcome Back
      </Text>
      <Text className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">
        Ready to create?
      </Text>
    </View>
  );
}

export function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background" edges={['left', 'right']}>
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1"
        contentContainerClassName="gap-8 px-container-margin-mobile pb-32 pt-20"
      >
        <WelcomeSection />
        <HeroCard />
        <ToolsSection />
        <RecentProjects />
        <TrendingStyles />
      </ScrollView>
      <BottomNavigation />
    </SafeAreaView>
  );
}
