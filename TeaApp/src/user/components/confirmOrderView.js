import React, { Component } from "react";
import { Image, View, TouchableOpacity, Text, TextInput, Button, ScrollView } from "react-native";
import styles from "../styles/confirmOrderStyle";
import HeadView from '../../common/components/HeadView';
import PaymentView from "../components/PaymentView";

import AddressView from "../../common/components/AddressView";
export default class confirmOrderView extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <HeadView navigator={this.props.navigator} name="确认订单" />
                <ScrollView>
                    <AddressView navigator={this.props.navigator} hidenleftBtn={false}/>
                    <View style={styles.carList}>
                        <View style={styles.listTop}>
                            {/* {this.setState.checkState == false ? (<Image style={styles.checkImg} source={require("../../home/image/tea/check.png")} />)
                                : (<Image style={styles.checkImg} source={require("../../home/image/tea/checkActive.png")} />)
                            } */}
                            <Image style={styles.giftImg} source={require("../../home/image/tea/gift.jpg")} />
                            <View style={styles.giftText}>
                                <Text style={styles.gt_1}>M856 150g/3两装 高山乌龙茶</Text>
                                <Text style={styles.gt_2}>竹筒红色装 【包装不包】</Text>
                                <View style={styles.gt_3}>
                                    <View style={styles.gt_3_left}>
                                        <Text style={styles.left_price}>￥250.0 原价288</Text>
                                        <Text style={styles.left_price}>礼盒￥50</Text>
                                    </View>
                                    {/* <View style={styles.gt_3_right}>
                                        <Text style={styles.add}>+</Text>
                                        <Text style={styles.gt_3_figure}>1</Text>
                                        <Text style={styles.add}>-</Text>
                                    </View> */}
                                </View>
                            </View>
                        </View>
                        <View style={styles.listBottom}
                        >
                            <Text style={styles.gift}>（包含礼盒价）合计 ￥1500</Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.count}>
                    <View style={styles.checkText}>
                        <View style={styles.checkBox}>
                        </View>
                        <View style={styles.checkPrice}>
                            <Text style={styles.acount}>合计&nbsp;&nbsp;&nbsp;&nbsp;￥1500.00</Text>
                            <Text style={styles.else}>不含运费</Text>
                        </View>
                    </View>
                    <View style={styles.checkBtn}>
                        <TouchableOpacity onPress={() => {
                            this.props.navigator.push({
                                params: { name: 'payment' },
                                component: PaymentView
                            }
                            )
                        }}>
                            <Text style={styles.check}>结算(1)</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}