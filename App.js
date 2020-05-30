import 'react-native-gesture-handler';
import React, {Component} from 'react';
//import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  createStackNavigator,
  CardStyleInterpolators,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import FavouriteScreen from './Screens/FavouriteScreen';
import DetailScreen from './Screens/DetailScreen';
import MainScreen from './Screens/MainScreen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileScreen from './Screens/ProfileScreen';
import SettingScreen from './Screens/SettingScreen';

const HomeStack = createStackNavigator();
const Stack = createStackNavigator();

const FavouriteStack = createStackNavigator();
const DetailStack = createStackNavigator();

const Tabs = createBottomTabNavigator();
const Drawers = createDrawerNavigator();

// const HomeTabs = () => {
//   return (
//     <Tabs.Navigator>
//       <Tabs.Screen name="Home" component={HomeScreen} />
//       <Tabs.Screen name="Profile" component={ProfileScreen} />
//       <Tabs.Screen name="Setting" component={SettingScreen} />
//     </Tabs.Navigator>
//   );
// };

// const HomeStackScreen = () => (
//   <HomeStack.Navigator>
//     <HomeStack.Screen name="Home" component={HomeScreen} />
//     <HomeStack.Screen
//       name="Main"
//       component={MainScreen}
//       options={({route}) => ({
//         title: route.params.name,
//       })}
//     />
//   </HomeStack.Navigator>
// );

const FavouriteStackScreen = () => (
  <FavouriteStack.Navigator
    screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
      headerStyleInterpolator: HeaderStyleInterpolators.forSlideRight,
    }}>
    <FavouriteStack.Screen name="Favourite" component={FavouriteScreen} />
    <FavouriteStack.Screen name="Setting" component={SettingScreen} />
  </FavouriteStack.Navigator>
);

// const DetailStackScreen = () => (
//   <DetailStack.Navigator>
//     <DetailStack.Screen name="Detail" component={DetailScreen} />
//   </DetailStack.Navigator>
// );
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        {/* <Tabs.Navigator>
          <Tabs.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({color, size}) => (
                <AntDesign name="home" color={color} size={size} />
              ),
            }}
          />
          <Tabs.Screen
            name="Favourite"
            component={FavouriteStackScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({color, size}) => (
                <AntDesign name="home" color={color} size={size} />
              ),
            }}
          />
          <Tabs.Screen
            name="Detail"
            component={DetailStackScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({color, size}) => (
                <AntDesign name="home" color={color} size={size} />
              ),
            }}
          />
        </Tabs.Navigator> */}
        <Drawers.Navigator>
          <Drawers.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'Home',
              //tabBarLabel: 'Home',
              drawerIcon: ({focused, size}) => (
                <AntDesign
                  name="home"
                  size={30}
                  color={[focused ? 'blue' : 'black']}
                />
              ),
            }}
          />
          <Drawers.Screen
            name="Favourite"
            component={FavouriteStackScreen}
            options={{
              title: 'Favourites',
              // style={{}},
              drawerIcon: ({focused, size}) => (
                <AntDesign
                  name="hearto"
                  size={30}
                  color={[focused ? 'blue' : 'black']}
                />
              ),
            }}
          />
        </Drawers.Navigator>

        {/* <Stack.Navigator
          screenOptions={{
            CardStyleInterpolators: CardStyleInterpolators.forVerticalIOS,
            HeaderStyleInterpolators: HeaderStyleInterpolators.forSlideRight,
          }}>
          <Stack.Screen
            options={{headerShown: true, title: 'Ecoomerce'}}
            name="Home"
            component={HomeTabs}
          />
          <Stack.Screen
            options={{headerShown: false, title: 'Ecoomerce'}}
            name="Favourite"
            component={FavouriteScreen}
          />
          <Stack.Screen
            options={{headerShown: false, title: 'Ecoomerce'}}
            name="Detail"
            component={DetailScreen}
          />
        </Stack.Navigator> */}
      </NavigationContainer>
    );
  }
}
