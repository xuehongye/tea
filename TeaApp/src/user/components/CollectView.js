import React, { Component } from 'react';
import { View, Text, Image, TextInut, Button, ScrollView, TouchableOpacity } from "react-native";
import styles from "../styles/CollectStyle";
import HeadView from "../../common/components/HeadView";
class ValidList extends React.Component{
    render(){
        return(
            <View style={styles.validList}>
                                <View style={styles.listTop}>
                                    <Image style={styles.listImg} source={require("../image/my/collect.png")} />
                                    <Text style={styles.mask}></Text>
                                </View>
                                <View style={styles.listText}>
                                    <Text style={styles.title1} numberOfLines={1}>乌龙茶，白毫乌龙,清</Text>
                                    <View style={styles.price1}>
                                        <Text style={styles.pLeft1}>
                                            ￥250
                                    </Text>
                                        <Text style={styles.pRight1}>
                                            失效删除
                                    </Text>
                                    </View>
                                </View>
                            </View>
        )
    }
}
export default class CollectView extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <HeadView navigator={this.props.navigator} name="收藏" />
                <ScrollView>
                    <View style={styles.valid}>
                        <View style={styles.validList}>
                            <View style={styles.listTop}>
                                <Image style={styles.listImg} source={require("../image/my/collect.png")} />
                            </View>
                            <View style={styles.listText}>
                                <Text style={styles.title} numberOfLines={1}>乌龙茶，白毫乌龙,清</Text>
                                <View style={styles.price}>
                                    <Text style={styles.pLeft}>
                                        ￥250
                                    </Text>
                                    <Text style={styles.pRight}>
                                        销量2545
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.validList}>
                            <View style={styles.listTop}>
                                <Image style={styles.listImg} source={require("../image/my/collect.png")} />
                                <Text style={styles.decline}>比收藏时降价50.00元</Text>
                            </View>
                            <View style={styles.listText}>
                                <Text style={styles.title} numberOfLines={1}>乌龙茶，白毫乌龙,清轻茶</Text>
                                <View style={styles.price}>
                                    <Text style={styles.pLeft}>
                                        ￥250
                                    </Text>
                                    <Text style={styles.pRight}>
                                        销量2545
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.validList}>
                            <View style={styles.listTop}>
                                <Image style={styles.listImg} source={require("../image/my/collect.png")} />
                            </View>
                            <View style={styles.listText}>
                                <Text style={styles.title} numberOfLines={1}>乌龙茶，白毫乌龙,清</Text>
                                <View style={styles.price}>
                                    <Text style={styles.pLeft}>
                                        ￥250
                                    </Text>
                                    <Text style={styles.pRight}>
                                        销量2545
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.unvalid}>
                        <View style={styles.unTop}>
                            <Text style={styles.unTitle}>失效（25）</Text>
                            <Text style={styles.unBtn}>一键删除</Text>
                        </View>
                        <View style={styles.unBottom}>
                            {/* <View style={styles.validList}>
                                <View style={styles.listTop}>
                                    <Image style={styles.listImg} source={require("../image/my/collect.png")} />
                                    <Text style={styles.mask}></Text>
                                </View>
                                <View style={styles.listText}>
                                    <Text style={styles.title1} numberOfLines={1}>乌龙茶，白毫乌龙,清</Text>
                                    <View style={styles.price1}>
                                        <Text style={styles.pLeft1}>
                                            ￥250
                                    </Text>
                                        <Text style={styles.pRight1}>
                                            失效删除
                                    </Text>
                                    </View>
                                </View>
                            </View> */}
                            <ValidList/>
                            <ValidList/>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}