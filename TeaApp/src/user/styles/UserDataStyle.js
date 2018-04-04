import {StyleSheet} from "react-native";
var dimensions=require("Dimensions");
var {width,height} =dimensions.get("window");
export default styles=StyleSheet.create({
    container:{
        flex:1,
        position:"relative",
        backgroundColor:"#f6f6f8"
    },
    user:{
        width:width,
        height:47,
        backgroundColor:"#fff",
        flexDirection: 'row',
        paddingLeft: 19,
        paddingRight: 19,
        alignItems: 'center',
        marginBottom: 14,
    },
    title:{
        fontSize:15,
        lineHeight:47,
        color:"#333",
    },
    photo:{ 
        flex:1,
        alignItems:"flex-end",
    },
    img:{
        width:31.5,
        height:31.5,
    },
    next:{
        width:9,
        height:17,
        marginLeft: 17,
    },
    photoText:{
        fontSize:13,
        lineHeight:47,
        color:"#666",
    },
    change:{
        height: 48,
        backgroundColor: "#ea4a4a",
        marginLeft: 19,
        marginRight:19,
        marginTop: 262,
        color:"#fff",
        fontSize:18,
        textAlign:"center",
        lineHeight:48,
    },
    mask:{
        width:width,
        height:height,
        position:"absolute",
        left:0,
        top:0,
        backgroundColor:"rgba(0,0,0,0.4)",
        zIndex:999,
        justifyContent:"flex-end",
    },
    clear:{
        marginLeft:7,
        marginRight:7,
        marginBottom:34,
        backgroundColor:"#fff",
        fontSize:15,
        color:"#000",
        height:47,
        lineHeight:47,
        textAlign:"center",
        borderRadius: 5,
    },
    photos:{
        marginLeft:7,
        marginRight:7,
        marginBottom:10,
        backgroundColor:"#fff",
        borderRadius: 5,
        height:94,
    },
    paizhao:{
        height:47,
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"center",
    },
    photoImg:{
        width:22,
        height:22,
        marginRight:9
    },
    photoText:{
        fontSize:15,
        color:"#666",
        lineHeight:47,
    }
});