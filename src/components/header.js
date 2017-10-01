import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons';
class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Text/>
                <Text>MY WORDS</Text>
                <TouchableOpacity onPress={() => this.props.dispatch({type: 'IS_ADDING'})}>
                    <Icon name="plus" size={20}/>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: '#D9D9D9',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 20,
        marginTop: 20
    }
})
export default connect()(Header)