import {StyleSheet} from "react-native";
// 获取屏幕信息
var dimensions=require("Dimensions");
// 获取屏幕的宽度和高度
var {width,height}=dimensions.get("window");
export default styles=StyleSheet.create({
    // tabBtn:{
    //     width:31,
    //     height:40,
    //     flexDirection:"column",
    //     justifyContent:"space-between",
    //     alignItems: 'center',
    // },
    tabImg:{
        width:27,
        height:27,
    },
    indexText:{
        fontSize:10,
        color:"#ea4b4a",
    },
    secondText:{
        fontSize:10,
        color:"#666666",
    }
})