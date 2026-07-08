import { useMemo, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { historyItems } from '../../components/history/data';
import { HistorySearchHeader } from '../../components/history/HistorySearchHeader';
import { HistorySection } from '../../components/history/HistorySection';
import { HistoryTopBar } from '../../components/history/HistoryTopBar';
import { SelectionBar } from '../../components/history/SelectionBar';
import { colors } from '../../components/history/styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '@/components/Header';

function HistoryScreen() {
  const [selectionMode, setSelectionMode] = useState(false);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const todayItems = useMemo(
    () => historyItems.filter((item) => item.section === 'Today'),
    [],
  );
  const yesterdayItems = useMemo(
    () => historyItems.filter((item) => item.section === 'Yesterday'),
    [],
  );

  const toggleSelectionMode = () => {
    setSelectionMode((current) => {
      if (current) {
        setSelectedIds([]);
      }
      return !current;
    });
  };

  const handleItemPress = (id: string) => {
    if (!selectionMode) {
      return;
    }

    setSelectedIds((current) =>
      current.includes(id)
        ? current.filter((itemId) => itemId !== id)
        : [...current, id],
    );
  };

  return (
    <SafeAreaView style={styles.root} edges={['top', 'bottom']}>
      <Header />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        bounces={false}
        // className="mb-96"
      >
        <HistorySearchHeader
          selectionMode={selectionMode}
          onToggleSelection={toggleSelectionMode}
        />
        <HistorySection
          title="Today"
          items={todayItems}
          selectionMode={selectionMode}
          selectedIds={selectedIds}
          onItemPress={handleItemPress}
        />
        <HistorySection
          title="Yesterday"
          items={yesterdayItems}
          selectionMode={selectionMode}
          selectedIds={selectedIds}
          onItemPress={handleItemPress}
        />
      </ScrollView>
      <SelectionBar selectedCount={selectionMode ? selectedIds.length : 0} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    minHeight: 884,
    backgroundColor: colors.background,
  },
  scroll: {
    flex: 1,
  },
  content: {
    paddingTop: 96,
    paddingHorizontal: 20,
    paddingBottom: 128,
  },
});

export default HistoryScreen;
