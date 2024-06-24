import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {COLORS} from '../images/authimage/theme';
import Headercomponent from '../component/Headercomponent';
import Textinputcomponent from '../component/Textinputcomponent';
import Buttoncomponent from '../component/Buttoncomponent';
import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('screen');
const Otpverification = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.background}}>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <Headercomponent title={'Forgot Password'} />
        <View
          style={{
            backgroundColor: 'white',
            padding: 20,
            marginHorizontal: 10,
          }}>
          <Textinputcomponent
            label={'Enter verification code'}
            placeholder={'Please enter 6 digit code'}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={styles.text}>
              If you didn’t receive a code!{' '}
              <Text style={{color: 'black'}}>Resend</Text>
            </Text>
            <Text style={{color: COLORS.buttoncolor}}>20s</Text>
          </View>
          <View style={{marginTop: height * 0.35}}>
            <Buttoncomponent
              label={'Next'}
              backgroundColor={'#D4D4D4'}
              color={'rgba(125, 125, 125, 1)'}
              size={'large'}
              borderColor={'#D4D4D4'}
              onPress={() => navigation.navigate('ResetPassword')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Otpverification;
const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 16,
    color: COLORS.textcolor,
    marginVertical: height * 0.02,
  },
});
