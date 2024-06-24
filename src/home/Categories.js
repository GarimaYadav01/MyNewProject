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

const Categories = () => {
  const navigation = useNavigation();
  const {categories, loading, error, fetchCategories} = useContext(AuthContext);
  const [selectedTab, setSelectedTab] = useState('All');

  useEffect(() => {
    fetchCategories(); // Fetch categories when the component mounts
  }, []);

  const renderCategory = ({item}) => {
    return (
      <View style={{marginBottom: 20, marginTop: 10}}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.itemText}>{item}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={COLORS.buttoncolor} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error: {error.message}</Text>
      </View>
    );
  }

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
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
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
              marginHorizontal: 20,
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <View>
              <Text style={{color: 'black', fontSize: 25, fontWeight: 'bold'}}>
                Product Categories
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 15,
                  fontWeight: '400',
                }}>
                Showing Total
                <Text
                  style={{
                    color: 'rgba(255, 120, 22, 1)',
                    fontSize: 20,
                    fontWeight: 'bold',
                  }}>
                  {categories.length}
                </Text>
                Categories
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

          <FlatList
            data={categories}
            renderItem={renderCategory}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.listContainer}
            columnWrapperStyle={styles.row}
            numColumns={2}
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

export default Categories;

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
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
    width: width * 0.4,
    height: height * 0.1,
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
  },
  itemText: {
    color: 'black',
    fontSize: 15,
    fontWeight: '500',
  },
  listContainer: {
    padding: 10,
  },
  row: {
    justifyContent: 'space-between',
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
    fontSize: 18,
    color: 'red',
  },
});
