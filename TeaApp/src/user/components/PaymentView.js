import React, { Component } from "react";
import { Image, View, TouchableOpacity, Text, TextInput, Button, ScrollView } from "react-native";
import styles from "../styles/PaymentStyle";
import HeadView from '../../common/components/HeadView';
import PaySureView from "../components/PaySureView";
import PayFalseView from  "../components/PayFalseView";
export default class PaymentView extends React.Component {
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
                <HeadView navigator={this.props.navigator} name="支付订单" />
                <ScrollView>
                    <View style={styles.time}>
                        <View style={styles.time1}>
                            <Text style={styles.pay}>支付剩余时间</Text>
                            <Text style={styles.payTime}>15:00</Text>
                        </View>
                        <View style={styles.money}>
                            <Text style={{ fontSize: 12, lineHeight: 15.5 }}>￥</Text>
                            <Text style={{ fontSize: 15, lineHeight: 15.5 }}>500</Text>
                        </View>
                        <Text style={styles.number}>
                            支付订单-217150002
                        </Text>
                    </View>
                    <View style={styles.methods}>
                        <View style={styles.method}>
                            <Image style={styles.wechat} source={require("../image/pay/iconWechat.png")} />
                            <Text style={styles.weText}>微信支付</Text>
                            <TouchableOpacity onPress={() => this.switchTab(1)} >
                                <Image style={styles.btn} source={!this.state.fastlogin ? require("../image/pay/btnActive.png") : require("../image/pay/btnCheck.png")} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.method}>
                            <Image style={styles.wechat} source={require("../image/pay/iconAlipay.png")} />
                            <Text style={styles.weText}>支付宝支付</Text>
                            <TouchableOpacity onPress={() => this.switchTab(2)} >
                                <Image style={styles.btn}
                                    source={this.state.fastlogin ? require("../image/pay/btnActive.png") : require("../image/pay/btnCheck.png")} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                <View  style={styles.con}>
                    {this.state.fastlogin==false?
                    <Text style={styles.payBtn} onPress={()=>{
                        this.props.navigator.push(
                            {params:{name:"paySure"},
                        component:PaySureView}
                        )
                    }}>支付</Text>:
                    <Text style={styles.payBtn} onPress={()=>{
                        this.props.navigator.push(
                            {params:{name:"payFalse"},
                        component:PayFalseView}
                        )
                    }}>支付</Text>
                }
                </View>
            </View>

        )
    }
}