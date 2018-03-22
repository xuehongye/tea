import {StyleSheet} from "react-native";
var dimensions=require("Dimensions");
var {width,height}=dimensions.get("window");export default styles=StyleSheet.create({
    address:{
        width:width,
        height:111,
        marginBottom:10,
        flexDirection:"row",
        backgroundColor:"#fff",
        paddingLeft: 24,
        paddingRight: 24,
    },
    messageIcon:{
        width:12,
        height:44,
        justifyContent:"space-between",
        marginTop:26,
    },
    user:{
        width:12,
        height:15,
    },
    message:{
        flex:1,
        // width:248,
        height:67.5,
        marginTop:26,
        marginLeft:22,
        justifyContent:"space-between",
    },
    mesTop:{
        width:248,
        height:15,
        flexDirection:"row",
        alignItems:"center",
    },
    name:{
        height:15,
        color:"#282828",
        fontSize:13,
        lineHeight:15,
        marginRight:39,
    },
    name1:{
        height:15,
        color:"#282828",
        fontSize:13,
        lineHeight:15,
    },
    moren:{
        width:29,
        height:14,
        marginLeft:14,
    },
    mesBottom:{
        width:248,
        height:33,
        color:"#888",
        fontSize:13,
        lineHeight:16.5,
    },
    next:{
        width:9,
        height:17,
        marginTop:26,
    },
})