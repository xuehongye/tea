import React, { Component } from "react";
import { Image, View, Text, TouchableOpacity, ScrollView, TextInput, Button } from "react-native";
import ModalDropdown from 'react-native-modal-dropdown';


import styles from "../styles/AddAddressStyle";
import HeadView from "../../common/components/HeadView";
export default class AddAddressView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text1: '请填写用户名',
            text2: "请填写手机号",
            text3: '详细地址',
            isMoren: false,
        };
        this.saveFuc=this.saveFuc.bind(this);
    }
    saveFuc(){
        this.props.navigator.pop();
        alert(1)
    }
    render() {
        return (
            <View style={styles.container}>
                <HeadView navigator={this.props.navigator} name="添加地址" save="保存" aa={<Text onPress={this.saveFuc}></Text>} hidenleftBtn={false} />
                <View style={styles.fill}>
                    <View style={styles.user}>
                        <Text style={styles.name}>收件人:</Text>
                        <TextInput style={styles.nameInput} underlineColorAndroid="transparent"
                            onChangeText={(text1) => this.setState({ text1 })}
                            placeholder={this.state.text1}
                            multiline={true} />
                    </View>
                    <View style={styles.user}>
                        <Text style={styles.name}>联系方式:</Text>
                        <TextInput style={styles.nameInput} underlineColorAndroid="transparent"
                            onChangeText={(text2) => this.setState({ text2 })}
                            placeholder={this.state.text2}
                            multiline={true} />
                    </View>
                    <View style={styles.select}>
                        <ModalDropdown options={['北京', '山西', '上海', '天津', '重庆']}
                            style={styles.option}
                            textStyle={{
                                color: "#333", fontSize: 14,
                                height: 50, borderBottomWidth: 1,
                                borderBottomColor: "#e8e1e1", paddingHorizontal: 24, lineHeight: 50
                            }}
                            dropdownStyle={{
                                width: 375,
                                borderBottomWidth: 1,
                                borderBottomColor: "#e8e1e1", paddingHorizontal: 24,
                            }}
                            defaultValue={"请选择"} />
                        <Text style={styles.province}>省份</Text>
                    </View>
                    <View style={styles.select}>
                        <ModalDropdown options={['北京', '山西', '上海', '天津', '重庆']}
                            style={styles.option}
                            textStyle={{
                                color: "#333", fontSize: 14,
                                height: 50, borderBottomWidth: 1,
                                borderBottomColor: "#e8e1e1", paddingHorizontal: 24, lineHeight: 50
                            }}
                            dropdownStyle={{
                                width: 375,
                                borderBottomWidth: 1,
                                borderBottomColor: "#e8e1e1", paddingHorizontal: 24,
                            }}
                            defaultValue={"请选择"} />
                        <Text style={styles.province}>城市</Text>
                    </View>
                    <View style={styles.select}>
                        <ModalDropdown options={['北京', '山西', '上海', '天津', '重庆']}
                            style={styles.option}
                            textStyle={{
                                color: "#333", fontSize: 14,
                                height: 50, borderBottomWidth: 1,
                                borderBottomColor: "#e8e1e1", paddingHorizontal: 24, lineHeight: 50
                            }}
                            dropdownStyle={{
                                width: 375,
                                borderBottomWidth: 1,
                                borderBottomColor: "#e8e1e1", paddingHorizontal: 24,
                            }}
                            defaultValue={"请选择"} />
                        <Text style={styles.province}>城区</Text>
                    </View>
                    <View style={styles.user}>
                        <TextInput style={styles.nameInput} underlineColorAndroid="transparent"
                            onChangeText={(text3) => this.setState({ text3 })}
                            placeholder={this.state.text3}
                            multiline={true} />
                    </View>
                    <View style={styles.user}>
                        <Text style={styles.setting}>是否设置为常用地址</Text>
                        <TouchableOpacity onPress={() => {
                            this.setState({
                                isMoren: !this.state.isMoren
                            })
                        }}>
                            {this.state.isMoren == false ?
                                <Image style={styles.setImg} source={require("../../home/image/tea/check.png")} />
                                :
                                <Image style={styles.setImg} source={require("../../home/image/tea/checkActive.png")} />
                            }
                        </TouchableOpacity>
                    </View>
                </View>
            </View >
        )
    }
}