import { StyleSheet } from "react-native";
var dimensions = require("Dimensions");
var { width, height } = dimensions.get("window");

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        position:"relative",
        backgroundColor:"#f6f6f8"
    },
    user: {
        height: 47,
        flexDirection: "row",
        backgroundColor: "#fff",
        alignItems: 'center',
        marginBottom: 10,
        paddingLeft: 19,
        paddingRight: 19,
        position: "relative",
    },
    send: {
        width: 72,
        height: 22.5,
        borderColor: "#666",
        borderWidth: 1,
        fontSize: 11,
        color: "#666",
        lineHeight: 22.5,
        textAlign: "center",
        position: "absolute",
        right: 10,
        top: 12.25,
    },
    input: {
        flex: 1,
        color: "#d1d1d1",
        fontSize: 15,
        paddingLeft: 19,
        paddingRight: 19,
    },
    mima: {
        width: 15.5,
        height: 19,
    },
    change: {
        height: 48,
        backgroundColor: "#ea4a4a",
        paddingLeft: 19,
        paddingRight: 19,
        marginTop:18,
        color: "#fff",
        fontSize: 18,
        textAlign: "center",
        lineHeight: 48,
    },
    errorInput: {
        marginTop: 5,
        fontSize:11,
        color:"#ea4a4a",
    },
    mask:{
        width:width,
        height:height,
        position:"absolute",
        top:0,
        left:0,
        backgroundColor:"rgba(0,0,0,0.4)",
        alignItems:"center",
        justifyContent:"center",
    },
    item:{
        width:238.5,
        height:131,
        backgroundColor:"#fff",
        alignItems:"center",
    },
    cuoImg:{
        width:18.5,
        height:16.5,
        marginTop:24
    },
    cuoTxt1:{
        fontSize:13.5,
        color:"#666",
        marginTop:17,
        marginBottom:14
    },
    cuoTxt2:{
        width:238.5,
        fontSize:15,
        color:"#ea4a4a",
        paddingTop: 11,
        borderTopColor:"#dfdfdf",
        borderTopWidth: 1,
        textAlign:"center"
    }
});