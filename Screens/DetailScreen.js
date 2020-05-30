import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Bottombar from '../components/Bottombar';

class DetailScreen extends Component {
  render() {
    return (
      <View>
        <Text>This is Detail Screen</Text>

        {/* <Bottombar navigation={this.props.navigation} /> */}
      </View>
    );
  }
}
export default DetailScreen;
