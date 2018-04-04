import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    TouchableOpacity,
    Dimensions,
    DeviceEventEmitter
} from 'react-native';

import ShoppingItemComponent from './ShoppingItemComponent';
import confirmOrderView from "./confirmOrderView.js"

const data = require('../../data/components/shoping.json');

export default class ShoppingCarPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allSelecte: data.isAllSelect,
            totalMoney: data.totalMoney,
            editBtn: false,
        }
        this.delete=this.delete.bind(this);
    };
    getMoney = (m) => {
        this.state.totalMoney = this.state.totalMoney + m;
        //this.state.totalMoney += m;
        data.totalMoney = this.state.totalMoney;
        this.setState({
            totalMoney: this.state.totalMoney
        });

        let i = 0;
        data.datas.map((item) => {
            if (item.isSelect != true) {
                i += 1;
            }
        });
        if (i == 0) {
            data.isAllSelect = true;
            this.setState({ allSelecte: true })
        }
        else {
            data.isAllSelect = false;
            this.setState({ allSelecte: false })
        }
    };

    renderItem = (item) => {
        return (
            <ShoppingItemComponent
                itemData={item}
                money={this.getMoney}
            />
        )
    };

    allSelect = () => {
        data.totalMoney = 0;
        data.isAllSelect = !data.isAllSelect;
        this.state.totalMoney = 0;
        DeviceEventEmitter.emit('allSelect', !this.state.allSelecte);
        this.setState({ allSelecte: !this.state.allSelecte })
    };

    separatorView = () => {
        return (
            <View style={{ height: 10, backgroundColor: '#e9e9e9' }} />
        )
    };

    keyExtractor = (item) => item.name;

    delete(a){
        alert(a)
    }
    render() {
        let { allSelecte, totalMoney } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>购物车</Text>
                    <Text style={styles.save} onPress={() => {
                        this.setState({
                            editBtn: !this.state.editBtn
                        })
                    }}>编辑</Text>
                </View>
                <FlatList data={data.datas}
                    ItemSeparatorComponent={this.separatorView}
                    renderItem={({ item }) => this.renderItem(item)}
                    keyExtractor={this.keyExtractor}
                />
                <View style={styles.tool}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity style={styles.select} onPress={this.allSelect}>
                            <Image source={allSelecte ? require('./imgs/login_radio_selected.png') : require('./imgs/login_radio_normall.png')} />
                            <Text style={{ marginLeft:3 }}>全选</Text>
                        </TouchableOpacity>
                        {this.state.editBtn ?
                            null :
                            <Text style={styles.allMoneyText}>
                                合计 ￥{this.state.totalMoney}
                            </Text>
                        }
                    </View>
                    {this.state.editBtn ?
                        <View style={styles.balance}>
                            <TouchableOpacity style={[styles.baBtn,{borderColor:"#f7ae3c"}]}>
                                <Text style={{lineHeight:24,color:"#f7ae3c",fontSize:13}}>移动收藏夹</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.baBtn,{borderColor:"#ea4a4a"}]}>
                                <Text style={{lineHeight:24,color:"#ea4a4a",fontSize:13}} onPress={this.delete.bind(data.datas)}>删除</Text>
                            </TouchableOpacity>
                        </View>
                        :
                        <View style={styles.balance}>
                            <Text style={styles.balanceText} onPress={()=>{
                                this.props.navigator.push({
                                    params:{name:"confirmOrder"},
                                    component:confirmOrderView
                                })
                            }}>去结算</Text>
                        </View>
                    }
                </View>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 44,
        backgroundColor: "#fff",
        borderBottomColor: "#d6d6d8",
        borderBottomWidth: 1
    },
    headerTitle: {
        height: 44,
        fontSize: 15,
        color: "#000",
        lineHeight: 44,
        textAlign: "center",
    },
    save: {
        position: "absolute",
        height: 44,
        right: 12,
        top: 0,
        color: "#333",
        fontSize: 14,
        lineHeight: 44,
    },
    tool: {
        height: 44,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center',
        borderTopWidth: 1,
        borderTopColor: '#D3D3D3'
    },
    select: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
    },
    balance: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: 'flex-end',
    },
    allMoneyText: {
        fontSize: 15,
        marginLeft: 15,
        color: "#333",
    },
    balanceText: {
        fontSize: 16,
        color: 'white',
        width: 100,
        height: 44,
        backgroundColor: 'red',
        lineHeight: 44,
        textAlign: "center"
    },
    baBtn: {
        paddingLeft: 20,
        paddingRight: 20,
        marginRight: 12,
        height: 26,
        borderWidth: 1,
        borderRadius: 13,
    }
});