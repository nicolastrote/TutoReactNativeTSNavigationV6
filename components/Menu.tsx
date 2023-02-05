import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RootStackParams } from '../App';

const Menu: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Navigation</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Explore');
        }}
      >
        <Text style={styles.link}>Explore</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Restaurants');
        }}
      >
        <Text style={styles.link}>Restaurants</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Profile');
        }}
      >
        <Text style={styles.link}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#efefef',
    padding: 16,
    marginTop: 8,
  },
  link: {
    fontSize: 16,
    marginTop: 4,
    color: '#097ade',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
  },
});

export default Menu;
