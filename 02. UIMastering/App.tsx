import { StyleSheet, Text, View } from 'react-native';
import InfoScreen from './src/screens/InfoScreen';
import ContactUs from './src/screens/ContactUs';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeScreen from './src/screens/HomeScreen';
import PaymentScreen from './src/screens/PaymentScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* <InfoScreen /> */}
      {/* <ContactUs /> */}
      {/* <HomeScreen /> */}
      <PaymentScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
