import {StyleSheet} from "react-native";
// 获取屏幕信息
var dimensions=require("Dimensions");
// 获取屏幕的宽度和高度
var {width,height}=dimensions.get("window");
export default styles=StyleSheet.create({
    container:{
        width:width,
    },
    header:{
        width:width,
        height:44,
        position:"absolute",
        top:0,
        left:0,
    },
    headerTitle:{
        width:width,
        height:44,
        fontSize:15,
        color:"#000",
        lineHeight:44,
        textAlign:"center",
    },
    teaBanner:{
        width:width,
        height:275,
    },
    scroll:{
        width:width,
        marginTop: 44,
    }

})