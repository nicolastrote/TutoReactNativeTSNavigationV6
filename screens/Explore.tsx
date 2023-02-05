import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RootStackParams } from '../App';
import Menu from '../components/Menu';
import RestaurantCard from '../components/RestaurantCard';

type Props = NativeStackScreenProps<RootStackParams, 'Explore'>;

const ExploreScreen: React.FC<Props> = ({ navigation }) => {
  const handleOnPress = (name: string) => {
    navigation.navigate('Restaurant', { name });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Restaurants</Text>
      <View>
        <Text style={styles.sectionTitle}>Restaurants Near You</Text>
        <RestaurantCard name="Sushi restaurant" onPress={handleOnPress} />
        <RestaurantCard name="burger restaurant" onPress={handleOnPress} />
        <RestaurantCard name="Fine dining restaurant" onPress={handleOnPress} />
      </View>
      <View>
        <Text style={styles.sectionTitle}>Most Popular Restaurants</Text>
        <RestaurantCard name="Sushi restaurant" onPress={handleOnPress} />
        <RestaurantCard name="burger restaurant" onPress={handleOnPress} />
      </View>
      <Menu />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 24,
  },
  restaurantCard: {
    backgroundColor: '#efefef',
  },
  sectionTitle: {
    fontSize: 16,
    marginTop: 16,
  },
  screenTitle: {
    fontSize: 24,
    marginTop: 8,
    fontWeight: 'bold',
  },
});

export default ExploreScreen;
