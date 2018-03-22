import React, { Component } from "react";
import { Image, View, TouchableOpacity, Text, TextInput, Button, ScrollView } from "react-native";
import styles from "../styles/PayFalseView";
import HeadView from '../../common/components/HeadView';
export default class PayFalseView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fastlogin: false
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <HeadView navigator={this.props.navigator} name="支付失败" />
                <ScrollView>
                    <View style={styles.success}>
                        {this.state.fastlogin != false ? <Image style={styles.trueImg} source={require("../image/pay/failweixin.png")} /> : <Image style={styles.trueImg} source={require("../image/pay/failzfb.png")} />
                        }
                        <Text style={styles.trueText}>订单支付失败</Text>
                        <Text style={styles.shop}>失败了不妨再次支付-20171225005</Text>
                        <View style={styles.btns}>
                            <Text style={styles.count}>再次支付</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }

}