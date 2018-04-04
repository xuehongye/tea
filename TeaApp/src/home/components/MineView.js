import React, { Component } from "react";
import { Image, View, TouchableOpacity, Text, TextInput, ScrollView, Button } from "react-native";
import styles from "../styles/MineStyle";
import LoginView from "../../user/components/LoginView";
import SendGoodsView from "../../user/components/SendGoodsView"
import ObligationView from "../../user/components/ObligationView"
import ReceiveView from "../../user/components/ReceiveView"
import AppraiseView from "../../user/components/AppraiseView"
import AllOrderView from "../../user/components/AllOrderView";
import shipAddressView from "../../user/components/shipAddressView"
import MessageView from "../../user/components/MessageView"
import DiscountView from "../../user/components/DiscountView";
import CollectView from "../../user/components/CollectView"
import EvaluateView from "../../user/components/EvaluateView";
import WebLetterView from "../../user/components/WebLetterView"
import UserDataView from "../../user/components/UserDataView"

export default class MineView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => {
                        this.props.navigator.push({
                            params: { name: "webLetter" },
                            component: WebLetterView
                        })
                    }} style={styles.newsImg}>
                        <Image style={styles.nImg} source={require("../../user/image/index/navbutton.png")} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>我的</Text>
                </View>
                <ScrollView>
                    <TouchableOpacity style={[styles.memberBg,]} onPress={() => {
                        this.props.navigator.push({
                            params: { name: "userData" },
                            component: UserDataView
                        })
                    }}>
                        <View style={styles.memberBg}>
                            <Image style={styles.memberImg} source={require("../image/tea/bg.png")} />
                            <Image style={styles.photoImg} source={require("../image/tea/photoIcon.png")} />
                            {this.state.isLogin == false ?
                                <Text style={styles.loginBtn} onPress={() => {
                                    this.props.navigator.push({
                                        params: {
                                            name: "login"
                                        },
                                        component: LoginView
                                    })
                                }}>登录/注册</Text>
                                :
                                <View style={styles.loginMes}>
                                    <Image style={styles.phoneImg} source={require("../image/tea/phone.png")} />
                                    <Text style={styles.phone}>13345678879</Text>
                                </View>
                            }
                        </View>
                    </TouchableOpacity>
                    <View style={styles.userState}>
                        <TouchableOpacity style={styles.userState} onPress={() => {
                            this.props.navigator.push({
                                params: { name: "member" },
                                component: MemberView
                            })
                        }}>
                            <Text style={styles.state1}>会员状态</Text>
                            <Text style={styles.state2}>认证会员可享受全场8折优惠</Text>
                            <Image style={styles.next} source={require("../image/tea/next.png")} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.orderPlay}>
                        <View style={styles.userState}>
                            <TouchableOpacity onPress={() => {
                                this.props.navigator.push({
                                    params: { name: "allOrder" },
                                    component: AllOrderView
                                })
                            }} style={styles.userState}>
                                <Text style={styles.state1}>全部订单</Text>
                                <Text style={styles.state2}>全部订单</Text>
                                <Image style={styles.next} source={require("../image/tea/next.png")} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.orderState}>
                            <View style={styles.order}>
                                <TouchableOpacity style={styles.order} onPress={() => {
                                    this.props.navigator.push({
                                        params: { name: "obligation" },
                                        component: ObligationView
                                    })
                                }}>
                                    <Image style={styles.orderImg} source={require("../image/tea/payment.png")} />
                                    <Text style={styles.wait}>待付款</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.order}>
                                <TouchableOpacity style={styles.order} onPress={() => {
                                    this.props.navigator.push({
                                        params: { name: "sendGoods" },
                                        component: SendGoodsView
                                    })
                                }}>
                                    <Image style={styles.orderImg} source={require("../image/tea/deliver.png")}
                                    />
                                    <Text style={styles.wait} >待发货</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.order}>
                                <TouchableOpacity style={styles.order} onPress={() => {
                                    this.props.navigator.push({
                                        params: { name: "receive" },
                                        component: ReceiveView
                                    })
                                }}>
                                    <Image style={styles.orderImg} source={require("../image/tea/collect.png")}
                                    />
                                    <Text style={styles.wait} >待收货</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.order}>
                                <TouchableOpacity style={styles.order} onPress={() => {
                                    this.props.navigator.push({
                                        params: { name: "appraise" },
                                        component: AppraiseView
                                    })
                                }}>
                                    <Image style={styles.orderImg} source={require("../image/tea/evaluate.png")} />
                                    <Text style={styles.wait} >待评价</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.orderState}>
                            <View style={styles.order}>
                                <TouchableOpacity style={styles.order} onPress={() => {
                                    this.props.navigator.push({
                                        params: { name: "shipAddress" },
                                        component: shipAddressView
                                    })
                                }}>
                                    <Image style={styles.orderImg} source={require("../image/tea/address.png")} />
                                    <Text style={styles.wait}>地址</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.order}>
                                <TouchableOpacity style={styles.order} onPress={() => {
                                    this.props.navigator.push({
                                        params: { name: "discount" },
                                        component: DiscountView
                                    })
                                }}>
                                    <Image style={styles.orderImg} source={require("../image/tea/quan.png")}
                                    />
                                    <Text style={styles.wait}>优惠券</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.order}>
                                <TouchableOpacity style={styles.order} onPress={() => {
                                    this.props.navigator.push({
                                        params: { name: "collect" },
                                        component: CollectView
                                    })
                                }}>
                                    <Image style={styles.orderImg} source={require("../image/tea/save.png")}
                                    />
                                    <Text style={styles.wait}>收藏</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.order}>
                                <TouchableOpacity style={styles.order} onPress={() => {
                                    this.props.navigator.push({
                                        params: { name: "evaluate" },
                                        component: EvaluateView
                                    })
                                }}>
                                    <Image style={styles.orderImg} source={require("../image/tea/advice.png")} />
                                    <Text style={styles.wait}>评价</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}