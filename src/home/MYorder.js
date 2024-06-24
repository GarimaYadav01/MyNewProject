import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import {COLORS, ICONS, IMAGES} from '../images/authimage/theme';
import {useNavigation} from '@react-navigation/native';
import AuthContext from '../component/AuthContext';
import Buttoncomponent from '../component/Buttoncomponent';
const {width, height} = Dimensions.get('screen');

const MYorder = () => {
  const navigation = useNavigation();
  const {products, loading, error, fetchProducts} = useContext(AuthContext);
  const [selectedTab, setSelectedTab] = useState('All');
  useEffect(() => {
    fetchProducts(); // Fetch products when the component mounts
  }, []);

  const renderitme = ({item}) => {
    return (
      <View style={{marginBottom: 20, marginTop: 10}}>
        <TouchableOpacity style={styles.btn}>
          <View style={{flexDirection:"row",columnGap:20,alignItems:"center"}}>

  
          <View>
            <Image
              source={{uri: item.thumbnail}}
              style={{
                width: 100,
                height: 100,
                borderRadius: 20,
                // backgroundColor: 'red',
              }}
              resizeMode="contain"
            />
          </View>
          <View>
            <Text style={[styles.itemText,{width:width*0.5}]}>{item.title}</Text>
            <Text
              style={[
                styles.itemText,
                {
                  color: ' rgba(255, 120, 22, 1)',
                  fontSize: 15,
                  fontWeight: '500',
                },
              ]}>
              {item.price} <Text style={{color: 'black'}}>/piece</Text>
            </Text>
            <Text
              style={{
                color: 'rgba(82, 82, 82, 1)',
                fontSize: 13,
                fontWeight: '500',
              }}>
              MOQ :
              <Text style={{fontWeight: '300', fontSize: 12}}>1 Piece</Text>{' '}
            </Text>
            <Text
              style={{
                color: 'rgba(82, 82, 82, 1)',
                fontSize: 13,
                fontWeight: '500',
              }}>
              Sold by :{' '}
              <Text style={{fontWeight: '300', fontSize: 12}}>
                Appario Retail Pvt Ltd
              </Text>
            </Text>
         
          </View>
          </View>
          <Text style={{fontSize:13,color:"black",marginTop:20}}>Expected Delivery : 23 August 2024 </Text>
        </TouchableOpacity>
      
      </View>
    );
  };

  data = [
    {
      id: '1',
      name: 'All ',
    },
    {
      id: '2',
      name: 'Upcomming',
    },
    {
      id: '3',
      name: 'Delivered',
    },
    {
      id: '4',
      name: 'Cancelled',
    },
    {
      id: '5',
      name: 'Returned',
    },
  ];

  const renderTab = ({item}) => {
    return (
      <TouchableOpacity
        style={[
          styles.btn2,
          {
            backgroundColor:
              selectedTab === item.name ? 'rgba(255, 120, 22, 1)' : 'white',
          },
        ]}
        onPress={() => {
          setSelectedTab(item.name);
        }}>
        <Text
          style={[
            styles.name,
            {color: selectedTab === item.name ? 'white' : 'black'},
          ]}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.background}}>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottomWidth: 1,
              borderBottomColor: 'lightgray',
              paddingHorizontal: 20,
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('Porfile')}>
              <Image
                source={require('../images/menu/menu.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
            <Image
              source={IMAGES.logoimage}
              style={{width: width * 0.4, height: 80}}
              resizeMode="contain"
            />
            <Image
              source={require('../images/menu/ph_bell-light.png')}
              style={{width: 30, height: 30}}
              resizeMode="contain"
            />
            <Image
              source={require('../images/menu/inbox.png')}
              style={{width: 30, height: 30}}
              resizeMode="contain"
            />
          </View>

          <View style={{marginHorizontal: 20, marginTop: 10}}>
            <Text style={{fontSize: 30, fontWeight: '600', color: 'black'}}>
              My Orders
            </Text>
            <View style={{height: height * 0.1}}>
              <FlatList
                data={data}
                renderItem={renderTab}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
          <FlatList
            data={products}
            renderItem={renderitme}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.listContainer}
            ListEmptyComponent={() => (
              <View style={styles.emptyListContainer}>
                <Text style={styles.emptyListText}>No data found</Text>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MYorder;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    width: width * 0.7,
    color: 'black',
    padding: 10,
    height: height * 0.07,
    borderColor: 'lightgray',
  },
  btn: {
    backgroundColor: 'rgba(242, 244, 249, 1)',
    columnGap: 10,
    marginHorizontal: 10,
    // width: width * 0.45,
    // justifyContent: 'center',
    // alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'rgba(242, 244, 249, 1)',
    // flexDirection:"row"
  },
  row: {
    justifyContent: 'space-between',
  },
  swiperImage: {
    width: '100%',
    height: '100%',
  },
  listContainer: {
    padding: 10,
  },
  emptyListContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },
  emptyListText: {
    fontSize: 18,
    color: 'gray',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'black',
    marginHorizontal: 4,
  },
  itemText: {
    color: 'black',
    fontSize: 15,
    fontWeight: '500',
  },
  btn2: {
    borderWidth: 1,
    backgroundColor: 'rgba(224, 231, 242, 1)',
    padding: 10,
    borderColor: 'rgba(224, 231, 242, 1)',
    // columnGap:10,
    marginHorizontal: 10,
    textAlign: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: height * 0.03,
  },
});
