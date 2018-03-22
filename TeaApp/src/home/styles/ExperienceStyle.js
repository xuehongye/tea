import {StyleSheet} from "react-native";
// 获取屏幕信息
var dimensions=require("Dimensions");
// 获取屏幕的宽度和高度
var {width,height} =dimensions.get("window");
export default styles=StyleSheet.create({
    container:{
        flex:1,
        width:width,
    },
    header: {
        width: width,
        height: 45,
        backgroundColor: "#fff",
        position: "absolute",
        left: 0,
        top: 0,
        paddingLeft: 12,
        paddingRight: 12,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999
    },
    search: {
        width: 256,
        height: 27.5,
        backgroundColor: "#f7f8f8",
        alignItems: "center",
        borderRadius: 20,
        position: "relative",
    },
    searchText: {
        padding: 0,
        fontSize: 12,
        color: "#888",
    },
    searchImg: {
        width: 17,
        height: 17,
        position: "absolute",
        top: 5,
        bottom: 0,
        right: 20,
    },
    newsImg: {
        width: 30,
        height: 30,
        position: "absolute",
        left: 10,
        bottom: 8,
    },
    RichScanImg: {
        width: 30,
        height: 30,
        position: "absolute",
        right: 10,
        bottom: 8,
    },
})