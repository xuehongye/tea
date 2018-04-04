import { StyleSheet } from "react-native";
var dimensions = require("Dimensions");
var { width, height } = dimensions.get("window");
export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#f6f6f8"
    },
    user: {
        height: 47,
        flexDirection: "row",
        backgroundColor: "#fff",
        alignItems: 'center',
        marginBottom:10,
        paddingLeft: 19,
        paddingRight: 19,
    },
    input: {
        flex: 1,
        color: "#d1d1d1",
        fontSize: 15,
        paddingLeft:19,
        paddingRight:19,
    },
    mima:{
        width:15.5,
        height:19,       
    },
    change:{
        height: 48,
        backgroundColor: "#ea4a4a",
        paddingLeft: 19,
        paddingRight: 19,
        marginTop: 21,
        color:"#fff",
        fontSize:18,
        textAlign:"center",
        lineHeight:48,
    }
})