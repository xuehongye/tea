import { StyleSheet } from "react-native";
var dimensions = require("Dimensions");
var { width, height } = dimensions.get("window"); export default styles = StyleSheet.create({
    address: {
        marginBottom: 10, 
        backgroundColor: "#fff",
        alignItems:"center",
    },
    addTop: {
        width: width,
        flexDirection: "row",
        paddingLeft: 24,
        paddingRight: 24,
        alignItems:"center",
    },
    messageIcon: {
        width: 12,
        height: 55,
        justifyContent: "space-between",
    },
    user: {
        width: 12,
        height: 15,
    },
    message: {
        flex: 1,
        // width:248,
        marginTop: 10,
        marginLeft: 22,
        justifyContent: "space-between",
        marginBottom:10
    },
    mesTop: {
        flexDirection: "row",
        alignItems: "center",
    },
    name: {
        color: "#282828",
        fontSize: 13,
        lineHeight: 25,
        marginRight: 39,
    },
    name1: {
        color: "#282828",
        fontSize: 13,
        lineHeight: 25,
    },
    moren: {
        width: 29,
        height: 14,
        marginLeft: 14,
    },
    mesBottom: {
        flexWrap: 'wrap',
        color: "#888",
        fontSize: 13,
        lineHeight: 25,
    },
    next: {
        width: 9,
        height: 17,
        marginTop: 26,
    },
    addBom:{
        width:310,
        height:42.5,
        flexDirection:"row",
        justifyContent:"flex-end",
        borderTopColor:"#eee",
        borderTopWidth:1,
    },
    edit:{
        paddingLeft:10,
        paddingRight:10,
        
    },
    delete:{
        paddingLeft:10,
        paddingRight:10,
    }
})