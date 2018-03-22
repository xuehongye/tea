import React, { Component } from "react";
import { Image, View, TouchableOpacity, Text, TextInput, Button, ScrollView } from "react-native";
import styles from "../styles/ShopCarStyle";
import confirmOrderView from '../../user/components/confirmOrderView'
import HeadView from '../../common/components/HeadView';
import CarListView from "../../common/components/carListView";

export default class ShopCarView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkState: false,
        }
        this.activeTab = this.activeTab.bind(this);

    }
    activeTab() {
        this.setState({
            checkState: !this.state.checkState
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <HeadView navigator={this.props.navigator} hidenleftBtn={true} name="购物车" />
                <ScrollView style={styles.scroll}>
                    <CarListView />
                    <CarListView />
                    <CarListView />
                    <CarListView />
                </ScrollView>
                <View style={styles.count}>
                    <View style={styles.checkText}>
                        <View style={styles.checkBox}>
                            <TouchableOpacity onPress={this.activeTab}>
                                {this.state.checkState == false ? (<Image style={styles.checkImg} source={require("../image/tea/check.png")} />)
                                    : (<Image style={styles.checkImg} source={require("../image/tea/checkActive.png")} />)
                                }
                            </TouchableOpacity>
                            {this.state.checkState == false ?
                            <Text style={styles.checkAll}>全不选</Text>:
                            <Text style={styles.checkAll}>全选</Text>}
                        </View>
                        <View style={styles.checkPrice}>
                            <Text style={styles.acount}>合计&nbsp;&nbsp;&nbsp;&nbsp;￥1500.00</Text>
                            <Text style={styles.else}>不含运费</Text>
                        </View>
                    </View>
                    <View style={styles.checkBtn}>
                        <TouchableOpacity onPress={() => {
                            this.props.navigator.push({
                                params: { name: 'confirmOrder' },

                                component: confirmOrderView
                            })
                        }}>
                            <Text style={styles.check}>结算(1)</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}