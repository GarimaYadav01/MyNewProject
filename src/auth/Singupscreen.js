import React, {useEffect, useRef, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Image,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {COLORS, ICONS, IMAGES} from '../images/authimage/theme';
import Textinputcomponent from '../component/Textinputcomponent';
import {Text} from 'react-native-paper';
import CountryPicker from 'react-native-country-picker-modal';
import CheckBox from '@react-native-community/checkbox';
import Buttoncomponent from '../component/Buttoncomponent';
import {useNavigation} from '@react-navigation/native';
import {showMessage} from 'react-native-flash-message';
import DatePicker from 'react-native-date-picker';
import PhoneInput from 'react-native-phone-input';
import {Dropdown} from 'react-native-element-dropdown';

const {width, height} = Dimensions.get('screen');
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Email is required'),
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
  user: Yup.string().required('User name is required'),

  firstname: Yup.string().required('Frist name is required'),
  lastname: Yup.string().required('Last name is required'),
});
const Singupscreen = () => {
  const navigation = useNavigation();
  const [rememberMe, setRememberMe] = useState(false);
  const [buttondisable, setButtondisable] = useState(true);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.background}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={{marginHorizontal: 20, marginTop: height * 0.04}}>
            <Image
              source={IMAGES.logoimage}
              style={styles.logoimage}
              resizeMode="contain"
            />
            <Text style={styles.heandingtext}>Sign Up</Text>
            <Text style={styles.text2}>
              Don’t have an account?{' '}
              <Text
                style={{color: COLORS.buttoncolor}}
                onPress={() => navigation.navigate('Singupscreen')}>
                {' '}
                Login
              </Text>{' '}
            </Text>
          </View>
          <View style={{marginHorizontal: 20, marginTop: height * 0.03}}>
            <Text style={styles.details}>Personal Details</Text>
          </View>
          <Formik
            initialValues={{
              email: '',
              password: '',
              confirmPassword: '',
              user: '',
              firstname: '',
              lastname: '',
            }}
            validationSchema={validationSchema}
            onSubmit={values => {
              console.log(values);
              showMessage({
                message: 'Singin  Successfully',
                type: 'success',
                icon: 'success',
              });
              navigation.navigate("Bottomnavigation")
            }}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              setFieldValue,
              values,
              errors,
              touched,
              isValid,
            }) => (
              <View style={{padding: 20}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View>
                    <Text style={styles.textInputLabel}>First Name</Text>
                    <TextInput
                      style={styles.inputContainer}
                      placeholder="Enter your first name"
                      placeholderTextColor={'gray'}
                      maxLength={40}
                      onChangeText={handleChange('firstname')}
                      onBlur={handleBlur('firstname')}
                      value={values.firstname}
                    />
                    {touched.firstname && errors.firstname && (
                      <Text style={styles.error}>{errors.firstname}</Text>
                    )}
                  </View>
                  <View>
                    <Text style={styles.textInputLabel}>Last Name</Text>
                    <TextInput
                      style={styles.inputContainer}
                      placeholder="Enter your last name"
                      placeholderTextColor={'gray'}
                      maxLength={40}
                      onChangeText={handleChange('lastname')}
                      onBlur={handleBlur('lastname')}
                      value={values.lastname}
                    />
                    {touched.lastname && errors.lastname && (
                      <Text style={styles.error}>{errors.lastname}</Text>
                    )}
                  </View>
                </View>
                <Textinputcomponent
                  label={'User name'}
                  placeholder={'Enter your user name'}
                  inputType={'person'}
                  onChangeText={handleChange('user')}
                  onBlur={handleBlur('user')}
                  maxLength={200}
                  value={values.user}
                  error={touched.user && errors.user ? errors.user : ''}
                />
                <Textinputcomponent
                  label="Email"
                  // inputType={'email'}
                  placeholder="Enter your email"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  maxLength={200}
                  value={values.email}
                  error={touched.email && errors.email ? errors.email : ''}
                />
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
                <Text style={styles.password}>Password Must Contains*</Text>
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
                            color: /[!@#$%^&*(),.?":{}|<>]/.test(
                              values.password,
                            )
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

                <View style={styles.checkboxContainer}>
                  <CheckBox
                    value={rememberMe}
                    onValueChange={newValue => {
                      setRememberMe(newValue);
                      setButtondisable(!newValue || !isValid);
                    }}
                    boxType="square"
                    onCheckColor="rgba(255, 120, 22, 1)"
                    tintColors={{true: COLORS.buttoncolor, false: 'black'}}
                    style={styles.checkbox}
                  />
                  <Text style={styles.trems}>
                    <Text style={{color: 'black'}}>I agree to the </Text>
                    Terms & Conditions{' '}
                    <Text style={{color: 'black'}}>ands</Text> Privacy policy.{' '}
                  </Text>
                </View>

                <View style={{alignItems: 'center', alignSelf: 'center'}}>
                  <Buttoncomponent
                    size="large"
                    label="Create Account"
                    color={
                      buttondisable
                        ? 'rgba(125, 125, 125, 1)'
                        : COLORS.background
                    }
                    backgroundColor={
                      buttondisable
                        ? 'rgba(212, 212, 212, 1)'
                        : COLORS.buttoncolor
                    }
                    borderColor={
                      buttondisable
                        ? 'rgba(212, 212, 212, 1)'
                        : COLORS.buttoncolor
                    }
                    onPress={handleSubmit}
                    disabled={buttondisable}
                  />
                </View>
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Singupscreen;
const styles = StyleSheet.create({
  logoimage: {
    width: width * 0.75,
    height: 70,
    alignSelf: 'center',
  },
  heandingtext: {
    fontSize: 30,
    color: COLORS.headingcolor,
    fontWeight: 'bold',
    marginVertical: height * 0.01,
    textAlign: 'center',
  },
  image: {
    width: width * 0.86,
    height: height * 0.4,
    marginVertical: 10,
  },
  text2: {
    color: COLORS.textcolor,
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
  },
  imgbackground: {
    width: width,
    height: height,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginVertical: height * 0.01,
    // backgroundColor:"red"
  },
  trems: {
    fontSize: 16,
    color: COLORS.buttoncolor,
    fontWeight: 400,
    textAlign: 'center',
    marginTop: height * 0.03,
  },
  details: {
    fontSize: 17,
    fontWeight: 'bold',
    color: COLORS.headingcolor,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width * 0.43,
    borderWidth: 1,
    paddingHorizontal: 10,
    // padding:10,
    borderRadius: 10,
    borderColor: '#F4F4F4',
    marginTop: height * 0.01,
    color: 'black',
    backgroundColor: '#F4F4F4',
  },
  textInputLabel: {
    color: COLORS.headingcolor,
    fontSize: 16,
    marginTop: 10,
    fontWeight: '600',
  },
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
  password: {
    color: COLORS.headingcolor,
    fontSize: 16,
    marginTop: 10,
    fontWeight: '600',
  },
  dateInput: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width * 0.86,
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderColor: '#F4F4F4',
    marginTop: height * 0.01,
    color: 'black',
    backgroundColor: '#F4F4F4',
    height: 50,
    justifyContent: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  error: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
  },
  phoneInputContainer: {
    // height: 40,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F4F4F4',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#F4F4F4',
  },
  flagStyle: {
    width: 30,
    height: 20,
  },
  inputContainer2: {
    height: 50,
    borderColor: '#F4F4F4',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 5,
    marginBottom: 15,
    backgroundColor: '#F4F4F4',
  },
});
