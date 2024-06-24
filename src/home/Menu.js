import React, {useContext, useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {showMessage} from 'react-native-flash-message';
import LogoutModal from '../component/LogoutModal';
import {COLORS, ICONS, IMAGES} from '../images/authimage/theme';
const {height, width} = Dimensions.get('screen');
const Menu = () => {
  const navigation = useNavigation();
  const buttonData = [
    {
      id: '1',
      lable: 'Add to Card',
      image: ICONS.arrow,
      screen: 'Aaddtocard',
      logo: IMAGES.account,
    },
   

   
  ];
  const handleMenuItemPress = screen => {
    navigation.navigate(screen);
  };
  const [modalVisible, setModalVisible] = useState(false);
  const handleLogout = () => {
    setModalVisible(false);
    navigation.navigate('LoginScreen');
  };

  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: '#F4F4F4', paddingBottom: 20}}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={{flex: 1}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: height * 0.04,
            }}>
        <Image source={IMAGES.logoimage} style={{width:width*0.6,height:100}} resizeMode='contain'/>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={[styles.label, {fontWeight: '500'}]}>
              Faizan@gmail.com
            </Text>
            <Text style={styles.label}>Faizi_21</Text>
          </View>
          <View style={styles.container1}>
            {buttonData.map((button, index) => (
              <TouchableOpacity
                key={button.id}
                style={styles.buttonContainer}
                onPress={() => handleMenuItemPress(button.screen)}>
                <View
                  style={{
                    flexDirection: 'row',
                    columnGap: 10,
                    alignItems: 'center',
                  }}>
                  <Image source={button.logo} style={styles.logo} />
                  <Text style={styles.label}>{button.lable}</Text>
                </View>
                <Image source={button.image} style={styles.icon} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => setModalVisible(true)}>
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                columnGap: 10,
              }}>
              <Image source={IMAGES.logout} style={styles.logo} />
              <Text style={styles.label}>Logout</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <LogoutModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onLogout={handleLogout}
      />
    </SafeAreaView>
  );
};
export default Menu;
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'white',
    // textAlign: "center"
  },
  con: {
    backgroundColor: '#004E8C',
    // height: height * 0.15,
    width: width,
    alignSelf: 'center',
    // borderRadius: 10,
    elevation: 1,
    shadowOpacity: 2,
    height: height * 0.15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderBottomWidth: 1,
    borderWidth: 1,
  },
  container: {
    flexGrow: 1,
    // paddingBottom: 100,
  },
  img: {
    height: 150,
    width: 150,
    alignSelf: 'center',
  },

  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    marginTop: height * 0.02,
    width: width * 0.9,
    borderColor: '#FFFFFF',
    borderRadius: 10,
  },
  label: {
    fontSize: 17,
    marginRight: 10,
    color: COLORS.headingcolor,
    fontWeight: '400',
  },
  icon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
  // container1: {
  //     flex: 1,
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //   },
  text1: {
    color: 'black',
    fontSize: 15,
    width: width * 0.4,
  },
  text2: {
    color: 'black',
    fontSize: 17,
    // width: width * 0.4,
    fontWeight: 'bold',
  },
  container1: {
    alignItems: 'center',
  },
  btnsmal: {
    width: width * 0.3,
    borderWidth: 1,
    justifyContent: 'center',
    backgroundColor: '#004E8C',
    borderColor: '#004E8C',
    borderRadius: 5,
    padding: 5,
    marginTop: 10,
  },

  refer: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },

  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  iconbutton: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: height * 0.14,
    marginLeft: width * 0.2,
  },
  icon2: {
    width: 30,
    height: 30,
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});
