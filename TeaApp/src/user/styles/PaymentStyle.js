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
    time:{
        width:width,
        height:131,
        backgroundColor:"#fff",
        paddingTop: 33,
        paddingBottom: 21,
        paddingLeft: 126,
        paddingRight: 127,
        marginBottom: 26,
    },
    time1:{
        width:123,
        height:40,
        flexDirection: 'row',
        justifyContent:"space-between",
    },
    pay:{
        fontSize:14,
        color:"#333",
    },
    payTime:{
        color:"#4dbdf1",
        fontSize:14,
        marginBottom:14,
    },
    money:{
        height:15.5,
        flexDirection: 'row',
        justifyContent:"center",
    },
    number:{
        width:123,
        height:13,
        marginTop: 21,
        fontSize:12,
        color:"#999",
        textAlign:"center",
        lineHeight:13,
    },
    methods:{
        width:width,
        height:120,
        backgroundColor:"#fff",
        justifyContent:"space-between",
    },
    method:{
        width:width,
        height:60,
        flexDirection:"row",
        alignItems: 'center',
    },
    wechat:{
        width:24,
        height:20,
        marginLeft: 17,
    },
    weText:{
        flex:1,
        height:60,
        lineHeight:60,
        fontSize:13,
        color:"#333",
        marginLeft:17,
    },
    btn:{
        width:22,
        height:22,
        marginRight:17,
    },
    con:{
        width:width,
        height:49,
        backgroundColor:"#ea4c48",
    },
    payBtn:{
        width:width,
        height:49,
        color:"#fff",
        fontSize:13.5,
        lineHeight:49,
        textAlign:"center",
    },
})