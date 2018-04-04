import {StyleSheet} from "react-native";
var dimensions=require("Dimensions");
var {width,height} =dimensions.get("window");
export default styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#f6f6f8"
    },
    valid:{
        width:width,
        flexDirection: 'row',
        justifyContent:"space-between",
        flexWrap: 'wrap',
        paddingHorizontal:12,
    },
    validList:{
        width:160,
        height:219,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius:5,
        borderBottomRightRadius: 5,
        backgroundColor:"#fff",
        marginBottom: 10,
        marginTop:10
    },
    listTop:{
        width:160,
        height:160,
        alignItems: 'center',
        position:"relative",
    },
    decline:{
      width:160,
      height:20,
      backgroundColor:"#ea4a4a",
      fontSize:12,
      color:"#fff",
      textAlign:"center",
      lineHeight:20,
      position:"absolute",
      left:0,
      bottom:0,  
    },
    listImg:{
        width:160,
        height:160,
    },
    listText:{
        width:160,
        height:49,
        justifyContent:"space-between",
    },
    title:{
        fontSize:14,
        color:"#333",
        paddingHorizontal: 5,
    },
    price:{
        width:160,
        height:15.5,
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal: 5,
    },
    widthSome:{
        width:160 - (13+42+5+45+11+18+10),
    },
    pLeft:{
        fontSize:15,
        color:"#ea4a4a",
        lineHeight:15.5
    },
    pRight:{
        fontSize:11,
        color:"#888",
        lineHeight:15.5,
    },
    unvalid:{
        width:width,
        marginTop: 31,
    },
    unTop:{
        width:width,
        flexDirection:"row",
        height:22,
        justifyContent:"space-between",
        paddingHorizontal: 12,
    },
    unTitle:{
        fontSize:14,
        color:"#ea4a4a",
        lineHeight:22,
    },
    unBtn:{
        width:60,
        height:22,
        backgroundColor:"#ea4a4a",
        color:"#fff",
        borderRadius:10,
    },
    unBottom:{
        width:width,
        flexDirection: 'row',
        justifyContent:"space-between",
        flexWrap: 'wrap',
        paddingHorizontal:12,
    },
    mask:{
        width:160,
        height:160,
        backgroundColor:"rgba(255,255,255, 0.3)",
        position:"absolute",
        left:0,
        top:0,
    },
    price1:{
        width:160,
        height:22,
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal: 5,
    },
    title1:{
        fontSize:14,
        color:"#cbcbcb",
        paddingHorizontal: 5,
    },
    pLeft1:{
        fontSize:15,
        color:"#cbcbcb",
        lineHeight:22
    },
    pRight1:{
        width:60,
        height:22,
        fontSize:11,
        backgroundColor:"#cfcfcf",
        color:"#fff",
        borderRadius:10,
        lineHeight:22,
        textAlign:"center",
    },
})