import { StyleSheet } from "react-native";
var dimensions = require("Dimensions");
var { width, height } = dimensions.get("window");
export default styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#f6f6f8"
    },
    news:{
        width:width,
        height:89.5,
        backgroundColor:"#fff",
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:10,
    },
    newImg:{
        width:79,
        height:89.5,
        marginRight: 10,
    },
    newText:{
        flex:1,
        height:57,
        justifyContent:"space-between"
    },
    new1:{
        fontSize:13,
        color:"#333",
    },
    new2:{
        fontSize:12,
        color:"#888",
    }, 
    widthSome:{
        width:width - (13+42+5+45+11+18+10),
    },
    time1:{
        width:53,
        fontSize:10,
        color:"#888",
    },
    system:{
        width:width,
        height:60,
        marginTop: 10,
        paddingHorizontal:10,
        backgroundColor:"#fff",
        flexDirection: 'row',
        alignItems: 'center',
    },
    sysImg:{
        width:40,
        height:40,
        marginRight: 10,
    },
    sysText:{
        flex:1,
        height:36,
        justifyContent:"space-between"
    },
    sys1:{
        fontSize:13,
        color:"#333",
    },
    sys2:{
        fontSize:12,
        color:"#888",
    },
    time2:{
        width:53,
        fontSize:10,
        color:"#888",
        textAlign:"right"
    },
})