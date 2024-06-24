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
import {ICONS} from '../images/authimage/theme';
const {height, width} = Dimensions.get('screen');
const ModalMenu = ({visible, onClose}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity onPress={onClose}>
            <Image source={ICONS.cross} style={styles.crossicon} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn}>
            <Image source={ICONS.play} style={styles.icon} />
            <Text style={styles.text}>Play Synchronization</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Image source={ICONS.clound} style={styles.icon} />
            <Text style={styles.text}>Disconnect Domain </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Image source={ICONS.delete} style={styles.icon} />
            <Text style={styles.text}>Delete form List of Domains</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalMenu;
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
    width: width * 0.9,
    // alignItems: 'center',
    elevation: 5,
  },
  modalText: {
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'Roboto-MediumItalic',
    color: 'black',
    fontSize: 18,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
    // justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    marginTop: height * 0.02,
    paddingBottom: 10,
  },
  text: {
    color: 'black',
    fontFamily: 'Roboto-BoldItalic',
    fontSize: 16,
  },
  icon: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  crossicon: {
    width: 15,
    height: 15,
    marginLeft: width * 0.75,
    resizeMode: 'contain',
  },
});
