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
import {showMessage} from 'react-native-flash-message';

const {width, height} = Dimensions.get('screen');

const HomeScreen = () => {
  const navigation = useNavigation();
  const {
    products,
    loading,
    error,
    fetchProducts,
    searchProducts,
    addToCart,
    cart,
  } = useContext(AuthContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchProducts(); // Fetch products when the component mounts
  }, []);

  const images = [
    IMAGES.frameimage, // Add your image sources here
    IMAGES.newimage,
    IMAGES.frameimage, // Add another image here
  ];

  // Change index every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      searchProducts(searchQuery);
    }
  };

  const handleAddToCart = product => {
    addToCart(product);
    showMessage({
      message: 'Add card successfully',
      icon: 'success',
      type: 'success',
    });
  };

  const renderProduct = ({item}) => {
    return (
      <View style={{marginBottom: 20, marginTop: 10}}>
        <TouchableOpacity style={styles.btn}>
          <Image
            source={{uri: item.thumbnail}}
            style={{
              width: 150,
              height: 150,
              borderRadius: 10,
            }}
            resizeMode="contain"
          />
          <Text style={styles.itemText}>{item.title}</Text>
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
            MOQ :<Text style={{fontWeight: '300', fontSize: 12}}>1 Piece</Text>
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
          <Buttoncomponent
            size={'small'}
            color={COLORS.background}
            backgroundColor={COLORS.buttoncolor}
            borderColor={COLORS.buttoncolor}
            label={'Contact Seller'}
            onPress={() => handleAddToCart(item)}
          />
        </TouchableOpacity>
      </View>
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
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: -height * 0.072,
            }}>
            <TextInput
              style={styles.input}
              placeholder="Search from 1200+ Products"
              placeholderTextColor={'gray'}
              value={searchQuery}
              onChangeText={setSearchQuery}
              onSubmitEditing={handleSearch}
            />
            <TouchableOpacity onPress={handleSearch}>
              <Image
                source={require('../images/menu/Group29.png')}
                style={{width: 110, height: 150}}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>

          {/* Image Swiper */}
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={e => {
              const index = Math.round(e.nativeEvent.contentOffset.x / width);
              setCurrentIndex(index);
            }}
            scrollEventThrottle={16}>
            {images.map((image, index) => (
              <View key={index} style={{width, height: height * 0.3}}>
                <Image
                  source={image}
                  style={styles.swiperImage}
                  resizeMode="cover"
                />
              </View>
            ))}
          </ScrollView>

          {/* Dots */}
          <View style={styles.dotsContainer}>
            {images.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  {opacity: index === currentIndex ? 1 : 0.3},
                ]}
              />
            ))}
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: 20,
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <View>
              <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
                Browse from Over
              </Text>
              <Text
                style={{
                  color: 'rgba(255, 120, 22, 1)',
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                12 Categorie
              </Text>
            </View>
            <TouchableOpacity>
              <Image
                source={require('../images/menu/filter.png')}
                style={{width: 30, height: 30}}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>

          {loading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color={COLORS.primary} />
            </View>
          ) : error ? (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>Error fetching products</Text>
            </View>
          ) : (
            <FlatList
              data={products}
              renderItem={renderProduct}
              keyExtractor={item => item.id.toString()}
              contentContainerStyle={styles.listContainer}
              columnWrapperStyle={styles.row}
              numColumns={2}
              ListEmptyComponent={() => (
                <View style={styles.emptyListContainer}>
                  <Text style={styles.emptyListText}>No data found</Text>
                </View>
              )}
            />
          )}

          <View style={styles.cartContainer}>
            <Text style={styles.cartText}>Cart: {cart.length} items</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

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
    backgroundColor: '#FFF',
    columnGap: 10,
    marginHorizontal: 10,
    width: width * 0.45,
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
  },
  row: {
    justifyContent: 'space-between',
  },
  swiperImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
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
    // marginTop: 10,
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 18,
  },
  addToCartButton: {
    backgroundColor: COLORS.buttoncolor,
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  addToCartText: {
    color: 'white',
    fontWeight: 'bold',
  },
  cartContainer: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'rgba(255, 120, 22, 0.1)',
  },
  cartText: {
    fontSize: 18,
    color: 'rgba(255, 120, 22, 1)',
  },
});
