import React, { Component } from "react";
import { Image, View, TouchableOpacity, Text, TextInput, ScrollView, Button } from "react-native";
import styles from "../styles/DiscountStyle";
import HeadView from "../../common/components/HeadView";
export default class DiscountView extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <HeadView navigator={this.props.navigator} save="使用说明" name="优惠券" />
                <ScrollView>
                    <View style={styles.discount}>
                        <Image style={styles.bgImg} source={require("../image/my/bg1.png")} />
                        <View style={styles.bgLeft}>
                            <Text style={styles.text1}>运费优惠券</Text>
                            <Text style={[styles.text2,{ color:"#efc2c9",}]}>满399使用</Text>
                            <Text style={[styles.text3,{ color:"#efc2c9",}]}>2018-01-01 12:24:00前使用</Text>
                        </View>
                        <Text style={[styles.bgRight,{borderTopColor:"#e98e9a",
        borderBottomColor:"#e98e9a",}]}>￥50.00</Text>
                    </View>
                    <View style={styles.discount}>
                        <Image style={styles.bgImg} source={require("../image/my/bg1.png")} />
                        <View style={styles.bgLeft}>
                            <Text style={styles.text1}>运费优惠券</Text>
                            <Text style={[styles.text2,{ color:"#efc2c9",}]}>满399使用</Text>
                            <Text style={[styles.text3,{ color:"#efc2c9",}]}>2018-01-01 12:24:00前使用</Text>
                        </View>
                        <Text style={[styles.bgRight,{borderTopColor:"#e98e9a",
        borderBottomColor:"#e98e9a",}]}>8.5折</Text>
                    </View>
                    <View style={styles.discount}>
                        <Image style={styles.bgImg} source={require("../image/my/bg2.png")} />
                        <View style={styles.bgLeft}>
                            <Text style={styles.text1}>运费优惠券   </Text>
                            <Image style={styles.warn} source={require("../image/my/warn.png")} />
                            <Text style={[styles.text2,{color:"#fff",marginLeft:15}]}>满399使用</Text>
                            <Text style={[styles.text3,{color:"#fff"}]}>2018-01-01 12:24:00前使用</Text>
                        </View>
                        <Text style={[styles.bgRight,{borderTopColor:"#e4e4e4",
        borderBottomColor:"#e4e4e4",}]}>￥50.00</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}