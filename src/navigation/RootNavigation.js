import {Image, StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import LeaguesScreen from '../screens/LeaguesScreen/LeaguesScreen';
import ResearchScreen from '../screens/ResearchScreen/ResearchScreen';
import LeaderboardScreen from '../screens/LeaderboardScreen/LeaderboardScreen';
import {images} from '../common/images';
import {colors} from '../common/colors';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import Detail from '../screens/Detail/Detail';

const RootNavigation = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  const BottomTabNavigator = () => {
    return (
      <Tab.Navigator
        initialRouteName="Profile"
        screenOptions={{
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.lightgrey,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Image
                style={{tintColor: color}}
                resizeMode="center"
                source={images.Home}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Leagues"
          component={LeaguesScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Image
                style={{tintColor: color}}
                resizeMode="center"
                source={images.Trophy}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Research"
          component={ResearchScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Image
                style={{tintColor: color}}
                resizeMode="center"
                source={images.Search}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Leaderboard"
          component={LeaderboardScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Image
                style={{tintColor: color}}
                resizeMode="center"
                source={images.Leaderboard}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({color}) => (
              <Image
                style={{tintColor: color}}
                resizeMode="center"
                source={images.User}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
const styles = StyleSheet.create({});
