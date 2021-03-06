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
    header: {
        width: width,
        height: 44,
        backgroundColor: "#fff",
        paddingLeft: 12,
        paddingRight: 12,
    },
    headerTitle: {
        width: width,
        height: 44,
        fontSize: 15,
        color: "#000",
        textAlign: "center",
        lineHeight: 44,
    },
    newsImg: {
        width: 30,
        height: 30,
        position: "absolute",
        left: 10,
        bottom: 8,
        alignItems:"center",
        zIndex:999,
    },
    nImg:{
        width: 30,
        height: 30,
    },
    memberBg: {
        width: width,
        height: 172,
        position: "relative",
        flexDirection: 'row',
        alignItems: 'center',
    },
    memberImg: {
        width: width,
        height: 172,
        position: "absolute",
        left: 0,
        top: 0,
    },
    photoImg: {
        width: 89,
        height: 89,
        // marginTop:42.5,
        marginLeft: 23,
    },
    loginBtn: {
        width: 67,
        height: 15,
        fontSize: 14,
        color: "#fff",
        marginLeft: 41.5,
        lineHeight: 15,
    },
    loginMes:{
        width:100,
        height:15,
        marginLeft: 41.5,
        flexDirection:"row",
        justifyContent:"space-between",
    },
    phoneImg:{
        width:9,
        height:15,
    },
    phone:{
        fontSize:10.5,
        color:"#fff",
        lineHeight:15,
    },
    userState: {
        width: width,
        height: 50,
        backgroundColor: "#fff",
        flexDirection: "row",
        position: "relative",
        justifyContent: "space-between",
    },
    state1: {
        height: 50,
        fontSize: 14,
        color: "#333",
        lineHeight: 50,
        marginLeft: 10,
    },
    state2: {
        height: 50,
        fontSize: 12,
        color: "#777",
        lineHeight: 50,
        marginRight: 39,
    },
    next: {
        width: 10,
        height: 16,
        position: "absolute",
        top: 17,
        right: 10,
    },
    nextImg:{
        width: 10,
        height: 16,
    },
    orderPlay: {
        width: width,
        marginTop: 10,
        backgroundColor: "#fff",
        alignItems: "center",
    },
    orderState: {
        width: width - 20,
        height: 88,
        borderTopColor: "#f6f6f8",
        borderTopWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 21.5,
        paddingRight: 21.5,
        marginBottom: 10,
    },
    order: {
        width: 36,
        height: 43.5,
        alignItems: "center",
        justifyContent:"space-between",
    },
    orderImg: {
        width: 23.5,
        height: 21.5,
    },
    wait:{
        width:36,
        height:12,
        fontSize:11,
        lineHeight:12,
        textAlign:"center",
    }
})