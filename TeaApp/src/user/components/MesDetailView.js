import React,{Component} from "react";
import {StyleSheet,View,Text,Image,TextInput,TouchableOpacity,Button,ScrollView} from "react-native";
import HeadView from "../../common/components/HeadView";
var dimensions=require("Dimensions");
var {width,height} =dimensions.get("window");
export default class WebLetterView extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <HeadView navigator={this.props.navigator} name="网站公告" />
                <ScrollView>
                    <View style={styles.letter}>
                        <Text style={styles.con}>寿宁高山乌龙茶最新产品</Text>
                        <Text style={styles.time}>发布时间:2018-01-30 03:10:08</Text>
                        <Text style={styles.detail}>寿宁高山乌龙茶最新产品寿宁高山乌龙茶最新产品产品寿宁高山乌产品寿宁高山乌产品寿宁高山乌</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#f6f6f8",
    },
    letter:{
        width:width,
        backgroundColor:"#fff",
        padding:12,
        marginTop: 10,
    },
    con:{
        fontSize:14,
        color:"#333",
        lineHeight:20,
        textAlign:"center", 
    },
    time:{
        fontSize:10,
        color:"#888",
        lineHeight:20,
        textAlign:"right",
        paddingRight:12,
    },
    detail:{
        fontSize:12,
        color:"#888",
        lineHeight:20,
        textAlign:"center",
        flexWrap: 'wrap',
    }
})