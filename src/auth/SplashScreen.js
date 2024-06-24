import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions,
} from 'react-native';
import React, {useEffect} from 'react';
import {IMAGES} from '../images/authimage/theme';
import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('screen');
const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('LoginScreen');
    }, 3000);

    return () => clearTimeout(timeout);
  }, [navigation]);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {/* <Image source={IMAGES.backgroundimage} style={styles.img} />
         */}
         <Image source={IMAGES.logoimage} style={styles.img}/>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
const styles = StyleSheet.create({
  img: {
    width: width*0.9,
    height: height*0.9,
    resizeMode:"contain"
  },
});
