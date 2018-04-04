import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";

class TabsControl extends React.Component {

    constructor() {
        super();
        this.state = {
            currentIndex: 0
        };
    }

    check_tittle_index(index) {
        return index === this.state.currentIndex ? styles.subCtrlActive : styles.subCtrl;
    }

    // check_item_index(index) {
    //     return index === this.state.currentIndex ? styles.subCon :null;
    // }

    render() {
        let _this = this;
        return (
            <View>
                <View style={styles.tabList}>
                    {React.Children.map(this.props.children, (element, index) => {
                        return (
                            <Text onPress={() => { this.setState({ currentIndex: index }) }} style={this.check_tittle_index(index)}>{element.props.name}</Text>
                        );
                    })}
                </View>
                <View style={styles.tabCon}>
                    {React.Children.map(this.props.children, (element, index) => {
                        return (
                            this.state.currentIndex===index?
                           <View>{element}</View>:null
                        );
                    })}
                </View>
            </View>
        );
    }
}
export default class TabCtrl1 extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <TabsControl>
                    <View name="社会新闻">
                        <Text>
                             社会新闻的内容
                        </Text>
                    </View>
                    <View name="体育世界">
                        <Text>
                            体育世界的内容
                        </Text>
                    </View>
                    <View name="娱乐圈">
                        <Text>
                             娱乐圈的内容
                        </Text>
                    </View>
                </TabsControl>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    datails: {
        marginTop: 10,
    },
    tabList: {
        backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 46,
        paddingRight: 46,
        height: 50,
    },
    subCtrl: {
        fontSize: 14,
        color: "#888",
        lineHeight: 50,
    },
    subCtrlActive: {
        fontSize: 14,
        color: "#b71627",
        lineHeight: 50,
    },
    tabCon: {
        height: 50,
    },
    subCon:{
        backgroundColor:"red"
    }
})