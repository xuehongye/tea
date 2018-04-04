import {StyleSheet} from "react-native";
var dimensions=require("Dimensions");
var {width,height}=dimensions.get("window");
export default style=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#f6f6f8"
    },
    contain:{
        flex:1,
        marginTop: 10,
        alignItems: 'center',
    },
    invitationCode:{
        width:350,
        height:44,
        backgroundColor:"#fff",
        borderColor: "#ccc",
        borderWidth:1,
        fontSize:14,
        color:"#333",
        paddingLeft:12,
    },
    verCode:{
        width:width,
        marginTop:20,
        flexDirection: 'row',
        // alignItems:"center",
        justifyContent:"space-between",
        paddingLeft:6,
        paddingRight:6,
    },
    Vcode:{
        width:200,
        height:44,
        backgroundColor:"#fff",
        borderColor: "#ccc",
        borderWidth:1,
        fontSize:14,
        color:"#333",
        paddingLeft: 12,
    },
    codeBtn:{
        width:100,
        height:44,
        backgroundColor:"#fff",
        borderColor: "#ccc",
        borderWidth:1,
        fontSize:12,
        color:"#333",
        lineHeight:44,
        textAlign:"center",
    },
    submitTit:{
        width:350,
        height:44,
        backgroundColor:"#ea4a4a",
        fontSize:14,
        color:"#fff",
        textAlign:"center",
        marginTop:20,
        lineHeight:44,
        fontWeight: 'bold',
    }
});    