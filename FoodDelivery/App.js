import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './Screens/LoginScreen';
import SplashScreen from './Screens/SplashScreen';
import RegisterScreen from './Screens/RegisterScreen';
import HomeScreen from './Screens/HomeScreen';
import SearchSreen from './Screens/SearchSreen';
import AddCartScreen from './Screens/AddCartScreen';
import CartScreen from './Screens/CartScreen';
import CongratulationsScreen from './Screens/CongratulationsScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <CongratulationsScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
