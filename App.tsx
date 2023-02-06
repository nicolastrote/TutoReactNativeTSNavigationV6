import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ExploreScreen from './screens/Explore';
import ProfileScreen from './screens/Profile';
import RestaurantScreen from './screens/Restaurant';
import RestaurantsScreen from './screens/Restaurants';

export type RootStackParams = {
  ExploreStack: ExploreStackParams;
  RestaurantsStack: RestaurantsStackParams;
  Profile: any;
  Restaurant: {
    name: string;
  };
};

export const RootStack = createBottomTabNavigator<RootStackParams>();

export type RestaurantsStackParams = {
  Restaurants: any;
  Restaurant: {
    name: string;
  };
};

const RestaurantsStack = createNativeStackNavigator<RestaurantsStackParams>();

const RestaurantsScreenStack = () => {
  return (
    <RestaurantsStack.Navigator initialRouteName="Restaurants">
      <RestaurantsStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantsStack.Screen name="Restaurant" component={RestaurantScreen} />
    </RestaurantsStack.Navigator>
  );
};

export type ExploreStackParams = {
  Explore: any;
  Restaurant: {
    name: string;
  };
};

const ExploreStack = createNativeStackNavigator<ExploreStackParams>();

const ExploreScreenStack = () => {
  return (
    <ExploreStack.Navigator initialRouteName="Explore">
      <ExploreStack.Screen name="Explore" component={ExploreScreen} />
      <ExploreStack.Screen name="Restaurant" component={RestaurantsScreen} />
    </ExploreStack.Navigator>
  );
};

export const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Explore">
        <RootStack.Screen name="ExploreStack" component={ExploreScreenStack} />
        <RootStack.Screen
          name="RestaurantsStack"
          component={RestaurantsScreenStack}
        />
        <RootStack.Screen name="Profile" component={ProfileScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
