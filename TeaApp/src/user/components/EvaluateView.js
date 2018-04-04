import React, { Component } from "react";
import { Text, View, TouchableOpacity, ScrollView, TextInput, Button, Image } from "react-native";
import styles from "../styles/EvaluateStyle";
import HeadView from "../../common/components/HeadView";

export default class EvaluateView extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <HeadView navigator={this.props.navigator} name="评价" />
                <ScrollView>
                    <View style={styles.evaluate}>
                        <Image style={styles.photo} source={require("../image/my/photo.png")} />
                        <View style={styles.con}>
                            <View style={styles.con1}>
                                <Text style={styles.name}>我是格非</Text>
                                <View style={styles.stars}>
                                    <Image style={styles.starA} source={require("../image/my/starA.png")} />
                                    <Image style={styles.starA} source={require("../image/my/starA.png")} />
                                    <Image style={styles.starA} source={require("../image/my/starA.png")} />
                                    <Image style={styles.starA} source={require("../image/my/starA.png")} />
                                    <Image style={styles.starA} source={require("../image/my/star.png")} />
                                </View>
                            </View>
                            <Text style={styles.con2}>
                                2017-12-27 12:21:00
                            </Text>
                            <Text style={styles.con3}>
                                茶收到了，味道很纯正，泡的时候香气扑鼻，物流也很快,要是有需要下次还会来的
                            </Text>
                            <View style={styles.con4}>
                                <Image style={styles.tea} source={require("../image/my/tea1.png")} />
                                <Image style={styles.tea} source={require("../image/my/tea2.jpg")} />
                                <Image style={styles.tea} source={require("../image/my/tea3.png")} />
                            </View>
                            <View style={styles.con5}>
                                <Image style={styles.conImg} source={require("../../home/image/tea/gift.jpg")} />
                                <View style={styles.conText}>
                                    <Text style={styles.title} numberOfLines={1}>150g乌龙毫茶白乌龙清新浓郁好喝不停</Text>
                                    <Text style={styles.btn}>檀木原色</Text>
                                    <View style={styles.text}>
                                        <Text style={styles.tex1}>￥254.00</Text>
                                        <Text style={styles.tex2}>礼盒</Text>
                                        <Text style={styles.tex3}>￥50</Text>
                                        <Text style={styles.tex4}>x1</Text>
                                    </View>
                                </View>
                            </View>
                            <Text style={styles.con6}>
                                购买日期 2017-12-28
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
