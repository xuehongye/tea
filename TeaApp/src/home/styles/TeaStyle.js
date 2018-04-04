import {StyleSheet} from "react-native";
// 获取屏幕信息
var dimensions=require("Dimensions");
// 获取屏幕的宽度和高度
var {width,height}=dimensions.get("window");
export default styles=StyleSheet.create({
    container:{
        width:width,
        backgroundColor:"#f6f6f8"
    },
    header:{
        width:width,
        height:44,
        backgroundColor:"#fff"
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
    },
    vedio:{
        marginTop:20,
    },
    vedioTit:{
        fontSize:15,
        color:"#333",
        paddingLeft: 12,
        paddingRight: 12,
        lineHeight:20,
    },
    vedioImg:{
        height:255.45,
    },
    fullScreen: {
        width:width,
        height:255.45,
    },
    foot:{
        marginTop:30,
        alignItems: 'center',
        paddingLeft:24,
        paddingRight:24,
        marginBottom: 60,
    },
    f1:{
        fontSize:14,
        lineHeight:20,
        color:"#888",
        fontWeight:"900",
        textAlign:"center"
    },
    f2:{
        fontSize:14,
        lineHeight:20,
        color:"#888",
        textAlign:"center",
        flexWrap: 'wrap',
    }
})