import { StyleSheet } from "react-native";
var dimensions = require("Dimensions");
var { width, height } = dimensions.get("window");
export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#f6f6f8"
    },
    list:{
        width:width,
        backgroundColor:"#fff",
    },
    mesList:{
        width:width,
        height:60,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 12,
        paddingRight: 12,
        justifyContent:"space-between", 
        marginBottom: 5,
    },
    mesImg:{
        width:40,
        height:40,
        marginRight: 10,
    },
    mesText:{
        flex:1,
        height: 40,
    },
    mesRight:{
        flexDirection: 'row',
        justifyContent:"space-between",
    },
    mes1:{
        fontSize:13,
        lineHeight:20,
        color:"#888",
    },
    mesTime:{
        fontSize:11,
        color:"#888",
        textAlign:"right",
    },
    widthCal:{
        fontSize:12,
        color:"#888",
        lineHeight:20,
    }
})
