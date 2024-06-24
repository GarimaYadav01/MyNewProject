import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
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
const ResetPassword = () => {
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(/\d/, 'Password must contain at least one number')
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        'Password must contain at least one symbol',
      )
      .required('Please enter your password'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Please confirm your password'),
  });
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.background}}>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <Headercomponent title={'Reset password'} />
        <Formik
          initialValues={{password: '', confirmPassword: ''}}
          validationSchema={validationSchema}
          onSubmit={values => {
            console.log(values);
            navigation.navigate('LoginScreen');
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
              <Textinputcomponent
                label={'Create New Password'}
                placeholder={'Please enter your new password'}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                maxLength={200}
                value={values.password}
                error={
                  touched.password && errors.password ? errors.password : ''
                }
              />
              <View style={{flexDirection: 'column', width: width * 0.9}}>
                <View style={{flexDirection: 'row', columnGap: 10}}>
                  <TouchableOpacity
                    style={[
                      styles.btn,
                      {
                        backgroundColor:
                          values.password.length >= 8
                            ? COLORS.buttoncolor
                            : 'rgba(217, 36, 39, 0.25)',
                      },
                    ]}>
                    <Image
                      source={require('../images/authimage/check.png')}
                      style={styles.img}
                    />
                    <Text
                      style={[
                        styles.text,
                        {
                          color:
                            values.password.length >= 8
                              ? COLORS.background
                              : COLORS.buttoncolor,
                        },
                      ]}>
                      8 Characters
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.btn,
                      {
                        backgroundColor: /\d/.test(values.password)
                          ? COLORS.buttoncolor
                          : 'rgba(217, 36, 39, 0.25)',
                      },
                    ]}>
                    <Image
                      source={require('../images/authimage/check.png')}
                      style={styles.img}
                    />
                    <Text
                      style={[
                        styles.text,
                        {
                          color: /\d/.test(values.password)
                            ? COLORS.background
                            : COLORS.buttoncolor,
                        },
                      ]}>
                      1 Number
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', columnGap: 10}}>
                  <TouchableOpacity
                    style={[
                      styles.btn,
                      {
                        backgroundColor: /[a-z]/.test(values.password)
                          ? COLORS.buttoncolor
                          : 'rgba(217, 36, 39, 0.25)',
                      },
                    ]}>
                    <Image
                      source={require('../images/authimage/check.png')}
                      style={styles.img}
                    />
                    <Text
                      style={[
                        styles.text,
                        {
                          color: /[a-z]/.test(values.password)
                            ? COLORS.background
                            : COLORS.buttoncolor,
                        },
                      ]}>
                      1 Lowercase letter
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.btn,
                      {
                        backgroundColor: /[A-Z]/.test(values.password)
                          ? COLORS.buttoncolor
                          : 'rgba(217, 36, 39, 0.25)',
                      },
                    ]}>
                    <Image
                      source={require('../images/authimage/check.png')}
                      style={styles.img}
                    />
                    <Text
                      style={[
                        styles.text,
                        {
                          color: /[A-Z]/.test(values.password)
                            ? COLORS.background
                            : COLORS.buttoncolor,
                        },
                      ]}>
                      1 Uppercase letter
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', columnGap: 10}}>
                  <TouchableOpacity
                    style={[
                      styles.btn,
                      {
                        backgroundColor: /\d/.test(values.password)
                          ? COLORS.buttoncolor
                          : 'rgba(217, 36, 39, 0.25)',
                      },
                    ]}>
                    <Image
                      source={require('../images/authimage/check.png')}
                      style={styles.img}
                    />
                    <Text
                      style={[
                        styles.text,
                        {
                          color: /\d/.test(values.password)
                            ? COLORS.background
                            : COLORS.buttoncolor,
                        },
                      ]}>
                      1 Number
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.btn,
                      {
                        backgroundColor: /[!@#$%^&*(),.?":{}|<>]/.test(
                          values.password,
                        )
                          ? COLORS.buttoncolor
                          : 'rgba(217, 36, 39, 0.25)',
                      },
                    ]}>
                    <Image
                      source={require('../images/authimage/check.png')}
                      style={styles.img}
                    />
                    <Text
                      style={[
                        styles.text,
                        {
                          color: /[!@#$%^&*(),.?":{}|<>]/.test(values.password)
                            ? COLORS.background
                            : COLORS.buttoncolor,
                        },
                      ]}>
                      1 Symbol
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Textinputcomponent
                label={'Confirm Password'}
                placeholder={'Please enter your confirm password'}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                maxLength={200}
                value={values.confirmPassword}
                error={
                  touched.confirmPassword && errors.confirmPassword
                    ? errors.confirmPassword
                    : ''
                }
              />
              <View style={{marginTop: height * 0.16}}>
                <Buttoncomponent
                  label={'Send Verification Code'}
                  backgroundColor={
                    isValid ? COLORS.buttoncolor : COLORS.buttoncolor
                  }
                  color={COLORS.background}
                  size={'large'}
                  borderColor={
                    isValid ? COLORS.buttoncolor : COLORS.buttoncolor
                  }
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

export default ResetPassword;

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    fontWeight: '500',
    color: COLORS.buttoncolor,
  },
  img: {
    width: 15,
    height: 15,
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 1,
    padding: 10,
    borderRadius: 50,
    backgroundColor: 'rgba(217, 36, 39, 0.25)',
    borderColor: 'rgba(217, 36, 39, 0.25)',
    width: width * 0.4,
    columnGap: 10,
    marginVertical: 5, // Add some space between the validation buttons
  },
});
