
import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';
import { connect} from 'react-redux';
import { filterShowAll, filterMemorized, filterNeedPractice } from '../actions/appActions';
class Filter extends Component {
    getTextStyle(statusName){
        const {filterStatus} = this.props;
        if(statusName === filterStatus) return {color: 'black', fontWeight: 'bold'};
        return styles.buttonText;
   }
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'row', backgroundColor: 'blue',
            alignItems: 'center', justifyContent: 'space-around'}}>
                <TouchableOpacity onPress={() => this.props.filterShowAll() }>
                    <Text style={this.getTextStyle('SHOW_ALL')}>SHOW ALL</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.filterMemorized() }>
                    <Text style={this.getTextStyle('MEMORIZED')}>MEMORIZED</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.filterNeedPractice() }>
                    <Text style={this.getTextStyle('NEED_PRACTICE')}>NEED PRACTICE</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create(
    {
        buttonText: {color: 'white'}
    }
);
function mapStateToProps(state){
    return {
        filterStatus: state.filterStatus
    };
}
export default connect(mapStateToProps, {
    filterShowAll, filterMemorized, filterNeedPractice
})(Filter);
