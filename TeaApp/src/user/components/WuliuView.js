import React, { Component } from "react";
import { Image, View, TouchableOpacity, Text, TextInput, Button, ScrollView } from "react-native";
import HeadView from '../../common/components/HeadView';
import styles from "../styles/WuliuStyle";
export default class WuliuView extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <HeadView navigator={this.props.navigator} name="物流信息" />
                <ScrollView>
                    <View style={styles.mes}>
                        <Image style={styles.giftImg} source={require("../../home/image/tea/gift.jpg")} />
                        <View style={styles.mesText}>
                            <View style={styles.mes1}>
                                <Text style={styles.text1}>物流状态:</Text>
                                <Text style={styles.text2}>运输中</Text>
                            </View>
                            <View style={styles.mes1}>
                                <Text style={styles.text3}>承包快递:</Text>
                                <Text style={styles.text3}>申通快递</Text>
                            </View>
                            <View style={styles.mes1}>
                                <Text style={styles.text3}>运单编号:</Text>
                                <Text style={styles.text3}>5674856957</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.state}>
                        
                    </View>
                </ScrollView>
            </View>
        )
    }
}