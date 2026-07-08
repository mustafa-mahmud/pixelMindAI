import { ScrollView, View } from 'react-native';

import {
  PremiumBackground,
  PremiumBottomAction,
  PremiumHero,
  PremiumPerks,
  PremiumPlans,
  PremiumTerms,
  PremiumTopBar,
} from '@/components/premium';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PremiumScreen() {
  return (
    <SafeAreaView
      edges={['top', 'bottom']}
      style={{
        flex: 1,
        backgroundColor: '#000',
      }}
    >
      <View className="flex-1 bg-[#131313]">
        <PremiumBackground />
        <PremiumTopBar />
        <ScrollView
          style={{
            marginBottom: 50,
          }}
          className="flex-1"
          contentContainerClassName="px-5 pt-24"
          showsVerticalScrollIndicator={false}
        >
          <PremiumHero />
          <PremiumPerks />
          <PremiumPlans />
          <PremiumTerms />
          <PremiumBottomAction />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
