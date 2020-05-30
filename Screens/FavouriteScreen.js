import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Bottombar from '../components/Bottombar';
class FavouriteScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{width: '100%', flex: 1}}>
        <View
          style={{
            width: '100%',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <AntDesign name="hearto" style={{fontSize: 30}} />
          <Text style={{marginTop: 20}}>No items in your cart</Text>
        </View>
        {/* <Bottombar navigation={this.props.navigation} /> */}
      </SafeAreaView>
    );
  }
}
export default FavouriteScreen;
