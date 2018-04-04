import { StyleSheet } from "react-native";
var dimensions = require("Dimensions");
var { width, height } = dimensions.get("window");
export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#f6f6f8"
    },
    evaluate: {
        width: width,
        padding: 15,
        backgroundColor: "#fff",
        flexDirection: 'row',
    },
    photo: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    con: {
        flex: 1,
    },
    con1: {
        // height:15.5
        flexDirection: "row",
    },
    name: {
        flex: 1,
        fontSize: 14,
        color: "#333",
        lineHeight: 15.5,
    },
    stars: {
        width: 90,
        height: 15.5,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    starA: {
        width: 14,
        height: 13.5,
    },
    con2: {
        height: 8.5,
        fontSize: 8,
        marginTop: 18,
        color: "#888",
        lineHeight: 8.5
    },
    con3: {
        fontSize: 14,
        color: "#333",
        // flexWrap: 'wrap',
        lineHeight: 15,
        marginTop: 13
    },
    con4: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 11,
    },
    tea: {
        width: 90,
        height: 90,
    },
    con5: {
        flexDirection: "row",
        backgroundColor:"#f6f6f8",
        borderRadius:5,
        marginTop:20,
    },
    conImg: {
        width: 81.5,
        height: 89,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius:5,
    },
    conText:{
        flex:1,
        padding:12,
    },
    title:{
        fontSize:15,
        color:"#333",
        width:186,
        marginBottom: 8,
    },
    btn:{
        width:60,
        height:20,
        backgroundColor:"#fff",
        borderRadius:10,
        fontSize:11,
        color:"#959595",
        marginBottom:8,
        textAlign:"center",
        lineHeight:20,
    },
    text:{
        flexDirection:"row",
    },
    tex1:{
        color:"#b71627",
        fontSize:10.5,
        marginRight:11,
        lineHeight:12,
    },
    tex2:{
        lineHeight:12,
        color:"#999",
        fontSize:12,
        marginRight:8,
    },
    tex3:{
        fontSize:12,
        color:"#000",
        lineHeight:12,
    },
    tex4:{
        flex:1,
        color:"#4d6666",
        fontSize:9,
        lineHeight:12,
        textAlign:"right",
    },
    con6:{
        fontSize:10,
        color:"#b0b0b0",
        marginTop:15,
        textAlign:"right"
    }
})