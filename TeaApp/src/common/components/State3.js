import React, { Component } from "react";
import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
import WuliuView from "../../user/components/WuliuView"
import confirmOrderView from "../../user/components/confirmOrderView"
import WriteEvaluateView from "../../user/components/WriteEvaluateView";


var dimensions = require("Dimensions");
var { width, height } = dimensions.get("window");
export default class State3 extends React.Component {
    render() {
        return (
            <View style={styles.list}>
            
                <Text style={styles.title}>待评价</Text>
                <View style={styles.con}>
                    <View style={styles.conTop}>
                        <Image style={styles.conImg} source={require("../../home/image/tea/gift.jpg")} />
                        <View style={styles.conText}>
                            <Text style={styles.text1}>白毫乌龙150g/3两青茶青茶青茶青茶青茶青茶青茶</Text>
                            <Text style={styles.text2}>竹筒红色装 【包装不包】</Text>
                            <View style={styles.text3}>
                                <Text style={styles.txt1}>￥</Text>
                                <Text style={styles.txt2}>250</Text>
                                <Text style={styles.txt3}>.00&nbsp;&nbsp;</Text>
                                <Text style={styles.txt4}>原</Text>
                                <Text style={styles.txt5}>￥288</Text>
                                <Text style={styles.txt6}>&nbsp;&nbsp;礼盒&nbsp;&nbsp;</Text>
                                <Text style={styles.txt1}>￥</Text>
                                <Text style={styles.txt2}>50</Text>
                                <Text style={styles.txt3}>.00</Text>
                                <Text style={styles.txt9}>x1</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.conBottom}>
                        <Text style={styles.txt7}>
                            （包含礼盒价）合计&nbsp;&nbsp;&nbsp;&nbsp;￥300
                        </Text>
                        <Text style={styles.txt8}>
                            .00
                        </Text>
                    </View>
                </View>
                <View style={styles.btn}>
                    <TouchableOpacity style={styles.btnText} onPress={() => {
                        this.props.navigator.push({
                            params: { name: "confirmOrder" },
                            component: confirmOrderView
                        })
                    }}>
                        <Text style={styles.btnCon}>再来一单</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnText} onPress={() => {
                        this.props.navigator.push({
                            params: { name: "writeEvaluate" },
                            component: WriteEvaluateView
                        })
                    }}>
                        <Text style={styles.btnCon}>评价</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    list: {
        width: width,
        height: 262,
        backgroundColor: "#fff",
        marginTop: 10,
    },
    title: {
        width: width,
        height: 44,
        fontSize: 14,
        color: "#333",
        paddingLeft: 24,
        lineHeight: 44,
    },
    con: {
        width: width,
        flex: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: "#c4c4c4",
        borderBottomColor: "#c4c4c4",
        paddingLeft: 12,
        paddingRight: 12,
    },
    conTop: {
        width: width,
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
    },
    conBottom: {
        width: width,
        height: 34,
        flexDirection: "row",
        justifyContent: "flex-end",
        paddingRight: 20,
    },
    conImg: {
        width: 102,
        height: 90,
        marginRight: 10,
    },
    conText: {
        flex: 1,
        height: 90,
    },
    text1: {
        fontSize: 14,
        color: "#333",
        lineHeight: 16,
        flexWrap: 'wrap',
        paddingRight: 12
    },
    text2: {
        fontSize: 12,
        color: "#888",
        marginTop: 10,
    },
    text3: {
        flexDirection: "row",
        marginTop: 20,
    },
    txt1: {
        fontSize: 10,
        color: "#333",
        lineHeight: 14,
    },
    txt2: {
        fontSize: 13,
        color: "#333",
        lineHeight: 14,
    },
    txt3: {
        fontSize: 10,
        color: "#333",
        lineHeight: 14,
    },
    txt4: {
        fontSize: 12,
        color: "#888",
        lineHeight: 14,
    },
    txt5: {
        fontSize: 12,
        color: "#888",
        lineHeight: 14,
        textDecorationLine: "line-through"
    },
    txt6: {
        fontSize: 13,
        color: "#ea4a4a",
        lineHeight: 14,
    },
    txt7: {
        fontSize: 14,
        color: "#333",
        lineHeight: 34,
    },
    txt8: {
        fontSize: 10,
        color: "#333",
        lineHeight: 34,
    },
    txt9: {
        fontSize: 12,
        color: "#888",
        lineHeight: 14,
        flex: 1,
        textAlign: "right",
        marginRight: 20,
    },
    btn: {
        width: width,
        height: 58,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        paddingRight: 10,
    },
    btnText: {
        width: 108,
        height: 32,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: "#c4c4c4",
        marginLeft: 20,
    },
    btnCon:{
        fontSize: 14,
        color: "#333",
        lineHeight: 30,
        textAlign: "center",
    }
})