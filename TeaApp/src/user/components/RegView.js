import React ,{ Component } from "react";
import {Image,View,TouchableOpacity,Text,TextInput,Button} from "react-native";
import styles from "../styles/RegStyle";
import { Navigator } from 'react-native-deprecated-custom-components'


export default class RegView extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                {/* 背景图片 */}
                <Image style={styles.bglogo} source={require("../image/login/bgtoubu.png")} />
                {/* 登录按钮 */}
                {/* <View style={styles.tabContainer}>
                    <Text style={styles.tabColor}>登录</Text>
                    <Text style={styles.quickTabColor}>快捷登录</Text>
                </View> */}
                <View style={styles.member}>
                    <View style={styles.textInputs}>
                        <Image style={styles.iconphone} source={require("../image/login/iconsj.png")} />
                        {/* 用户名 */}
                        <TextInput style={styles.textInput} placeholder={"请输入手机号码"} underlineColorAndroid={"#aaa"}/>
                    </View>
                    <View style={styles.textInputs}>
                        <Image style={styles.iconphone} source={require("../image/login/iconyzmdefault.png")} />
                        {/* 密码 */}
                        <TextInput style={styles.textInput} placeholder={'请输入验证码'} 
                        secureTextEntry={true}underlineColorAndroid={"#aaa"}/>
                         <TouchableOpacity style={styles.btncode}>
                            <Text style={styles.setcode}>发送验证码</Text>
                        </TouchableOpacity>  
                    </View>
                    <View style={styles.textInputs}>
                        <Image style={styles.iconphone} source={require("../image/login/iconmimadefault.png")} />
                        {/* 密码 */}
                        <TextInput style={styles.textInput} placeholder={'请设置密码'} 
                        secureTextEntry={true}underlineColorAndroid={"#aaa"}/>
                    </View>
                </View>
                <Text style={styles.error}>*请输入登录手机号</Text>
                <View style={styles.btnStyle}>
                     <TouchableOpacity >
                         <Text style={styles.loginText}>立即注册</Text>
                    </TouchableOpacity>  
                </View>
                 {/* 已有账号去登录 */}
                <View  style={styles.login}>
                    <TouchableOpacity 
                        onPress={()=>{
                        this.props.navigator.pop();
                    }}
                    >
                        <Text style={{color:"#ea4c48",fontSize:12}}>已有账号去登录>></Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}