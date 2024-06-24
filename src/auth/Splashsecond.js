import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {COLORS, IMAGES} from '../images/authimage/theme';
import Buttoncomponent from '../component/Buttoncomponent';
import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('screen');
const Splashsecond = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.background}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={require('../images/authimage/Splash.png')}
          style={styles.imgbackground}>
          <View style={{marginHorizontal: 20, marginTop: height * 0.04}}>
            <Image
              source={IMAGES.logoimage}
              style={styles.logoimage}
              resizeMode="contain"
            />
            <Text style={styles.heandingtext}>"Welcome to Bizvisor!"</Text>
            <Text style={styles.text}>
              Turn your steps into Coins(1₩=1₹) Achieve your fitness goals and
              Get started on the journey to a healthier you today!
            </Text>
            <Image source={IMAGES.handimgsplash} style={styles.image} />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Buttoncomponent
                size={'small'}
                color={'white'}
                backgroundColor={COLORS.buttoncolor}
                label={'Sign Up'}
                borderColor={COLORS.buttoncolor}
                onPress={() => navigation.navigate('Singupscreen')}
              />
              <Buttoncomponent
                size={'small'}
                color={COLORS.buttondisable}
                backgroundColor={COLORS.background}
                label={'Login'}
                borderColor={COLORS.buttondisable}
                onPress={() => navigation.navigate('LoginScreen')}
              />
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Splashsecond;
const styles = StyleSheet.create({
  logoimage: {
    width: width * 0.9,
    height: 100,
  },
  heandingtext: {
    fontSize: 30,
    color: COLORS.headingcolor,
    fontWeight: 'bold',
    marginVertical: height * 0.01,
  },
  image: {
    width: width * 0.9,
    height: height * 0.4,
    marginVertical: 10,
  },
  text: {
    color: COLORS.textcolor,
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
  },
  imgbackground: {
    width: width,
    height: height,
  },
});
