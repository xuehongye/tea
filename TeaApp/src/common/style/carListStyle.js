import { StyleSheet } from "react-native";
// 获取屏幕信息
var dimensions = require("Dimensions");
// 获取屏幕的宽度和高度
var { width, height } = dimensions.get("window");
export default styles = StyleSheet.create({
    carList:{
        width:width,
        height:160,
        backgroundColor:"#fff",
        marginBottom: 10,
    },
    listTop:{
        width:width,
        height:110,
        paddingTop: 10,
        paddingBottom:10,
        paddingLeft:10,
        paddingRight:10,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:'center',
    },
    giftImg:{
        width:70,
        height:90,
    },
    giftText:{
        width:220,
        height:90,
        flexDirection:"column",
    },
    gt_1:{
        width:220,
        height:15,
        fontSize:13,
        color:"#000",
        lineHeight:15,
        marginBottom:9,
    },
    gt_2:{
        width:220,
        height:12,
        fontSize:10,
        color:"#888",
        marginBottom:23,
    },
    gt_3:{
        width:220,
        height:30,
        flexDirection:"row",
        // alignItems:"center",
        justifyContent:"space-between",
    },
    gt_3_left:{
        width:88.5,
        height:30,
    },
    gt_3_right:{
        width:92,
        height:24,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
    },
    left_price:{
        fontSize:10,
        color:"#888",
    },
    add:{
        width:24,
        height:24,
        backgroundColor:"#ededed",
        fontSize:14.5,
        textAlign:"center",
        lineHeight:24,
    },
    gt_3_figure:{
        width:44,
        height:24,
        fontSize:14.5,
        textAlign:"center",
        lineHeight:24,
    },
    listBottom:{
        width:width,
        height:50,
        borderTopWidth:1,
        borderTopColor:"#f6f6f8",
    },
    gift:{
        width:width,
        height:50,
        fontSize:14,
        color:"#000",
        textAlign:'right',
        lineHeight:50,
        paddingLeft: 10,
        paddingRight: 10,
    },
    checkImg: {
        width: 24,
        height: 24,
        marginTop:2,
    },
})