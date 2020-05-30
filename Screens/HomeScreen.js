import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import Bottombar from '../components/Bottombar';
import Feather from 'react-native-vector-icons/Feather';
import {Header, Left, Right, Icon} from 'native-base';
const {height, width, fontScale} = Dimensions.get('window');

class HomeScreen extends Component {
  render() {
    return (
      <View
        style={{
          //flex: 1,
          width: '100%',
          // alignItems: 'center',
          //  justifyContent: 'center',
        }}>
        <Header>
          <Right>
            <Icon
              name="menu"
              onPress={() => this.props.navigation.toggleDrawer()}
              style={{paddingRight: '20%'}}
            />
          </Right>
        </Header>
        {/* <Text>This is Home Screen</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Detail')}>
          <Text>Go To Main</Text>
        </TouchableOpacity> */}
      </View>
    );
  }
}
// HomeScreen.navigationOptions = navData => {
//   return {
//     headerTitle: 'Home',
//     headerLeft: (
//       <Feather
//         name="menu"
//         size={25}
//         onPress={() => {
//           navData.navigation.toggleDrawer();
//         }}
//       />
//     ),
//   };
// };
export default HomeScreen;
