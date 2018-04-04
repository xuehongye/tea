import {StyleSheet} from "react-native";
var dimensions=require("Dimensions");
var {width,height}=dimensions.get("window");
export default styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#f6f6f8"
    },
    discount:{
        width:width,
        height:99,
        position:"relative",
        marginTop: 20,
        paddingHorizontal: 48,
        flexDirection: 'row',
        alignItems:"center",
        justifyContent:"space-between"
    },
    bgImg:{
        width:351,
        height:99,
        position:"absolute",
        left:5,
        top:0,
    },
    bgLeft:{
        width:141.5,
        height:48,
    },
    text1:{
        width:141.5,
        fontSize:14,
        color:"#fff",
    },
    text2:{
        fontSize:10,
        marginTop: 5,
    },
    text3:{
        width:141.5,
        fontSize:10,
        marginTop:14,
    },
    warn:{
        width:10,
        height:10,
        position:"absolute",
        top:27,
        left:0
    },
    bgRight:{
        height:38.5,
        width:66,
        fontSize:14,
        color:"#fff",
        lineHeight:38.5,
        borderTopWidth:1,
        borderBottomWidth:1,
        textAlign:"center",
    }
})