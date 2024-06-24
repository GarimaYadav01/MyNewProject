import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
  Text,
  FlatList,
} from 'react-native';
import React from 'react';
import {COLORS, ICONS} from '../images/authimage/theme';
import Headercomponent from '../component/Headercomponent';
const {width, height} = Dimensions.get('screen');
const Search = () => {
  const data = [
    {
      id: '1',
      filename: 'Passport Picture',
      icon: ICONS.document,
      image: ICONS.menu,
      date: '29 Oct 2023 ',
      storge: '320.4 MB',
    },
    {
      id: '2',
      filename: 'Passport Picture',
      icon: ICONS.document,
      image: ICONS.menu,
      date: '29 Oct 2023 ',
      storge: '320.4 MB',
    },
    {
      id: '3',
      filename: 'Passport Picture',
      icon: ICONS.document,
      image: ICONS.menu,
      date: '29 Oct 2023 ',
      storge: '320.4 MB',
    },
    {
      id: '4',
      filename: 'Passport Picture',
      icon: ICONS.document,
      image: ICONS.menu,
      date: '29 Oct 2023 ',
      storge: '320.4 MB',
    },
    {
      id: '5',
      filename: 'Passport Picture',
      icon: ICONS.document,
      image: ICONS.menu,
      date: '29 Oct 2023 ',
      storge: '320.4 MB',
    },
    {
      id: '6',
      filename: 'Passport Picture',
      icon: ICONS.document,
      image: ICONS.menu,
      date: '29 Oct 2023 ',
      storge: '320.4 MB',
    },
  ];

  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <View style={{flexDirection: 'row', alignItems: 'center', columnGap: 10}}>
        <Image source={item.icon} style={styles.itemIcon} />
        <View>
          <Text style={styles.itemText}>{item.filename}</Text>
          <Text style={styles.date}>
            {item.date} <Text>{item.storge}</Text>
          </Text>
        </View>
      </View>
      <Image source={item.image} style={styles.itemMenuIcon} />
    </View>
  );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.background}}>
      <Headercomponent title={'Search'} />
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: COLORS.background,
          marginHorizontal: 20,
        }}
        showsVerticalScrollIndicator={false}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            placeholder="Search for file"
            placeholderTextColor={'gray'}
          />
          <Image source={ICONS.search} style={styles.icon} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            // padding: 10,
            marginTop: height * 0.02,
          }}>
          <Text style={styles.recent}>Recent Files</Text>
          <Text style={styles.view}>View All</Text>
        </View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContainer}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width * 0.9,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)',
    backgroundColor: '#F4F4F4',
    borderRadius: 30,
    paddingHorizontal: 10,
    alignSelf: 'center',
    marginTop: 20,
  },
  input: {
    flex: 1,
    padding: 10,
    color: 'black',
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  recent: {
    color: COLORS.headingcolor,
    fontSize: 18,
    marginTop: 10,
    fontWeight: '600',
  },
  view: {
    color: '#2489FF',
    fontSize: 16,
    textDecorationLine: 'underline',
  },

  listContainer: {
    paddingVertical: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    // borderBottomWidth: 1,
    borderWidth: 1,
    borderColor: '#F4F4F4',
    backgroundColor: '#F4F4F4',
    marginTop: height * 0.02,
    justifyContent: 'space-between',
  },
  itemIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 10,
  },
  itemText: {
    flex: 1,
    fontSize: 16,
    color: 'black',
  },
  itemMenuIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  date: {
    fontSize: 11,
    color: 'black',
    fontWeight: '400',
  },
});
