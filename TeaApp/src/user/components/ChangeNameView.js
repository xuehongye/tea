import React, { Component } from "react";
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity } from "react-native";
import styles from "../styles/ChangeNameStyle";
import HeadView from "../../common/components/HeadView";


export default class ChangeNameView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "茶道"
        }
        this.empty=this.empty.bind(this);
    }
    empty(){
        this.setState((state)=>{
            return {
                text: ""
            }
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <HeadView navigator={this.props.navigator} name="修改昵称" />
                <View style={styles.user}>
                    <TextInput style={[styles.input, { padding: 0 }]} underlineColorAndroid="transparent" multiline={true}
                        onChangeText={(text) => this.setState({ text })}
                        value={this.state.text} />
                    <TouchableOpacity style={styles.error}  onPress={this.empty}>
                        <Image style={{ width:13,
        height:13,}} source={require("../image/my/error.png")} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.change} onPress={() => {
                    this.props.navigator.pop()
                }}>确认修改</Text>
            </View>
        )
    }
}