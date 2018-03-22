import React, { Component } from "react";
import { Image, View, Text, TouchableOpacity, ScrollView, TextInput, Button } from "react-native";
import ModalDropdown from 'react-native-modal-dropdown';


import styles from "../styles/AddAddressStyle";
import HeadView from "../../common/components/HeadView"
export default class AddAddressView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text1: '请填写用户名',
            text2: "请填写手机号",

        };
    }

    render() {
        return (
            <View style={styles.container}>
                <HeadView navigator={this.props.navigator} name="添加地址" save="保存" hidenleftBtn={false} />
                <View style={styles.fill}>
                    <View style={styles.user}>
                        <Text style={styles.name}>收件人:</Text>
                        <TextInput style={styles.nameInput} underlineColorAndroid="transparent"
                            onChangeText={(text1) => this.setState({ text1 })}
                            value={this.state.text1}
                            multiline={true} />
                    </View>
                    <View style={styles.user}>
                        <Text style={styles.name}>联系方式:</Text>
                        <TextInput style={styles.nameInput} underlineColorAndroid="transparent"
                            onChangeText={(text2) => this.setState({ text2 })}
                            value={this.state.text2}
                            multiline={true} />
                    </View>
                    {/* <View style={styles.select}> */}
                        {/* <ModalDropdown options={['option 1', 'option 2']} style={styles.select}
                        textStyle={{color:"#333",fontSize:14,width:375,
                        height:50, borderBottomWidth: 1,
                        borderBottomColor:"#e8e1e1",  paddingHorizontal:24,lineHeight:50}} 
                        dropdownStyle={{width:375,
                        borderBottomWidth: 1,
                        borderBottomColor:"#e8e1e1",  paddingHorizontal:24,}}
                        defaultValue={"请选择"}/> */}
                    {/* </View> */}
                </View>
            </View>
        )
    }
}