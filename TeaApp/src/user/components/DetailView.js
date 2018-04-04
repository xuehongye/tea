import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";
import WebLetterView from "../components/WebLetterView";
import ShopCarView from "../../home/components/ShopCarView";
import { DeviceEventEmitter } from 'react-native';
import styles from "../styles/DetailStyle";

import ServiceView from "../components/ServiceView";
import AddAddressView from "./AddAddressView"

export default class DetailView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: [
                { tabName: "详情", id: 1 },
                { tabName: "参数", id: 2 },
                { tabName: "评论", id: 3 },
            ],
            sizeTabs: [
                { tabName: "组合装", id: 1, storage: 10 },
                { tabName: "散装", id: 2, storage: 5 },
                { tabName: "单件", id: 3, storage: 4 },
                { tabName: "组合装", id: 4, storage: 3 },
                { tabName: "散装", id: 5, storage: 8 },
                { tabName: "单件", id: 6, storage: 9 },
            ],
            selNum: 1,
            totalMoney: 0,
            currentIndex: 1,//tab按钮当前的index
            tabCollect: false, //收藏按钮的状态
            addshopTab: false,  //加入购物车按钮的状态
            isShare: false,
        };
        this.press_collect = this.press_collect.bind(this);
        this.itemReduce = this.itemReduce.bind(this);
        this.itemAdd = this.itemAdd.bind(this);
        this.shareBtn = this.shareBtn.bind(this);
        this.cancelBtn=this.cancelBtn.bind(this);

    }
    componentDidMount() {
    }
    // 详情tab切换按钮
    tabChoiced = (id) => {
        this.setState({
            currentIndex: id
        });
    }
    // 取消和添加收藏按钮
    press_collect() {
        this.setState({
            tabCollect: !this.state.tabCollect
        })
    }
    // 点击加入购物车 出现遮罩和选择规格框
    addShop() {
        this.setState({
            addshopTab: true
        })
        console.log(this.state.addshopTab)
        if (this.state.addshopTab == true) {
            alert("已经成功添加到购物车")
        }
    }
    // 点击购买
    buyShop() {
        if (this.state.addshopTab == false) {
            this.setState({
                addshopTab: true
            })
        } else {
            alert("请添加收货地址")
            this.props.navigator.push({
                params: { name: "addAddress" },
                component: AddAddressView
            })
        }
    }
    // 点击关闭按钮
    close() {
        this.setState({
            addshopTab: false
        })
    }
    // 点击减号
    itemReduce() {
        // alert(1)
        if (this.state.selNum <= 1) {
            return;
        }
        this.state.selNum--;
        this.setState({
            selNum: this.state.selNum
        })
    };
    // 点击加号
    itemAdd() {
        if (this.state.selNum >= this.state.sizeTabs[0].storage) {
            return;
        }
        this.state.selNum++;
        this.setState({
            selNum: this.state.selNum
        })
    }
    // 点击分享
    shareBtn() {
        if (this.state.isShare == false) {
            this.setState({
                isShare: true,
            })
        }
    }
    // 点击取消按钮
    cancelBtn(){
        if (this.state.isShare) {
            this.setState({
                isShare: false,
            })
        }
    }
    render() {
        var _this = this;
        var tabList = this.state.tabs.map(function (res, index) {
            var tabStyle = res.id == this.state.currentIndex ? styles.subCtrlActive : styles.subCtrl;
            var tabName = res.id == this.state.currentIndex ?
                res.tabName : res.tabName;
            return <Text key={index} onPress={this.tabChoiced.bind(_this, res.id)} style={tabStyle}>{tabName}</Text>

        }.bind(_this));
        var sizeTabs = this.state.sizeTabs.map(function (res, index) {
            var tabStyle = res.id == this.state.currentIndex ? styles.tabActive : styles.tabStyle;
            var tabTit = res.id == this.state.currentIndex ?
                styles.activeTit : styles.tabTit;
            var tabName = res.id == this.state.currentIndex ?
                res.tabName : res.tabName;
            return <TouchableOpacity key={index} onPress={this.tabChoiced.bind(_this, res.id)} style={tabStyle}>
                <Text style={tabTit}>{tabName}</Text>
            </TouchableOpacity>

        }.bind(_this));
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => {
                        this.props.navigator.pop();
                    }} style={styles.back}>
                        <Image style={styles.backImg} source={require("../../home/image/tea/back.png")} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>商品详情</Text>
                    <TouchableOpacity onPress={() => {
                        DeviceEventEmitter.emit('switchTAB', { pagekey: 'shopCar' });
                    }} style={styles.car}>
                        <Image style={styles.carImg} source={require("../../user/image/index/btnshopcar.png")} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        this.props.navigator.push({
                            params: { name: "webLetter" },
                            component: WebLetterView
                        })
                    }} style={styles.news}>
                        <Image style={styles.newsImg} source={require("../../user/image/index/navbutton.png")} />
                    </TouchableOpacity>
                </View>
                <ScrollView style={{ marginBottom: 49 }}>
                    <Image style={styles.goodsImg} source={require("../../home/image/tea/tea.png")} />
                    <View style={styles.con}>
                        <View style={styles.contain}>
                            <View style={styles.conTop}>
                                <Text style={styles.title}>白毫乌龙150g/3两青茶青茶青茶青茶青茶青茶青茶白毫乌龙白毫乌龙</Text>
                                <TouchableOpacity style={styles.share} onPress={this.shareBtn}>
                                    <Image style={styles.shareImg} source={require("../image/index/btnshare.png")} />
                                    <Text style={styles.shareTxt}>分享</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.conBottom}>
                                <View style={styles.conPrice}>
                                    <View style={styles.newPrice}>
                                        <Text style={styles.new1}>折扣价&nbsp;</Text>
                                        <Text style={styles.new2}>￥</Text>
                                        <Text style={styles.new3}>250</Text>
                                        <Text style={styles.new2}>.00</Text>
                                    </View>
                                    <View style={styles.oldPrice}>
                                        <Text style={styles.old1}>原价: </Text>
                                        <Text style={styles.old2}>￥288</Text>
                                    </View>
                                </View>
                                <Text style={styles.gift}>礼盒￥50.00</Text>
                            </View>
                        </View>
                        <View style={styles.detail}>
                            <Text style={styles.det1}>快递:0.00</Text>
                            <Text style={styles.det1}>月销:12345</Text>
                            <Text style={styles.det1}>收藏:245</Text>
                        </View>
                    </View>
                    <View style={styles.details}>
                        <View style={styles.tabList}>
                            {tabList}
                        </View>
                        <View style={styles.tabCon}>
                            {this.state.currentIndex == 1 ?
                                <View>
                                    <Text>详情</Text>
                                </View>
                                : null
                            }
                            {this.state.currentIndex == 2 ?
                                <View>
                                    <Text>参数</Text>
                                </View>
                                : null
                            }
                            {this.state.currentIndex == 3 ?
                                <View>
                                    <Text>评论</Text>
                                </View>
                                : null
                            }
                        </View>
                    </View>
                </ScrollView>
                {/* 遮罩页面  选择规格 */}
                <View style={styles.display}>
                    {this.state.addshopTab == true ?
                        <View style={styles.mask}>
                            <View style={styles.select}>
                                <View style={styles.goodMes}>
                                    <Image style={styles.goodImg} source={require("../../home/image/tea/gift.jpg")} />
                                    <View style={styles.goodPrice}>
                                        <View style={styles.totalPrice}>
                                            <Text style={styles.p1}>￥</Text>
                                            <Text style={styles.p2}>1250</Text>
                                        </View>
                                        <View style={styles.totalPrice}>
                                            <Text style={styles.p1}>￥</Text>
                                            <Text style={styles.p2}>85&nbsp;&nbsp;&nbsp;&nbsp;</Text>
                                            <Text style={styles.p1}>礼盒价</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity onPress={this.close.bind(this)} style={styles.close}>
                                        <Image style={styles.closeImg} source={require("../image/car/close.png")} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.size}>
                                    <Text style={styles.sizeTit}>参数选择</Text>
                                    <View style={styles.sizeList}>
                                        {sizeTabs}
                                    </View>
                                </View>
                                <View style={styles.count}>
                                    <Text style={styles.countTit}>购买数量</Text>
                                    <View style={styles.countBtn}>
                                        <Text style={styles.countBack} onPress={this.itemReduce}>-</Text>
                                        <Text style={styles.countNum}>{this.state.selNum}</Text>
                                        <Text onPress={this.itemAdd} style={styles.countAdd}>+</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        : null
                    }
                    <View style={styles.footer}>
                        {this.state.addshopTab == false ?
                            <View style={styles.collect}>
                                <TouchableOpacity onPress={() => {
                                    this.props.navigator.push({
                                        params: { name: "kefu" },
                                        component: ServiceView
                                    })
                                }} style={styles.kefu}>
                                    <Image style={styles.kefuImg} source={require("../image/my/btnservice.png")} />
                                    <Text style={styles.kefuTxt}>客服</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.press_collect} style={styles.kefu}>
                                    {this.state.tabCollect == false ?
                                        <View style={styles.kefuView}>
                                            <Image style={styles.kefuImg} source={require("../image/my/butt.png")} />
                                            <Text style={styles.kefuTxt}>收藏</Text>
                                        </View>
                                        :
                                        <View style={styles.kefuView}>
                                            <Image style={styles.kefuImg} source={require("../image/my/starA.png")} />
                                            <Text style={styles.kefuTxt}>已收藏</Text>
                                        </View>
                                    }
                                </TouchableOpacity>
                            </View>
                            :
                            <Text style={styles.choose}>选择属性</Text>
                        }
                        <Text style={styles.addShop} onPress={this.addShop.bind(this)}>加入购物车</Text>
                        <Text style={styles.pay} onPress={this.buyShop.bind(this)}>购买</Text>
                    </View>
                </View>
                {/* 遮罩页面 点击分享后弹出框 */}
                {this.state.isShare ?
                    <View style={styles.alertMask}>
                        <View style={styles.shareBox}>
                            <Text style={styles.shareTitle}>分享到</Text>
                            <View style={styles.shareList}>
                                <TouchableOpacity style={styles.shareQQ}>
                                    <Image style={styles.qqImg} source={require("../image/share/qq.png")} />
                                    <Text style={styles.qqTit}>QQ</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.shareQQ}>
                                    <Image style={styles.qqImg} source={require("../image/share/friend.png")} />
                                    <Text style={styles.qqTit}>朋友圈</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.shareQQ}>
                                    <Image style={styles.qqImg} source={require("../image/share/wechat.png")} />
                                    <Text style={styles.qqTit}>微信</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.shareQQ}>
                                    <Image style={styles.qqImg} source={require("../image/share/weibo.png")} />
                                    <Text style={styles.qqTit}>微博</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.cancelBtn} onPress={this.cancelBtn}>取消</Text>
                        </View>
                    </View>
                    : null}
            </View>
        )
    }
}