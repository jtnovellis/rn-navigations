import { View, Text, Button } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/NavigationStack';

type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home',
  'MyStack'
>;
export default function HomeScreen(props: HomeScreenProps) {
  const { navigation } = props;
  function goToPageSettings() {
    navigation.navigate('Settings');
  }
  function goToPageProfile() {
    navigation.navigate('Profile', {
      userId: 5,
    });
  }
  return (
    <View>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Button title='Settings' onPress={goToPageSettings} />
      <Button title='Profile' onPress={goToPageProfile} />
    </View>
  );
}
