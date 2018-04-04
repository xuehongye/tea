import React,{Component} from "react";
import {Text,View,Image,TextInput,TouchableOpacity,ScrollView} from "react-native";
import styles from "../styles/ForgetPassStyle";
import HeadView from "../../common/components/HeadView";

export default class ForgetPassView extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            old: '手机号码' ,
            new:"验证码",
            true:"新密码",
            again:"确认密码",
            mask:false
        };
        this.verifyBtn=this.verifyBtn.bind(this);
      }
      verifyBtn(){
            if(!this.state.mask){
                this.setState((state)=>{
                    return{
                        mask:true
                    }
                })
            }else{
                this.props.navigator.pop()
            }
    }
    render(){
        return(
            <View style={styles.container}>
                <HeadView navigator={this.props.navigator} name="忘记密码"/>
                <ScrollView style={{ paddingLeft: 19, paddingRight: 19, paddingTop: 10 }}>
                    <View style={styles.user}>
                        <Image source={require("../image/my/phone.png")} style={[styles.mima,{height:22}]}/>
                        <TextInput style={[styles.input, { padding: 0 }]} underlineColorAndroid="transparent" multiline={true} 
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.old}/>
                    </View>
                    <View style={styles.user}>
                        <Image source={require("../image/my/yanzhengma.png")} style={[styles.mima,{width:12.5,height:24}]}/>
                        <TextInput style={[styles.input, { padding: 0 }]} underlineColorAndroid="transparent" multiline={true} 
                          onChangeText={(text) => this.setState({text})}
                          value={this.state.new}/>
                          <Text style={styles.send}>重新发送59</Text>
                    </View>
                     <View style={styles.user}>
                        <Image source={require("../image/my/mima.png")} style={styles.mima}/>
                        <TextInput style={[styles.input, { padding: 0 }]} underlineColorAndroid="transparent" multiline={true} 
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.true}/>
                    </View>
                    <View style={styles.user}>
                        <Image source={require("../image/my/mima.png")} style={styles.mima}/>
                        <TextInput style={[styles.input, { padding: 0 }]} underlineColorAndroid="transparent" multiline={true} 
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.again}/>
                    </View>
                    {/* 新密码与再次输入密码不一致的时候弹出 */}
                    <Text style={styles.errorInput}>*新密码与确认密码不符</Text>

                    {/* 确认修改按钮 */}
                    <Text style={styles.change} 
                    onPress={this.verifyBtn}
                    >确认修改</Text>
                </ScrollView>
                {/* 修改密码 验证码输入不正确时 */}
                {this.state.mask?
                <View style={styles.mask}>
                    <View style={styles.item}>
                        <Image style={styles.cuoImg} source={require("../image/my/cuowu.png")}/>
                        <Text style={styles.cuoTxt1}>验证码错误</Text>
                        <Text style={styles.cuoTxt2} onPress={()=>{
                            this.setState({
                                mask:false
                            })
                        }}>确定
                        </Text>
                    </View>
                </View>
                :null
                }
            </View>
        )
    }
}