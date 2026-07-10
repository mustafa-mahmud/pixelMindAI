import { View } from 'react-native';

import { tools } from './data';
import { ToolCard } from './ToolCard';

export function ToolsGrid() {
  return (
    <View className="flex-row flex-wrap gap-6">
      {tools.map((tool) => (
        <ToolCard key={tool.title} tool={tool} />
      ))}
    </View>
  );
}
