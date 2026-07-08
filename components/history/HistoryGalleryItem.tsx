import { MaterialIcons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import type { HistoryItem } from './data';
import { colors, tintColors } from './styles';

type HistoryGalleryItemProps = {
  item: HistoryItem;
  selectionMode: boolean;
  selected: boolean;
  onPress: (id: string) => void;
};

export function HistoryGalleryItem({
  item,
  selectionMode,
  selected,
  onPress,
}: HistoryGalleryItemProps) {
  const tint = tintColors[item.tint];

  return (
    <Pressable onPress={() => onPress(item.id)} style={styles.item}>
      {selectionMode ? (
        <View style={styles.selectCircleWrap}>
          <View
            style={[
              styles.selectCircle,
              selected && styles.selectCircleSelected,
            ]}
          >
            {selected ? (
              <MaterialIcons
                name="check-circle"
                size={18}
                color={colors.secondary}
              />
            ) : null}
          </View>
        </View>
      ) : null}

      <View style={styles.card}>
        <Image
          source={{ uri: item.image }}
          style={[styles.image, { height: item.height }]}
          contentFit="cover"
        />
        <View style={styles.gradientOverlay} />
        <View style={styles.badgeWrap}>
          <Text
            style={[
              styles.badge,
              { color: tint, backgroundColor: tintWithOpacity(tint, 0.2) },
            ]}
          >
            {item.title}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

function tintWithOpacity(hex: string, opacity: number) {
  const r = Number.parseInt(hex.slice(1, 3), 16);
  const g = Number.parseInt(hex.slice(3, 5), 16);
  const b = Number.parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${opacity})`;
}

const styles = StyleSheet.create({
  item: {
    marginBottom: 12,
  },
  selectCircleWrap: {
    position: 'absolute',
    top: 12,
    left: 12,
    zIndex: 10,
  },
  selectCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.secondary,
    backgroundColor: 'rgba(0,0,0,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectCircleSelected: {
    backgroundColor: colors.secondary,
  },
  card: {
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(255,255,255,0.1)',
    backgroundColor: colors.surfaceContainerLow,
  },
  image: {
    width: '100%',
  },
  gradientOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 70,
    backgroundColor: 'rgba(0,0,0,0.42)',
  },
  badgeWrap: {
    position: 'absolute',
    left: 12,
    right: 12,
    bottom: 12,
  },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    overflow: 'hidden',
    fontSize: 10,
    lineHeight: 16,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
});
