import React, { Component } from "react";
import { View, Text, TextInput, Image, TouchableOPacity, ScrollView } from "react-native";
import styles from "../styles/MemberStyle";
import HeadView from "../../common/components/HeadView";


export default class MemberView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '请输入邀请号',
            text1: '请输入验证码',
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <HeadView navigator={this.props.navigator} name="认证会员" />
                <View style={styles.contain}>
                    <TextInput style={styles.invitationCode} underlineColorAndroid="transparent"
                        onChangeText={(text) => this.setState({ text })}
                        placeholder={this.state.text}
                        multiline={true} />
                    <View style={styles.verCode}>
                        <TextInput style={styles.Vcode} underlineColorAndroid="transparent"
                            onChangeText={(text) => this.setState({ text1 })}
                            placeholder={this.state.text1}
                            multiline={true} />
                        <Text style={styles.codeBtn}>获取验证码</Text>
                    </View>
                    <Text style={styles.submitTit}>认证会员</Text>
                </View>
            </View>
        )
    }
}