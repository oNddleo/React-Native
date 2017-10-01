import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect} from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons';
import { toogleShow, toogleMemorized } from '../actions/appActions';
class Word extends Component {
  render() {
    const {id, en, vn, memorized, isShow} = this.props.word;
    const textDecorationLine = memorized ? 'line-through': 'none';
    const changeIconMemorized = memorized ? "close-o" : "check";
    const meaning = isShow ? vn : '';
    return (
      <View style={{backgroundColor: 'gray', padding: 10, margin: 10, flex: 1}}>
        <View style={styles.controller}>
          <TouchableOpacity 
            onPress={() => this.props.toogleMemorized(id)}>
            <Icon name={changeIconMemorized} size={30}/>
          </TouchableOpacity>
          <Text style = {{textDecorationLine}}>{en}</Text>
        </View>
        <View style={styles.controller}>
          <TouchableOpacity
            onPress = {() => this.props.toogleShow(id)}>
            <Icon name="eye" size={30}/>
          </TouchableOpacity>
          <Text>{meaning}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create(
  {
    controller: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center'
    }
  }
);
export default connect(null, { toogleShow, toogleMemorized })(Word);