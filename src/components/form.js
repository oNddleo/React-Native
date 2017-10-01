import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import {toogleIsAdding, addWord} from '../actions/appActions';
class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            en: '',
            vn: ''
        }
    }
    onAdd(){
        const {en, vn} = this.state;
        this.props.addWord(en, vn);
        this.props.toogleIsAdding();
    }
    render() {
        return (
            <View style={styles.form}>
                <TextInput 
                    style={styles.textInput} 
                    placeholder="English"
                    value={this.state.en}
                    onChangeText={text => this.setState({en: text})}
                />
                <TextInput 
                    style={styles.textInput} 
                    placeholder="Vietnamese"
                    value={this.state.vn}
                    onChangeText={text => this.setState({vn: text})}
                />
                <TouchableOpacity onPress={() => this.onAdd()}>
                    <Text>Add</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    form: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1
    },
    textInput: {
        height: 36,
        width: '100%',
        marginTop: 5,
        marginBottom: 3,
        marginLeft: 3,
        marginRight: 3,
        fontSize: 18,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#48BBEC',
        paddingHorizontal: 10
    }
})

export default connect(null, {toogleIsAdding, addWord})(Form);
