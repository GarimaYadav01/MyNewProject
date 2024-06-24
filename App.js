import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Navigation from './src/navigation/Navigation';
import FlashMessage from 'react-native-flash-message';
import { AuthProvider } from './src/component/AuthContext';


const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <AuthProvider>
        <Navigation />
        <FlashMessage position={'top'} />
      </AuthProvider>
    </SafeAreaView>
  );
};

export default App;
const styles = StyleSheet.create({});
