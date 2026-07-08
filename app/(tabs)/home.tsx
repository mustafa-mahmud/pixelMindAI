import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Header } from '../../components/Header';
import { HeroCard } from '../../components/home/HeroCard';
import { RecentProjects } from '../../components/home/RecentProjects';
import { ToolsSection } from '../../components/home/ToolsSection';
import { TrendingStyles } from '../../components/home/TrendingStyles';

const WelcomeSection = () => {
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
};

const HomeScreen = () => {
  return (
    <SafeAreaView
      className="flex-1 bg-background"
      edges={['left', 'right', 'top']}
    >
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
    </SafeAreaView>
  );
};

export default HomeScreen;
