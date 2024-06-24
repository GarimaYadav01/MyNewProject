import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {COLORS, IMAGES} from '../images/authimage/theme';
import Textinputcomponent from '../component/Textinputcomponent';
import {Text} from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';
import Buttoncomponent from '../component/Buttoncomponent';
import {useNavigation} from '@react-navigation/native';
import {showMessage} from 'react-native-flash-message';
const {width, height} = Dimensions.get('screen');
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});

const LoginScreen = () => {
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
            <Text style={styles.heandingtext}>Login</Text>
            <Text style={styles.text}>
              Don’t have an account?{' '}
              <Text
                style={{color: COLORS.buttoncolor}}
                onPress={() => navigation.navigate('Singupscreen')}>
                {' '}
                Sign up
              </Text>{' '}
            </Text>
          </View>
          <Formik
            initialValues={{email: '', password: ''}}
            validationSchema={validationSchema}
            onSubmit={values => {
              console.log(values);
              showMessage({
                message: 'Login Successfully',
                type: 'success',
                icon: 'success',
              });
              navigation.navigate('Bottomnavigation');
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
              <View style={{padding: 20}}>
                <Textinputcomponent
                  label="Email"
                  placeholder="Enter your email"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  maxLength={200}
                  value={values.email}
                  error={touched.email && errors.email ? errors.email : ''}
                />
                <Textinputcomponent
                  label="Password"
                  inputType={'password'}
                  placeholder="Enter your password"
                  secureTextEntry
                  onChangeText={handleChange('password')}
                  maxLength={10}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  error={
                    touched.password && errors.password ? errors.password : ''
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
                    tintColors={{true: 'rgba(255, 120, 22, 1)', false: 'black'}}
                    style={styles.checkbox}
                  />
                  <Text style={styles.text}>Remember me</Text>
                </View>
                <View style={{alignItems: 'center', alignSelf: 'center'}}>
                  <Buttoncomponent
                    size="large"
                    label="Login"
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
                <TouchableOpacity
                  onPress={() => navigation.navigate('ForgetScreen')}>
                  <Text
                    style={[
                      styles.heandingtext,
                      {color: COLORS.buttoncolor, fontSize: 17},
                    ]}>
                    Forgot Password?
                  </Text>
                </TouchableOpacity>
                <Text style={styles.trems}>
                  Terms & Conditions <Text style={{color: 'black'}}>and</Text>{' '}
                  Privacy policy.{' '}
                </Text>
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

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
});
