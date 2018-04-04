import React, { Component } from "react";
import { Image, View, TouchableOpacity, Text, TextInput, Button } from "react-native";
import { DeviceEventEmitter } from 'react-native';


import styles from "../styles/LoginStyle";
import RegView from './RegView';
import ForgetPassView from "./ForgetPassView";
export default class LoginView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fastlogin: false
        };
    }
    switchTab = (type) => {
        this.setState({
            fastlogin: type != 1
        });
    }

    render() {
        return (
            <View style={styles.container}>
                {/* 背景图片 */}
                <Image style={styles.bglogo} source={require("../image/login/bgtoubu.png")} />
                {/* 登录按钮 */}
                <View style={styles.tabContainer}>
                    <Text onPress={() => this.switchTab(1)} style={[styles.tabColor, { color: !this.state.fastlogin ? "#ea4c48" : '#999' }]}>登录</Text>
                    <Text onPress={() => this.switchTab(2)} style={[styles.quickTabColor, { color: this.state.fastlogin ? "#ea4c48" : '#999' }]}>快捷登录</Text>
                </View>
                {this.state.fastlogin ? (
                    <View style={styles.member}>
                        <View style={styles.textInputs}>
                            <Image style={styles.iconphone} source={require("../image/login/iconsj.png")} />
                            {/* 用户名 */}
                            <TextInput style={styles.textInput} placeholder={"请输入手机号码"} underlineColorAndroid={"#aaa"} />
                        </View>
                        <View style={styles.textInputs}>
                            <Image style={styles.iconphone} source={require("../image/login/iconyzmdefault.png")} />
                            {/* 密码 */}
                            <TextInput style={styles.textInput} placeholder={'请输入验证码'}
                                secureTextEntry={true} underlineColorAndroid={"#aaa"} />
                            <TouchableOpacity style={styles.btncode}>
                                <Text style={styles.setcode}>发送验证码</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ) : (
                        <View style={styles.member}>
                            <View style={styles.textInputs}>
                                <Image style={styles.iconphone} source={require("../image/login/icondengolu.png")} />
                                {/* 用户名 */}
                                <TextInput style={styles.textInput} placeholder={"请输入手机号码"} underlineColorAndroid={"#aaa"} />
                            </View>
                            <View style={styles.textInputs}>
                                <Image style={styles.iconphone} source={require("../image/login/iconmimadefault.png")} />
                                {/* 密码 */}
                                <TextInput style={styles.textInput} placeholder={'请输入密码'}
                                    secureTextEntry={true} underlineColorAndroid={"#aaa"} />
                            </View>
                        </View>

                    )}
                <Text style={styles.error}>*请输入登录手机号</Text>
                <TouchableOpacity style={styles.btnStyle} onPress={() => {
                    DeviceEventEmitter.emit('switchTAB', { pagekey: 'home' });
                }}>
                    <Text style={styles.loginText}>登录</Text>
                </TouchableOpacity>
                {/* 注册  忘记密码 */}
                <View style={styles.zhuce}>
                    <TouchableOpacity onPress={() => {
                        this.props.navigator.push({
                            params: { name: 'register' },
                            component: RegView
                        })
                    }}>
                        <Text style={{ color: "#ea4c48" }}>注册</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                       onPress={()=>{
                            this.props.navigator.push({
                                params: { name: 'forgetPass' },
                                  component:ForgetPassView
                              })
                        }}
                    >
                        <Text style={{ color: "#ea4c48" }}>忘记密码?</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}


