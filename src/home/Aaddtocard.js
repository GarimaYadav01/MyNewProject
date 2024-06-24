import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  SafeAreaView,
} from 'react-native';
import React, {useContext} from 'react';
import AuthContext from '../component/AuthContext';
import Headercomponent from '../component/Headercomponent';

const Aaddtocard = () => {
  const {cart} = useContext(AuthContext);

  const renderCartItem = ({item}) => (
    <View style={styles.cartItem}>
      <Image source={{uri: item.thumbnail}} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{flex:1,}}>
        <Headercomponent title={"Add To Card"}/>
      <View style={styles.container}>
        <Text style={styles.heading}>Your Cart</Text>
        <FlatList
          data={cart}
          renderItem={renderCartItem}
          keyExtractor={item => item.id.toString()}
          ListEmptyComponent={
            <Text style={styles.emptyText}>Your cart is empty</Text>
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default Aaddtocard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  cartItem: {
    flexDirection: 'row',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: 100,
    height: 100,
  },
  info: {
    padding: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  price: {
    fontSize: 16,
    color: 'green',
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 18,
    color: 'gray',
  },
});
