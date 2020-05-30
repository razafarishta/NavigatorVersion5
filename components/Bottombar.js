import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Bottombar extends Component {
  render() {
    return (
      <View
        style={{
          width: '100%',
          height: 50,
          flexDirection: 'row',
          backgroundColor: 'white',
        }}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('HomeScreen')}
          style={{
            width: '35%',
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <AntDesign name="home" size={25} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('FavouriteScreen')}
          style={{
            width: '33%',
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <AntDesign name="hearto" size={30} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('DetailScreen')}
          style={{
            width: '33%',
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <MaterialCommunityIcons name="account-details" />
        </TouchableOpacity>
      </View>
    );
  }
}
