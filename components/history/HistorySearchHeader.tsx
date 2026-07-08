import { MaterialIcons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import { colors } from './styles';

type HistorySearchHeaderProps = {
  selectionMode: boolean;
  onToggleSelection: () => void;
};

export function HistorySearchHeader({
  selectionMode,
  onToggleSelection,
}: HistorySearchHeaderProps) {
  return (
    <View style={styles.wrap}>
      <View style={styles.titleRow}>
        <View>
          <Text style={styles.title}>History</Text>
          <Text style={styles.count}>248 items created</Text>
        </View>
        <Pressable
          accessibilityRole="button"
          onPress={onToggleSelection}
          style={[
            styles.selectButton,
            selectionMode && styles.selectButtonActive,
          ]}
        >
          <Text style={styles.selectLabel}>
            {selectionMode ? 'Cancel' : 'Select'}
          </Text>
        </Pressable>
      </View>

      <View style={styles.searchBox}>
        <MaterialIcons
          name="search"
          size={24}
          color={colors.onSurfaceVariant}
          style={styles.searchIcon}
        />
        <TextInput
          placeholder="Search creations..."
          placeholderTextColor="rgba(207,194,214,0.4)"
          style={styles.searchInput}
          selectionColor={colors.secondary}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginBottom: 32,
    gap: 16,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  title: {
    color: colors.onSurface,
    fontSize: 32,
    lineHeight: 40,
    fontWeight: '700',
    letterSpacing: -0.32,
  },
  count: {
    color: colors.onSurfaceVariant,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
    letterSpacing: 0.28,
  },
  selectButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 999,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  selectButtonActive: {
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  selectLabel: {
    color: colors.secondary,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
    letterSpacing: 0.28,
  },
  searchBox: {
    height: 50,
    borderRadius: 12,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(255,255,255,0.05)',
    backgroundColor: colors.surfaceContainerLowest,
    justifyContent: 'center',
  },
  searchIcon: {
    position: 'absolute',
    left: 16,
    zIndex: 1,
  },
  searchInput: {
    flex: 1,
    paddingLeft: 48,
    paddingRight: 16,
    color: colors.onSurface,
    fontSize: 16,
    lineHeight: 24,
  },
});
