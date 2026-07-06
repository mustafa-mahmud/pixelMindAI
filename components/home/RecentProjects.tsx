import { Image, StyleSheet, Text, View } from 'react-native';

import { PROJECT_COLUMNS } from './data';

type Project = {
  title: string;
  image: string;
  aspect: number;
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <View
      className="relative overflow-hidden rounded-[24px]"
      style={{ aspectRatio: project.aspect }}
    >
      <Image
        source={{ uri: project.image }}
        className="h-full w-full"
        style={styles.cover}
      />
      <View
        className="absolute bottom-0 left-0 right-0 p-4"
        style={styles.scrim}
      >
        <Text
          className="font-label-sm text-label-sm text-white"
          numberOfLines={1}
        >
          {project.title}
        </Text>
      </View>
    </View>
  );
}

export function RecentProjects() {
  return (
    <View className="gap-4">
      <Text className="font-label-md text-label-md font-bold text-on-surface">
        Recent Projects
      </Text>

      <View className="flex-row items-start gap-4">
        {PROJECT_COLUMNS.map((column, index) => (
          <View
            key={index}
            className={`flex-1 gap-4 ${index === 1 ? 'pt-8' : ''}`}
          >
            {column.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cover: {
    resizeMode: 'cover',
  },
  scrim: {
    height: 72,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.58)',
  },
});
