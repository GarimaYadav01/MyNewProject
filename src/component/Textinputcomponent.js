import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {COLORS} from '../images/authimage/theme';
const {width, height} = Dimensions.get('screen');
const Textinputcomponent = ({
  label,
  placeholder,
  secureTextEntry,
  inputType,
  maxLength,
  onChangeText,
  value,
  onBlur,
  disabled,
  error,
}) => {
  let imageSource;
  let iconStyle = styles.icon;
  switch (inputType) {
    case 'email':
      imageSource = require('../images/authimage/otpbutton.png');
      iconStyle = styles.emailIcon;
      break;
    case 'phone':
      imageSource = require('../images/image/Phone.png');
      break;
    case 'person':
      imageSource = require('../images/authimage/user.png');
      break;
    default:
      imageSource = null;
  }
  const [isPasswordVisible, setPasswordVisibility] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisibility(!isPasswordVisible);
  };
  return (
    <View>
      <Text style={styles.textInputLabel}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputField}
          placeholder={placeholder}
          secureTextEntry={!isPasswordVisible && secureTextEntry}
          onChangeText={onChangeText}
          onBlur={onBlur}
          value={value}
          maxLength={maxLength}
          placeholderTextColor={'gray'}
          editable={!disabled}
        />
        {imageSource && (
          <TouchableOpacity>
            <Image source={imageSource} style={iconStyle} />
          </TouchableOpacity>
        )}
        {inputType === 'password' && (
          <TouchableWithoutFeedback onPress={togglePasswordVisibility}>
            <Image
              source={
                isPasswordVisible
                  ? require('../images/image/eyes.png')
                  : require('../images/image/closeyes.png')
              }
              style={styles.eyeIcon}
            />
          </TouchableWithoutFeedback>
        )}
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
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
  },
  icon: {
    marginRight: 10,
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  emailIcon: {
    // New style for the email icon
    // marginRight: 10,
    width: 60,
    height: 50,
    resizeMode: 'contain',
  },
  eyeIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  inputField: {
    flex: 1,
    color: 'black',
  },
  textInputLabel: {
    color: COLORS.headingcolor,
    fontSize: 16,
    marginTop: 10,
    fontWeight: '600',
  },
  error: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
  },
});

export default Textinputcomponent;
