import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { RootStackParams } from '../App';
import Menu from '../components/Menu';
import RestaurantCard from '../components/RestaurantCard';

type Props = NativeStackScreenProps<RootStackParams, 'RestaurantsStack'>;

const RestaurantsScreen: React.FC<Props> = ({ navigation }) => {
  const handleOnPress = (name: string) => {
    navigation.navigate('Restaurant', { name });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Restaurants Screen</Text>
      <ScrollView>
        <RestaurantCard name="Sushi restaurant" onPress={handleOnPress} />
        <RestaurantCard name="burger restaurant" onPress={handleOnPress} />
        <RestaurantCard name="Fine dining restaurant" onPress={handleOnPress} />
        <RestaurantCard name="Sushi restaurant" onPress={handleOnPress} />
        <RestaurantCard name="burger restaurant" onPress={handleOnPress} />
        <RestaurantCard name="Fine dining restaurant" onPress={handleOnPress} />
      </ScrollView>
      <Menu />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 24,
  },
  screenTitle: {
    fontSize: 24,
    marginTop: 8,
    fontWeight: 'bold',
  },
});

export default RestaurantsScreen;
