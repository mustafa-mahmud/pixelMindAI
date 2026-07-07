import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { LogoutSection } from '../../components/profile/LogoutSection';
import { ProfileBottomNavigation } from '../../components/profile/ProfileBottomNavigation';
import { ProfileHero } from '../../components/profile/ProfileHero';
import { ProfileTopBar } from '../../components/profile/ProfileTopBar';
import { SettingsList } from '../../components/profile/SettingsList';
import { StorageCard } from '../../components/profile/StorageCard';

export default function ProfileScreen() {
  return (
    <SafeAreaView
      className="flex-1 bg-background"
      edges={['left', 'right', 'top']}
    >
      <ProfileTopBar />
      <ScrollView
        className="flex-1"
        contentContainerClassName="mx-auto w-full max-w-2xl space-y-8 px-5 pb-36 pt-24"
        showsVerticalScrollIndicator={false}
      >
        <ProfileHero />
        <StorageCard />
        <SettingsList />
        <LogoutSection />
      </ScrollView>
      {/* <ProfileBottomNavigation /> */}
    </SafeAreaView>
  );
}
