import React,{Component} from "react";
import {StyleSheet,View,Text,Image,TextInput,TouchableOpacity,Button,ScrollView} from "react-native";
import HeadView from "../../common/components/HeadView";
var dimensions=require("Dimensions");
var {width,height} =dimensions.get("window");
export default class WebLetterView extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <HeadView navigator={this.props.navigator} name="网站站内信" />
                <ScrollView>
                    <View style={styles.letter}>
                        <Text style={styles.con}>茶叶青茶绿茶红茶茶叶青青茶绿茶红茶茶叶青茶绿茶红茶茶叶青茶绿茶红茶茶叶青茶绿茶红茶茶叶青茶绿茶红茶茶叶青茶绿茶红茶</Text>
                        <Text style={styles.time}>2018-04-05</Text>
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
        paddingLeft: 12,
        // paddingRight: 12,
        paddingTop: 12,
        paddingBottom: 12,
        marginTop: 10,
    },
    con:{
        fontSize:13,
        color:"#333",
        lineHeight:20,
        flexWrap: 'wrap',
    },
    time:{
        fontSize:12,
        color:"#888",
        lineHeight:20,
        textAlign:"right",
        paddingRight:12,
    }
})