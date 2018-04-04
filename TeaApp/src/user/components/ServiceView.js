import React, { Component } from "react";
import { Image, View, Text, TouchableOpacity, ScrollView, TextInput, Button } from "react-native";
import styles from "../styles/ServiceStyle";
import HeadView from "../../common/components/HeadView";
export default class ServiceView extends React.Component {
    constructor(props){
        super(props);
        this.state={

        }

    }
    render() {
        return (
            <View style={styles.container}>
                <HeadView navigator={this.props.navigator} name="客服"/>
                <ScrollView style={styles.scroll}>
                    <View style={styles.dialog}>
                        <Image style={styles.kefuImg} source={require("../image/message/kefu.png")}/>
                        <View style={styles.kefuText}>
                            <Image style={styles.bg} source={require("../image/message/dialog.png")}/>
                            <Text style={styles.bgText}>
                                亲爱的xxx,您好！海岚香很高兴为您服务！
                            </Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.send}>
                    <Image style={styles.sendImg} source={require("../image/message/button.png")}/>
                    <TextInput style={[styles.input,{padding: 0}]}underlineColorAndroid="transparent" />
                    <Text style={styles.sendText}>发送</Text>
                </View>
            </View>
        )
    }
}