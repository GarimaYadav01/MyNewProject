import {
  Dimensions,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS} from '../images/authimage/theme';
import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('screen');

const Browe = () => {
  const navigation = useNavigation();
  const data = [
    {
      id: '1',
      name: 'Accounting and Book Keeping',
      Monthly: '500 AED',
    },
    {
      id: '2',
      name: 'Accounting and Audit Services',
      Monthly: '500 AED',
    },
    {
      id: '3',
      name: 'Setup online presence',
      Monthly: '500 AED',
    },
    {
      id: '4',
      name: 'Setup online presence',
      Monthly: '500 AED',
    },
    {
      id: '5',
      name: 'Setup online presence',
      Monthly: '500 AED',
    },
    {
      id: '6',
      name: 'Setup online presence',
      Monthly: '500 AED',
    },
  ];

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => navigation.navigate('Browse')}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>{item.name}</Text>
        <Text style={{fontSize: 13, color: 'white', marginTop: height * 0.03}}>
          Monthly{' '}
        </Text>
        <Text style={styles.cardSubtitle}>{item.Monthly}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.background}}>
      <ScrollView style={{flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.title}>Browse Add-Ons</Text>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={2}
            columnWrapperStyle={styles.row}
            contentContainerStyle={styles.listContainer}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Browe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: COLORS.headingcolor,
  },
  listContainer: {
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: 'rgba(217, 36, 39, 1)',
    borderRadius: 15,
    width: width * 0.42,
    padding: 20,
    marginBottom: 15,
    shadowColor: 'rgba(217, 36, 39, 1)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '400',
    color: COLORS.background,
  },
  cardSubtitle: {
    fontSize: 16,
    color: COLORS.background,
    marginTop: 5,
    fontWeight: '500',
  },
});
