import {StyleSheet} from "react-native";
var dimensions=require("Dimensions");
var {width,height}=dimensions.get("window");
export default styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#f6f6f8"
    },
    fill:{
        width:width,
        backgroundColor:"#fff",
    },
    user:{
        width:width,
        height:50,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor:"#e8e1e1",
        paddingHorizontal:24,
        justifyContent:"space-between",
        alignItems: 'center',
    },
    name:{
        width:"auto",
        height:50,
        lineHeight:50,
        fontSize:14,
        color:"#333",
    },
    nameInput:{
        flex:1,
        padding:0,
        fontSize:14,
        color:"#888",
    },
    setting:{
        fontSize:10,
        color:"#333",
        lineHeight:50,
    },
    setImg:{
        width:14,
        height:14,
    },
    select:{
        height:50,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor:"#e8e1e1",
        justifyContent:"space-between",
    },
    province:{
        width:40,
        height:50,
        lineHeight:50,
        fontSize:14,
        color:"#333",
    },
    option:{
        flex:1,
    }

})