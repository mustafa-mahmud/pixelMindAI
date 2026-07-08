import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

import { colors } from './styles';

const tabs = [
  { name: 'home', active: false },
  { name: 'auto-fix-high', active: false },
  { name: 'add-a-photo', active: false },
  { name: 'history', active: true },
  { name: 'person', active: false },
] as const;

export function HistoryBottomNavigation() {
  return (
    <View style={styles.nav}>
      {tabs.map((tab) => (
        <View
          key={tab.name}
          style={[styles.tab, tab.active && styles.activeTab]}
        >
          <MaterialIcons
            name={tab.name}
            size={24}
            color={tab.active ? colors.secondary : colors.onSurfaceVariant}
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    position: 'absolute',
    left: '5%',
    right: '5%',
    bottom: 24,
    zIndex: 50,
    borderRadius: 999,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(255,255,255,0.1)',
    backgroundColor: 'rgba(28,27,27,0.78)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    shadowColor: colors.secondary,
    shadowOpacity: 0.15,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 0 },
    elevation: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  tab: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTab: {
    backgroundColor: 'rgba(76,215,246,0.2)',
    shadowColor: colors.secondary,
    shadowOpacity: 0.3,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 0 },
    elevation: 10,
  },
});
