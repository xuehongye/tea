import React, { Component } from "react";
import { Image, View, TouchableOpacity, Text, TextInput, Button, ScrollView } from "react-native";
import styles from "../style/carListStyle";
export default class CarListView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkState: false,
        }
        this.activeTab = this.activeTab.bind(this);
        this.add = this.add.bind(this);
        this.subtract = this.subtract.bind(this);
    }
    activeTab() {
        this.setState({
            checkState: !this.state.checkState
        });
    }
    add(){
        
    }
    subtract(){

    }
    render() {
        return (
            <View style={styles.carList}>
                <View style={styles.listTop}>
                    <TouchableOpacity onPress={this.activeTab}>
                        {this.state.checkState == false ? (<Image style={styles.checkImg} source={require("../../home/image/tea/check.png")} />)
                            : (<Image style={styles.checkImg} source={require("../../home/image/tea/checkActive.png")} />)
                        }
                    </TouchableOpacity>
                    <Image style={styles.giftImg} source={require("../../home/image/tea/gift.jpg")} />
                    <View style={styles.giftText}>
                        <Text style={styles.gt_1}>M856 150g/3两装 高山乌龙茶</Text>
                        <Text style={styles.gt_2}>竹筒红色装 【包装不包】</Text>
                        <View style={styles.gt_3}>
                            <View style={styles.gt_3_left}>
                                <Text style={styles.left_price}>￥250.0 原价288</Text>
                                <Text style={styles.left_price}>礼盒￥50</Text>
                            </View>
                            <View style={styles.gt_3_right}>
                                <Text style={styles.add} onPress={this.add}>+</Text>
                                <Text style={styles.gt_3_figure}>1</Text>
                                <Text style={styles.add} onPress={this.subtract}>-</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.listBottom}
                >
                    <Text style={styles.gift}>（包含礼盒价）合计 ￥1500</Text>
                </View>
            </View>
        )
    }
}