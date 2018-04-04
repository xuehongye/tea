import {StyleSheet} from "react-native";
var dimensions =require("Dimensions");
var {width,height} =dimensions.get("window");

export default styles=StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"#f6f6f8"
    },
    user:{
        height:47,
        backgroundColor: "#fff",
        marginLeft:19,
        marginRight:19,
        marginTop:10,
        position:"relative",
    },
    change:{
        height: 48,
        backgroundColor: "#ea4a4a",
        marginLeft: 19,
        marginRight: 19,
        marginTop: 45,
        color:"#fff",
        fontSize:18,
        textAlign:"center",
        lineHeight:48,
    },
    input: {
        flex: 1,
        color: "#d1d1d1",
        fontSize: 15,
        paddingLeft:19,
        paddingRight:19,
    },
    error:{
        width:13,
        height:13,
        position:"absolute",
        right:14,
        top:17,
    }
})