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
import {Formik} from 'formik';
import * as Yup from 'yup';
import Buttoncomponent from '../component/Buttoncomponent';
import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('screen');
const ForgetScreen = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Please enter valid email/mobile'),
  });
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.background}}>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <Headercomponent title={'Forgot Password'} />
        <Formik
          initialValues={{email: '', password: ''}}
          validationSchema={validationSchema}
          onSubmit={values => {
            console.log(values);
            navigation.navigate('ResetPassword');
          }}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            isValid,
          }) => (
            <View
              style={{
                backgroundColor: 'white',
                padding: 20,
                marginHorizontal: 10,
              }}>
              <Text style={styles.text}>
                Please enter the 6 digits OTP sent on your registered Email ID
                abc@mailinator.com. The code is valid for 3 minute.
              </Text>
              <Textinputcomponent
                label={'Email/Mobile'}
                placeholder={'Enter your email or mobile number'}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                maxLength={200}
                value={values.email}
                error={touched.email && errors.email ? errors.email : ''}
              />
              <View style={{marginTop: height * 0.35}}>
                <Buttoncomponent
                  label={'Send Verification Code'}
                  backgroundColor={COLORS.buttoncolor}
                  color={COLORS.background}
                  size={'large'}
                  borderColor={COLORS.buttoncolor}
                  onPress={handleSubmit}
                />
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgetScreen;

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 16,
    color: COLORS.textcolor,
    marginVertical: height * 0.02,
  },
});
