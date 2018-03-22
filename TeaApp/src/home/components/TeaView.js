import React, { Component } from "react";
import { Image, View, TouchableOpacity, Text, TextInput, Button,ScrollView } from "react-native";
import styles from "../styles/TeaStyle";
export default class TeaView extends React.Component {
    render() {
        return ( 
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>茶园</Text>
                </View>
                <ScrollView style={styles.scroll}>
                    <Image style={styles.teaBanner} source={require("../image/tea/teaBanner.png")}/>
                </ScrollView>
            </View>
        )
    }
}