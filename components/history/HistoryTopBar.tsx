import { MaterialIcons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';

import { avatarImage } from './data';
import { colors } from './styles';

export function HistoryTopBar() {
  return (
    <View style={styles.header}>
      <View style={styles.brandRow}>
        <MaterialIcons name="menu" size={24} color={colors.primary} />
        <Text style={styles.brand}>LUMINA AI</Text>
      </View>

      <View style={styles.actionRow}>
        <View style={styles.iconButton}>
          <MaterialIcons
            name="search"
            size={24}
            color={colors.onSurfaceVariant}
          />
        </View>
        <View style={styles.avatarWrap}>
          <Image
            source={{ uri: avatarImage }}
            style={styles.avatar}
            contentFit="cover"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    height: 64,
    paddingHorizontal: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(255,255,255,0.1)',
    backgroundColor: 'rgba(32,31,31,0.7)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  brand: {
    color: colors.primary,
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '700',
    letterSpacing: -1.1,
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarWrap: {
    width: 32,
    height: 32,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: colors.primaryContainer,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
});
