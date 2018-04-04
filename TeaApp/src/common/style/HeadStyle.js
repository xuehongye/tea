import { StyleSheet } from "react-native";
// 获取屏幕信息
var dimensions = require("Dimensions");
// 获取屏幕的宽度和高度
var { width, height } = dimensions.get("window");
export default styles = StyleSheet.create({
    header: {
        width: width,
        height: 44,
        backgroundColor:"#fff",
        borderBottomColor:"#d6d6d8",
        borderBottomWidth:1
    },
    headerTitle: {
        width: width,
        height: 44,
        fontSize: 15,
        color: "#000",
        lineHeight: 44,
        textAlign: "center",
    },
    teaBanner: {
        width: width,
        height: 275,
    },
    backbtn: {
        position: "absolute",
        left: 12,
        top: 11,
    },
    backImg: {
        width: 22,
        height: 22,

    },
    leftBtn:{
        height:44,
        position:"absolute",
        height:44,
        right:12,
        top:0,
    },
    save:{
        color:"#333",
        fontSize:14,
        lineHeight: 44,
    }
})