import React, { Component } from "react";
import { Image, View, TouchableOpacity, Text, TextInput, Button, ScrollView } from "react-native";
import { DeviceEventEmitter } from 'react-native';
import styles from "../styles/PaySureView";
import HeadView from '../../common/components/HeadView';
import SendGoodsView from "../components/SendGoodsView";
export default class PaySureView extends React.Component {
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
                <HeadView navigator={this.props.navigator} name="支付成功" />
                <ScrollView>
                    <View style={styles.success}>
                        {this.state.fastlogin == false ? <Image style={styles.trueImg} source={require("../image/pay/wechatpay.png")} /> : <Image style={styles.trueImg} source={require("../image/pay/zhifupay.png")} />
                        }
                        <Text style={styles.trueText}>订单支付成功</Text>
                        <Text style={styles.shop}>我们将尽快为您发货-20171225005</Text>
                        <View style={styles.btns}>
                            <Text style={styles.count} 
                            onPress={() => {
                                DeviceEventEmitter.emit('switchTAB', { pagekey: 'home' });
                            }}
                >继续购物</Text>
                            <Text style={styles.count} onPress={()=>{
                                this.props.navigator.push({
                                    params:{name:"sendGoods"},
                                    component:SendGoodsView,
                                })
                            }}>查看订单</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }

}