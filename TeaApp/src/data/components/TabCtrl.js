import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";
export default class TabCtrl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: [
                { tabName: "详情", id: 1 },
                { tabName: "参数", id: 2 },
                { tabName: "评论", id: 3 },
            ],
            currentIndex: 1,
        };
    }
    componentDidMount() {
    }
    tabChoiced = (id) => {
        this.setState({
            currentIndex: id
        });
    }
    render() {
        var _this = this;
        var tabList = this.state.tabs.map(function (res, index) {
            var tabStyle = res.id == this.state.currentIndex ? styles.subCtrlActive : styles.subCtrl;
            var tabName = res.id == this.state.currentIndex ?
                "·" + res.tabName : res.tabName;
            return <Text key={index} onPress={this.tabChoiced.bind(_this, res.id)} style={tabStyle}>{tabName}</Text>

        }.bind(_this));
        return (
            <View style={styles.container}>
                <View style={styles.details}>
                    <View style={styles.tabList}>
                        {tabList}
                    </View>
                    <View style={styles.tabCon}>
                        {this.state.currentIndex == 1 ?
                            <View>
                                <Text>详情</Text>
                            </View>
                            : null
                        }
                        {this.state.currentIndex == 2 ?
                            <View>
                                <Text>参数</Text>
                            </View>
                            : null
                        }
                        {this.state.currentIndex == 3 ?
                            <View>
                                <Text>评论</Text>
                            </View>
                            : null
                        }
                    </View>
                </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    datails:{
        marginTop: 10,
    },
    tabList:{
        backgroundColor:"#fff",
        flexDirection:"row",
        justifyContent:"space-between",
        paddingLeft:46,
        paddingRight:46,
        height:50,
    },
    subCtrl:{
        fontSize:14,
        color:"#888",
        lineHeight:50,
    },
    subCtrlActive:{
        fontSize:14,
        color:"#b71627",
        lineHeight:50,
    },
    tabCon:{
        height:50,
    }
})