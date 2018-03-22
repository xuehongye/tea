import { StyleSheet } from "react-native";
// 获取屏幕信息
var dimensions = require("Dimensions");
// 获取屏幕的宽度和高度
var { width, height } = dimensions.get("window");
export default styles = StyleSheet.create({
    container: {
        flex:1,
        width: width,
        backgroundColor: "#f6f6f8",
    },
    success:{
        width:width,
        height:254.5,
        backgroundColor:"#fff",
        paddingTop: 29,
        paddingBottom: 54,
        paddingLeft: 46,
        paddingRight: 46,
        alignItems: 'center',
    },
    trueImg:{
        width:49,
        height:49,
    },
    trueText:{
        width:83.5,
        height:13.5,
        fontSize:13,
        lineHeight:13.5,
        color:"#333",
        marginTop: 15,
    },
    shop:{
        width:189.5,
        height:12,
        fontSize:11,
        lineHeight:12,
        color:"#999",
        marginTop:10,
    },
    btns:{
        width:284,
        height:33,
        flexDirection: 'row',
        justifyContent:"space-between",
        marginTop:40,
    },
    count:{
        width:284,
        height:33,
        backgroundColor:"#ea4c48",
        borderRadius: 20,
        lineHeight:33,
        textAlign:"center",
        fontSize:14,
        color:"#fff",
    },
})