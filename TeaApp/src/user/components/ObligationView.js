import React, { Component } from "react";
import { Image, View, TouchableOpacity, Text, TextInput, Button, ScrollView } from "react-native";
import styles from "../styles/ObligationStyle";
import HeadView from '../../common/components/HeadView';
import AddressView from "../../common/components/AddressView";
import PaymentView from "../components/PaymentView";
export default class ObligationView extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <HeadView navigator={this.props.navigator} name="待付款" />
                <ScrollView style={styles.scroll}>
                    <View style={styles.news}>
                        <Image style={styles.clock} source={require("../image/pay/clock.png")} />
                        <Text style={styles.notice}>等待你的付款</Text>
                        <Text style={styles.xiaoer}>(支付剩余时间12:32:22)</Text>
                    </View>
                    <View style={styles.product}>
                        <View style={styles.pro_up}>
                            <Image style={styles.teaImg} source={require("../../home/image/tea/gift.jpg")} />
                            <View style={styles.teaText}>
                                <Text style={styles.teaTitle}>
                                    白毫乌龙150g/3两青茶青茶青茶青茶青茶
                                </Text>
                                <Text style={styles.teaHold}>竹筒红色装  【包装不包】</Text>
                                <View style={styles.teaDetail}>
                                    <Text style={styles.tea1}>￥</Text>
                                    <Text style={styles.tea2}>250</Text>
                                    <Text style={styles.tea1}>.00&nbsp;&nbsp;</Text>
                                    <Text style={styles.tea4}>原￥288&nbsp;&nbsp;</Text>
                                    <Text style={styles.tea5}>礼盒&nbsp;&nbsp;</Text>
                                    <Text style={styles.tea1}>￥</Text>
                                    <Text style={styles.tea2}>50</Text>
                                    <Text style={styles.tea1}>.00</Text>
                                    <Text style={styles.tea3}>x1</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.pro_down}>
                            <Text style={styles.price}>共一件商品&nbsp;&nbsp;&nbsp;&nbsp;(包含礼盒价)合计&nbsp;&nbsp;￥300.00</Text>
                        </View>
                    </View>
                    <AddressView hidenleftBtn={true} morenBtn={false} />
                    {/* <View style={styles.logistics}>
                        <Image style={styles.logiImg} source={require("../image/car/iconwuliu.png")} />
                        <View style={styles.logiText}>
                            <Text style={styles.logi1}>物流信息</Text>
                            <Text style={styles.logi2}>正在出仓</Text>
                            <Text style={styles.logi3}>2017-12-20 15:00:00</Text>
                        </View>
                        <TouchableOpacity onPress={() => {
                            this.props.navigator.push(
                                {
                                    params: { name: "wuliu" },
                                    component: WuliuView,
                                }
                            )
                        }}>
                            <Image style={styles.next} source={require("../../home/image/tea/next.png")} />
                        </TouchableOpacity>
                    </View> */}
                    <View style={styles.order}>
                        <Image style={styles.logiImg} source={require("../image/car/iconorder.png")} />
                        <View style={styles.orderText}>
                            <View style={styles.state}>
                                <Text style={styles.state1}>订单状态:
                                </Text>
                                <Text style={styles.state2}>待付款
                                </Text>
                            </View>
                            <View style={styles.state}>
                                <Text style={styles.state3}>
                                    纸质发票:
                                </Text>
                                <Text style={styles.state3}>
                                    是
                                </Text>
                            </View>
                            <View style={styles.state}>
                                <Text style={styles.state3}>
                                    订单编号:
                                </Text>
                                <Text style={styles.state3}>
                                    45152525
                                </Text>
                            </View>
                            <View style={styles.state}>
                                <Text style={styles.state3}>
                                    下单时间:
                                </Text>
                                <Text style={styles.state3}>
                                    2017.12.23
                                </Text>
                            </View>
                            <View style={styles.state}>
                                <Text style={styles.state3}>
                                    顾客留言:
                                </Text>
                                <Text style={styles.state4}>
                                    颜色要绿色的，记得发货前检查我的东西是否完好，本人不希望有破损的情况
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.pay}>
                        <View style={styles.payTop}>
                            <Text style={styles.payTop1}>
                                实付款
                            </Text>
                            <Text style={styles.payTop2}>
                                ￥262
                            </Text>
                        </View>
                        <View style={styles.payBottom}>
                            <View style={styles.paytitle}>
                                <Text style={styles.payTop3}>
                                    合计
                                </Text>
                                <View style={styles.payTop7}>
                                    <Text style={styles.payTop5}>
                                        1
                                    </Text>
                                    <Text style={styles.payTop6}>
                                        件商品
                                    </Text>
                                    <Text style={styles.payTop5}>
                                        ￥300
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.paytitle}>
                                <Text style={styles.payTop3}>
                                    优惠
                                </Text>
                                <Text style={styles.payTop4}>
                                    -￥50
                                </Text>
                            </View>
                            <View style={styles.paytitle}>
                                <Text style={styles.payTop3}>
                                    运费
                                </Text>
                                <Text style={styles.payTop4}>
                                    +￥12
                                </Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.remind}>
                    <Text style={styles.remindText}>取消订单</Text>
                    <Text style={styles.remindText} onPress={()=>{
                        this.props.navigator.push({
                            params:{name:"payment"},
                            component:PaymentView
                        })
                    }}>付款</Text>
                </View>
            </View>
        )
    }

}