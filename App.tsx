import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import StorybookUI from './.storybook'

const Main: React.FC = () => {
  return <View style={styles.container}>
  <Text>Open up App.tsx to start working on your app!</Text>
  <StatusBar style="auto" />
</View>
}

export default function App() {

  const STORYBOOK_ON: string | undefined = Constants.expoConfig?.extra?.STORYBOOK_ON;
  return STORYBOOK_ON === 'true' ? <StorybookUI /> : <Main />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
