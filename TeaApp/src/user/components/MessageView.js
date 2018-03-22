import React, { Component } from "react";
import { Image, View, Text, TouchableOpacity, ScrollView, TextInput, Button } from "react-native";
import styles from "../styles/MessageStyle";
import HeadView from "../../common/components/HeadView";
export default class MessageView extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <HeadView navigator={this.props.navigator} name="消息" />
                <View style={styles.list}>
                    <View style={mesList}>
                        <Image style={styles.mesImg} />
                        <View style={styles.mesText}></View>
                        <Text style={styles.mesTime}></Text>
                    </View>
                </View>
            </View>
        )
    }
}