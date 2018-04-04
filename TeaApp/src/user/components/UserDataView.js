import React, { Component } from "react";
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity } from "react-native";
import styles from "../styles/UserDataStyle";
import HeadView from "../../common/components/HeadView";
import ChangePassView from "../components/ChangePassView"
import ChangeNameView from "../components/ChangeNameView"

export default class UserDataView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mask: false,
        }
        this.mask=this.mask.bind(this);
        this.cancel=this.cancel.bind(this);
    }
    mask(){
        this.setState((state)=>{
            return {
                mask:true
            }
        })
           
    }
    cancel(){
        this.setState((state)=>{
            return {
                mask:false
            }
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <HeadView navigator={this.props.navigator} name="个人资料" />
                <ScrollView style={{ marginTop: 10, }}>
                    <TouchableOpacity onPress={this.mask} style={styles.user}>
                        <Text style={styles.title}>头像
                        </Text>
                        <View style={styles.photo}>
                            <Image style={styles.img} source={require("../image/my/photo.png")} />
                        </View>
                        <Image style={styles.next} source={require("../../home/image/tea/next.png")} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.user} onPress={() => {
                        this.props.navigator.push({
                            params: { name: "changeName" },
                            component: ChangeNameView
                        })
                    }}>
                        <Text style={styles.title}>昵称
                        </Text>
                        <View style={styles.photo}>
                            <Text style={styles.photoText}>茶道</Text>
                        </View>
                        <Image style={styles.next} source={require("../../home/image/tea/next.png")} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.user} onPress={() => {
                        this.props.navigator.push({
                            params: { name: "changePass" },
                            component: ChangePassView
                        })
                    }}>
                        <Text style={styles.title}>密码
                        </Text>
                        <View style={styles.photo}>
                            <Text style={styles.photoText}>修改</Text>
                        </View>
                        <Image style={styles.next} source={require("../../home/image/tea/next.png")} />
                    </TouchableOpacity>
                    <Text style={styles.change}>退出登录</Text>
                </ScrollView>
                {this.state.mask ?
                <View style={styles.mask}>
                    <View style={styles.photos}>
                        <View style={[styles.paizhao, { borderBottomColor: "#c4c4c4", borderBottomWidth: 1 }]}>
                            <Image style={styles.photoImg} source={require("../image/my/xiangce.png")} />
                            <Text style={styles.photoText}>相册</Text>
                        </View>
                        <View style={styles.paizhao}>
                            <Image style={styles.photoImg} source={require("../image/my/paizhao.png")} />
                            <Text style={styles.photoText}>拍照</Text>
                        </View>
                    </View>
                    <Text style={styles.clear} onPress={this.cancel}>取消</Text>
                </View>
                 :null}

            </View>
        )
    }
}