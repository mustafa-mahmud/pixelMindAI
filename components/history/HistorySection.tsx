import { StyleSheet, Text, View } from 'react-native';

import type { HistoryItem } from './data';
import { HistoryGalleryItem } from './HistoryGalleryItem';

type HistorySectionProps = {
  title: 'Today' | 'Yesterday';
  items: HistoryItem[];
  selectionMode: boolean;
  selectedIds: string[];
  onItemPress: (id: string) => void;
};

export function HistorySection({
  title,
  items,
  selectionMode,
  selectedIds,
  onItemPress,
}: HistorySectionProps) {
  const left = items.filter((_, index) => index % 2 === 0);
  const right = items.filter((_, index) => index % 2 === 1);

  return (
    <View
      style={[styles.section, title === 'Today' ? styles.todaySection : null]}
    >
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.grid}>
        <View style={styles.column}>
          {left.map((item) => (
            <HistoryGalleryItem
              key={item.id}
              item={item}
              selectionMode={selectionMode}
              selected={selectedIds.includes(item.id)}
              onPress={onItemPress}
            />
          ))}
        </View>
        <View style={styles.column}>
          {right.map((item) => (
            <HistoryGalleryItem
              key={item.id}
              item={item}
              selectionMode={selectionMode}
              selected={selectedIds.includes(item.id)}
              onPress={onItemPress}
            />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {},
  todaySection: {
    marginBottom: 40,
  },
  sectionTitle: {
    marginBottom: 16,
    paddingHorizontal: 4,
    color: 'rgba(207,194,214,0.6)',
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '600',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  grid: {
    flexDirection: 'row',
    gap: 12,
  },
  column: {
    flex: 1,
  },
});
