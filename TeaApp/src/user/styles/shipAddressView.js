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
    add:{
        width:width,
        height:50,
        alignItems: 'center',
    },
    addText:{
        width:200,
        height:36,
        backgroundColor:"#ea4a4a",
        fontSize:14,
        color:"#fff",
        borderRadius: 20,
        lineHeight:36,
        textAlign:"center",
    }
})