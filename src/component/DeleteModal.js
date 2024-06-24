import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Buttoncomponent from './Buttoncomponent';
import {COLORS} from '../images/authimage/theme';
const {height, width} = Dimensions.get('screen');
const DeleteModal = ({visible, onClose, onLogout}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Image
            source={require('../images/accountprofile/info.png')}
            resizeMode="contain"
            style={{width: 70, height: 70}}
          />
          <Text style={styles.modalText}>
            Are you sure about to delete your account ?
          </Text>
          <View style={styles.discription}>
            <Text style={{color: 'black', fontSize: 16, fontWeight: '500'}}>
              Disclaimer:-
            </Text>
            <Text style={styles.text2}>
              Please note that deleting your account will result in the
              permanent loss of all your data stored in our system. Once your
              account is deleted, the information cannot be recovered. We highly
              recommend backing up any important data or files before proceeding
              with the deletion process. If you have any concerns or questions
              about this, please reach out to our support team for assistance.
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              columnGap: 20,
              //   alignSelf: 'center',
            }}>
            {/* <TouchableOpacity onPress={onClose} style={styles.btn}>
              <Text style={styles.text}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onLogout} style={styles.btn}>
              <Text style={styles.text}>Logout</Text>
            </TouchableOpacity> */}
            <Buttoncomponent
              size={'small'}
              label={'Cancle'}
              color={'#000000'}
              onPress={onClose}
              backgroundColor={'#D4D4D4'}
              borderColor={'#D4D4D4'}
            />
            <Buttoncomponent
              size={'small'}
              label={'Delete'}
              color={COLORS.background}
              onPress={onLogout}
              backgroundColor={COLORS.buttoncolor}
              borderColor={COLORS.buttoncolor}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DeleteModal;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
    width: width * 0.9,
  },
  modalText: {
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'Roboto-MediumItalic',
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
  },
  btn: {
    width: width * 0.3,
    height: height * 0.06,
    borderWidth: 1,
    backgroundColor: '#004E8C',
    borderColor: '#f5fffa',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    color: '#FFF',
    fontFamily: 'Roboto-BoldItalic',
    fontSize: 16,
  },
  text2: {
    fontSize: 15,
    color: COLORS.textcolor,
    marginTop: height * 0.02,
    lineHeight: 22,
  },
  discription: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.05)',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 10,
    padding: 10,
  },
});
