import { ScrollView, View } from 'react-native';

import {
  UploadActionGrid,
  UploadBackground,
  UploadDropzone,
  UploadFooter,
  UploadFormatHint,
  UploadTopBar,
} from '../components/upload';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function UploadScreen() {
  return (
    <SafeAreaView
      edges={['top', 'bottom']}
      style={{
        flex: 1,
        backgroundColor: '#000',
      }}
    >
      <ScrollView>
        <View className="relative mb-12 flex-1 overflow-hidden bg-black">
          <UploadBackground />
          <UploadTopBar />

          <View className="mx-auto mt-16 w-full max-w-lg flex-1 items-center justify-center px-5 pb-32">
            <UploadDropzone />
            <UploadActionGrid />
            <UploadFormatHint />
          </View>

          <UploadFooter />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
