import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { connect} from 'react-redux';
import Word from './word';
import Filter from './filter';
import Header from './header';
import Form from './form';
class Main extends Component {
  getWords(){
      console.log(this.props);
      const {filterStatus, arrWords} = this.props;
      if(filterStatus === 'MEMORIZED') return arrWords.filter(e => e.memorized);
      if(filterStatus === 'NEED_PRACTICE') return arrWords.filter(e => !e.memorized);
      return arrWords;
  }
  render() {
    return (
      <View style={{justifyContent: 'center', flex: 1}}>
        <Header/>
        <View style={{flex: 10}}>
          {this.props.isAdding ? <Form/> : null}
          <FlatList
                  data={this.getWords()}
                  renderItem={({item}) => <Word word={item}/>}
                  keyExtractor = {item => item.id}
          />
        </View>
        <Filter/>
      </View>
    );
  }
}
/**
 * connect state of store -> Main with some state which you needed to use
 * @param {*} state 
 */
function mapStateToProps(state){
    return {
        filterStatus: state.filterStatus,
        arrWords: state.arrWords,
        isAdding: state.isAdding
    };
}
function mapActionToProps(func){
  return {
    
  }
}
export default connect(mapStateToProps)(Main);