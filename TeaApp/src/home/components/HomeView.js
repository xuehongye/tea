import React, { Component } from "react";
import { Image, View, TouchableOpacity, Text, ScrollView, TextInput, Button } from "react-native";
import styles from "../styles/HomeStyle"
import ScrollViewTop from "../../common/components/ScrollViewTop"
export default class HomeView extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: '关键字搜索' };
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image style={styles.newsImg} source={require("../../user/image/index/navbutton.png")} />
                    <View style={styles.search}>
                        <TextInput
                            onChangeText={(text) => this.setState({ text })}
                            value={this.state.text}
                            underlineColorAndroid={"transparent"}
                            style={styles.searchText}
                        />
                        <Image style={styles.searchImg} source={require("../../user/image/index/search.png")} />
                    </View>
                    <Image style={styles.RichScanImg} source={require("../../user/image/index/navscanning.png")} />
                </View>
                <ScrollView style={styles.content}>
                    <View style={styles.conBox}>
                        <ScrollViewTop/>
                    </View>
                    <View style={styles.classify}>
                        <View style={styles.classList}>
                            <Image style={styles.listImg} source={require("../../user/image/index/btnoolong.png")} />
                            <Text style={styles.listText}>寿宁高山乌龙茶</Text>
                        </View>
                        <View style={styles.classList}>
                            <Image style={styles.listImg} source={require("../../user/image/index/btnblacktea.png")} />
                            <Text style={styles.listText}>寿宁高山乌龙茶</Text>
                        </View>
                        <View style={styles.classList}>
                            <Image style={styles.listImg} source={require("../../user/image/index/btugreen.png")} />
                            <Text style={styles.listText}>寿宁高山乌龙茶</Text>
                        </View>
                        <View style={styles.classList}>
                            <Image style={styles.listImg} source={require("../../user/image/index/btuwhite.png")} />
                            <Text style={styles.listText}>寿宁高山乌龙茶</Text>
                        </View>
                        <View style={styles.classList}>
                            <Image style={styles.listImg} source={require("../../user/image/index/btuCatalog.png")} />
                            <Text>分类</Text>
                        </View>
                    </View>
                    <View style={styles.noticeList}>
                        <Image style={styles.noticeLeft} source={require("../../user/image/index/ioonNotice.png")} />
                        <View style={styles.noticeRight}>
                            <View style={styles.hotText}>
                                <Text style={styles.hot}>新</Text>
                                <Text style={styles.hot}>热</Text>
                            </View>
                            <View style={styles.hotList}>
                                <Text style={styles.list}>寿宁高山乌龙茶最新产品....</Text>
                                <Text style={styles.list}>2017年新茶 碧螺春即将上市....</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.bigImg}>
                        <Image style={styles.picImg} source={require("../../user/image/index/getBanner.jpg")} />
                    </View>
                    <View style={styles.detailList}
                    >
                        <View style={styles.every}>
                            <View style={styles.imgBorder}>
                                <Image style={styles.teaImg} source={require("../../user/image/index/btuwhite.png")} />
                            </View>
                            <View style={styles.teaText}>
                                <Text style={styles.teaTitle}>丽皇香新茶安溪铁观音浓香型乌龙茶兰花香茶叶 小罐装礼盒</Text>
                                <View style={styles.teaPrice}>
                                    <View style={styles.bigPrice}>
                                        <Text style={styles.qian}>￥250</Text>
                                        <Text style={styles.sales}>销量2050</Text>
                                    </View>
                                    <View style={styles.smallPrice}>
                                        <Text style={styles.qian}>￥50</Text>
                                        <Text style={styles.gifts}>礼盒价</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.every}>
                            <View style={styles.imgBorder}>
                                <Image style={styles.teaImg} source={require("../../user/image/index/btuwhite.png")} />
                            </View>
                            <View style={styles.teaText}>
                                <Text style={styles.teaTitle}>丽皇香新茶安溪铁观音浓香型乌龙茶兰花香茶叶 小罐装礼盒</Text>
                                <View style={styles.teaPrice}>
                                    <View style={styles.bigPrice}>
                                        <Text style={styles.qian}>￥250</Text>
                                        <Text style={styles.sales}>销量2050</Text>
                                    </View>
                                    <View style={styles.smallPrice}>
                                        <Text style={styles.qian}>￥50</Text>
                                        <Text style={styles.gifts}>礼盒价</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.every}>
                            <View style={styles.imgBorder}>
                                <Image style={styles.teaImg} source={require("../../user/image/index/btuwhite.png")} />
                            </View>
                            <View style={styles.teaText}>
                                <Text style={styles.teaTitle}>丽皇香新茶安溪铁观音浓香型乌龙茶兰花香茶叶 小罐装礼盒</Text>
                                <View style={styles.teaPrice}>
                                    <View style={styles.bigPrice}>
                                        <Text style={styles.qian}>￥250</Text>
                                        <Text style={styles.sales}>销量2050</Text>
                                    </View>
                                    <View style={styles.smallPrice}>
                                        <Text style={styles.qian}>￥50</Text>
                                        <Text style={styles.gifts}>礼盒价</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.every}>
                            <View style={styles.imgBorder}>
                                <Image style={styles.teaImg} source={require("../../user/image/index/btuwhite.png")} />
                            </View>
                            <View style={styles.teaText}>
                                <Text style={styles.teaTitle}>丽皇香新茶安溪铁观音浓香型乌龙茶兰花香茶叶 小罐装礼盒</Text>
                                <View style={styles.teaPrice}>
                                    <View style={styles.bigPrice}>
                                        <Text style={styles.qian}>￥250</Text>
                                        <Text style={styles.sales}>销量2050</Text>
                                    </View>
                                    <View style={styles.smallPrice}>
                                        <Text style={styles.qian}>￥50</Text>
                                        <Text style={styles.gifts}>礼盒价</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
