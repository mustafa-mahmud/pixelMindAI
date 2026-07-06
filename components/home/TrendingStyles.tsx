import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import { TRENDING_STYLES } from './data';
import { GlassPanel } from './HeroCard';

type TrendingStyle = (typeof TRENDING_STYLES)[number];

function TrendingCard({ item }: { item: TrendingStyle }) {
  return (
    <GlassPanel className="relative h-64 w-[200px] overflow-hidden rounded-[24px]">
      <Image
        source={{ uri: item.image }}
        className="h-full w-full"
        style={styles.cover}
      />
      <View className="absolute inset-0 justify-end p-6" style={styles.overlay}>
        <Text className="font-label-sm text-label-sm uppercase tracking-tighter text-secondary">
          {item.eyebrow}
        </Text>
        <Text className="font-headline-lg-mobile text-[20px] font-bold leading-[28px] text-white">
          {item.title}
        </Text>
      </View>
    </GlassPanel>
  );
}

export function TrendingStyles() {
  return (
    <View className="gap-4">
      <Text className="font-label-md text-label-md font-bold text-on-surface">
        Trending Styles
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="-mx-container-margin-mobile"
        contentContainerClassName="gap-4 px-container-margin-mobile pb-4"
      >
        {TRENDING_STYLES.map((item) => (
          <TrendingCard key={item.title} item={item} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  cover: {
    resizeMode: 'cover',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.34)',
  },
});
