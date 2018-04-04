import { StyleSheet } from "react-native";
var dimensions = require("Dimensions");
var { width, height } = dimensions.get("window");
export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#f6f6f8"
    },
    scroll:{
        flex:1,
        // alignItems:"center",
    },
    send: {
        width: width,
        height: 49,
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderTopColor: "#d2d2d2",
        flexDirection: 'row',
        alignItems: 'center',
    },
    sendImg:{
        width:27,
        height:27,
        marginLeft: 12,
    },
    input:{
        height:36,
        width: 250,
        marginHorizontal:3,
        borderBottomWidth: 1,
        borderBottomColor:"#cacaca"
    },
    sendText:{
        width:52,
        height:26.5,
        backgroundColor:"#44b5f6",
        borderRadius:5,
        color:"#fff",
        fontSize:13,
        lineHeight:26,
        textAlign:"center",
        marginRight: 12,
    },
    dialog:{
        width:314.5,
        height:81.5,
        flexDirection:"row",
        marginTop: 15,
        alignItems:"center"
    },
    kefuImg:{
        width:46.5,
        height:46.5,
        marginLeft:16,
    },
    kefuText:{
        width:246,
        height:62,
        marginLeft:16,
        position:"relative",
        paddingHorizontal: 18,
        paddingVertical: 15,
    },
    bg:{
        width:246,
        height:62,
        position:"absolute",
        left:0,
        top:0,
    },
    bgText:{
        fontSize:14,
        color:"#333",
    }
})