import React, { Component } from "react";
import { Image, View, Text, TouchableOpacity, ScrollView, TextInput, Button } from "react-native";
import styles from "../styles/SystemStyle";
import HeadView from "../../common/components/HeadView";
export default class MessageView extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <HeadView navigator={this.props.navigator} name="系统动态" />
                <ScrollView>
                    <View style={styles.news}>
                        <Image style={styles.newImg} source={require("../image/message/new1.png")} />
                        <View style={styles.newText}>
                            <Text style={styles.new1}>为中国茶行业提供全面及时的茶叶资讯的茶叶</Text>
                            <Text style={styles.new2} numberOfLines={1}>为中国茶行业提供全面及时的茶叶资讯的茶叶，茶味浓郁香烈</Text>
                        </View>
                        <Text style={styles.time1}>上午10:00</Text>
                    </View>
                    <View style={styles.system}>
                        <Image style={styles.sysImg} source={require("../image/message/setting.jpg")} />
                        <View style={styles.sysText}>
                            <Text style={styles.sys1}>【系统消息】系统消息</Text>
                            <Text style={styles.sys2} numberOfLines={1}>您好！您在本店购买的茶叶品质良好，物美价廉，超高皮质</Text>
                        </View>
                        <Text style={styles.time2}>上午10:00</Text>
                    </View>
                    <View style={styles.news}>
                        <Image style={styles.newImg} source={require("../image/message/new2.png")} />
                        <View style={styles.newText}>
                            <Text style={styles.new1}>为中国茶行业提供全面及时的茶叶资讯的茶叶</Text>
                            <Text style={styles.new2} numberOfLines={1}>为中国茶行业提供全面及时的茶叶资讯的茶叶，茶味浓郁香烈</Text>
                        </View>
                        <Text style={styles.time1}>上午10:00</Text>
                    </View>
                    <View style={styles.system}>
                        <Image style={styles.sysImg} source={require("../image/message/new3.png")} />
                        <View style={styles.sysText}>
                            <Text style={styles.sys1}>【系统消息】系统消息</Text>
                            <Text style={styles.sys2} numberOfLines={1}>您好！您在本店购买的茶叶品质良好，物美价廉，超高皮质</Text>
                        </View>
                        <Text style={styles.time2}>上午10:00</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }

}