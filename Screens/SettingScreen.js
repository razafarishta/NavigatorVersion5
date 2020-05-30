import React, {Component} from 'react';
import {View, Text} from 'react-native';

class SettingScreen extends Component {
  render() {
    //const route = this.props;
    return (
      <View>
        <Text style={{fontSize: 20}}>This is Setting Screen</Text>
        {/* {params.name && <Text>{params.name}</Text>} */}
      </View>
    );
  }
}
export default SettingScreen;
