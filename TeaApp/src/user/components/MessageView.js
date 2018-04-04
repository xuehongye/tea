import React, { Component } from "react";
import { Image, View, Text, TouchableOpacity, ScrollView, TextInput, Button } from "react-native";
import styles from "../styles/MessageStyle";
import HeadView from "../../common/components/HeadView";
import SystemView from "../components/SystemView";
import ServiceView from "../components/ServiceView";
import MesDetailView from "./MesDetailView.js"
export default class MessageView extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <HeadView navigator={this.props.navigator} name="网站公告" />
                <View style={styles.list}>
                    <TouchableOpacity onPress={() => {
                        this.props.navigator.push({
                            params: { name: "mesdetail" },
                            component: MesDetailView
                        })
                    }}>
                        <View style={styles.mesList}>
                            <Image style={styles.mesImg} source={require("../image/message/setting.jpg")} />
                            <View style={styles.mesText}>
                                <View style={styles.mesRight}>
                                    <Text style={styles.mes1}>寿宁高山乌龙茶最新产品</Text>
                                    <Text style={styles.mesTime}>2018-01-30 03:10:08</Text>
                                </View>
                                <Text style={styles.widthCal} numberOfLines={1}>寿宁高山乌龙茶最新产品寿宁高山乌龙茶最新产品</Text>
                            </View>


                        </View>
                    </TouchableOpacity>
                    {/* <TouchableOpacity onPress={() => {
                        this.props.navigator.push({
                            params: { name: "service" },
                            component: ServiceView
                        })
                    }}>
                        <View style={styles.mesList}>
                            <Image style={styles.mesImg} source={require("../image/message/kefu.png")} />
                            <View style={styles.mesText}>
                                <Text style={[styles.mes1, { color: "#44b5f6" }]}>客服</Text>
                                <Text style={styles.widthCal} numberOfLines={1}>尊敬的客户，您好！你在本店购买的茶叶品质第一，服务质量第一</Text>
                            </View>
                            <Text style={styles.mesTime}>上午10:00</Text>
                        </View>
                    </TouchableOpacity> */}
                </View>
            </View>
        )
    }
}