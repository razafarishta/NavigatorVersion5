import React, {Component} from 'react';
import {View, Text} from 'react-native';

class MainScreen extends Component {
  render() {
    //const route = this.props;
    return (
      <View>
        <Text style={{fontSize: 20}}>This is Main Screen</Text>
        {/* {params.name && <Text>{params.name}</Text>} */}
      </View>
    );
  }
}
export default MainScreen;
