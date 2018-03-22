import { StyleSheet } from "react-native";
// 获取屏幕信息
var dimensions = require("Dimensions");
// 获取屏幕的宽度和高度
var { width, height } = dimensions.get("window");
export default styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        backgroundColor: "#f6f6f8",
    },
    mes:{
        width:width,
        height:114,
        backgroundColor:"#fff",
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 48,
        paddingRight: 48,
        justifyContent:"space-between",
        marginBottom: 10,
    },
    giftImg:{
        width:80,
        height:74,
    },
    mesText:{
        flex:1,
        justifyContent:"space-between",
        marginLeft:28,
    },
    mes1:{
        flexDirection:"row",
    },
    text1:{
        fontSize:14,
        color:"#333",
    },
    text2:{
        fontSize:14,
        color:"#f7ae3c",
    },
    text3:{
        fontSize:14,
        color:"#888",
    },
    state:{
        width:width,
        paddingTop: 30,
        paddingBottom: 30,
        paddingLeft:20,
        paddingRight:20,
    }
})