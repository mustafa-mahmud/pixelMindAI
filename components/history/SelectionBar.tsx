import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from './styles';

type SelectionBarProps = {
  selectedCount: number;
};

export function SelectionBar({ selectedCount }: SelectionBarProps) {
  if (selectedCount === 0) {
    return null;
  }

  return (
    <View style={styles.bar}>
      <Text style={styles.label}>{selectedCount} selected</Text>
      <View style={styles.actions}>
        <View style={styles.iconButton}>
          <MaterialIcons
            name="share"
            size={24}
            color={colors.onSurfaceVariant}
          />
        </View>
        <View style={styles.iconButton}>
          <MaterialIcons
            name="file-download"
            size={24}
            color={colors.onSurfaceVariant}
          />
        </View>
        <View style={styles.iconButton}>
          <MaterialIcons name="delete" size={24} color={colors.error} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    position: 'absolute',
    left: '10%',
    right: '10%',
    top: 150,
    zIndex: 60,
    padding: 16,
    borderRadius: 16,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(255,255,255,0.1)',
    backgroundColor: 'rgba(20,20,20,0.86)',
    shadowColor: '#000000',
    shadowOpacity: 0.4,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 12 },
    elevation: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    marginLeft: 8,
    color: colors.onSurface,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
    letterSpacing: 0.28,
  },
  actions: {
    flexDirection: 'row',
    gap: 8,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
