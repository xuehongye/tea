import React, { Component } from "react";
import { Image, View, TouchableOpacity, Text, TextInput, Button, ScrollView } from "react-native";
import styles from "../styles/ExperienceStyle";
export default class ExperienceView extends React.Component {
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
            </View>
        )
    }
}