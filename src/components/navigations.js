import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, useIsDrawerOpen } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../screens/home';
import Drawer from '../screens/drawer';
import Categories from '../screens/categories';
import Brands from '../screens/brands';
import Profile from '../screens/profile';
import ProductScreen from '../screens/productScreen';
import BrandListItem from '../components/brandListItem';
import RightSlider from '../components/rightSlider';
import Cart from '../screens/cart';
import CheckOut from '../screens/checkOut';




const Stack = createStackNavigator();
const Draw = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default Navigations = () => {
  return (

    <NavigationContainer>
      <Draw.Navigator  drawerContent= {props => <Drawer {...props} />} hideStatusBar={false}>
        <Draw.Screen name="Home" component={StackNav}  />
      </Draw.Navigator>
    </NavigationContainer>
  );

};

const StackNav = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Home Menu" component={BottomNav} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="ProductScreen" component={ProductScreen} />
      <Stack.Screen name="BrandListItem" component={BrandListItem} options={{headerShown: false}}  />
      <Stack.Screen name="RightSlider" component={RightSlider} options={{headerShown:false}}/>
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="CheckOut" component={CheckOut}/>

      
    </Stack.Navigator>
  )
};

// const BottomNav = () => {
//   return (
//     <Tab.Navigator activeColor="#FFF">
//       <Tab.Screen
//         name="Home"
//         component={Home}
//         options={{
//           tabBarIcon: () => (
//             <Icon name="home" size={26} color="rgb(14,87,97)" />
//             ),
//           }}
//       />

//       <Tab.Screen
//         name="Categories"
//         component={Categories}
//         options={{
//           tabBarIcon: () => (
//             <Icon name="apps" size={26} color="rgb(14,87,97)" />
//           ),
//         }}
//       />

//       <Tab.Screen
//         name="Brands"
//         component={Brands}
//         options={{
//           tabBarIcon: () => (
//             <Icon name="pricetags" size={26} color="rgb(14,87,97)" />
//           ),
//         }}
//       />

//       <Tab.Screen
//         name="Profile"
//         component={Profile}
//         options={{
//           tabBarIcon: () => (
//             <Icon name="people" size={26} color="rgb(14,87,97)" />
//           ),
//         }}
//       />

//     </Tab.Navigator>
//   )

// };

const BottomNav = () => {
  return (
    <Tab.Navigator 
    screenOptions={({ route, navigation}) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'home'
            : 'home-outline';
        } else if (route.name === 'Categories') {
          iconName = focused ? 'apps' : 'apps-outline';
        } else if (route.name === 'Brands') {
          iconName = focused ? 'pricetags' : 'pricetags-outline';
        }else if (route.name === 'Profile') {
          iconName = focused ? 'people' : 'people-outline';
        }

        // You can return any component that you like here!
        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarLabel: navigation.isFocused() ? route.name : ''
    })}
    tabBarOptions={{
      activeTintColor: 'rgb(14,87,97)',
      inactiveTintColor: 'gray',
    }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Categories" component={Categories} />

      <Tab.Screen name="Brands" component={Brands}/>

      <Tab.Screen name="Profile" component={Profile}/>
    </Tab.Navigator>
  )

};


