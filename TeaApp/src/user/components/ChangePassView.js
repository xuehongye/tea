import React, { Component } from "react";
import { Text, View, TextInput, Image, ScrollView, TouchableOpacitys } from "react-native";
import styles from "../styles/ChangePassStyle";
import HeadView from "../../common/components/HeadView";

export default class ChangePassView extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            old: '原密码' ,
            new:"新密码",
            true:"确认密码"
        };
      }
    
    render() {
        return (
            <View style={styles.container}>
                <HeadView navigator={this.props.navigator} name="修改密码" />
                <ScrollView style={{ paddingLeft: 19, paddingRight: 19, paddingTop: 10 }}>
                    <View style={styles.user}>
                        <Image source={require("../image/my/mima.png")} style={styles.mima}/>
                        <TextInput style={[styles.input, { padding: 0 }]} underlineColorAndroid="transparent" multiline={true} 
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.old}/>
                    </View>
                    <View style={styles.user}>
                        <Image source={require("../image/my/mima.png")} style={styles.mima}/>
                        <TextInput style={[styles.input, { padding: 0 }]} underlineColorAndroid="transparent" multiline={true} 
                          onChangeText={(text) => this.setState({text})}
                          value={this.state.new}/>
                    </View>
                     <View style={styles.user}>
                        <Image source={require("../image/my/mima.png")} style={styles.mima}/>
                        <TextInput style={[styles.input, { padding: 0 }]} underlineColorAndroid="transparent" multiline={true} 
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.true}/>
                    </View>
                    <Text style={styles.change} onPress={()=>{
                        this.props.navigator.pop()
                    }}>确认修改</Text>
                </ScrollView>
            </View>
        )
    }
}