import {StyleSheet} from "react-native";
var dimensions=require("Dimensions");
var {width,height}=dimensions.get("window");
export default styles=StyleSheet.create({
    container:{
        flex:1,
    },
    fill:{
        width:width,
        height:350,
        backgroundColor:"#fff",
    },
    user:{
        width:width,
        height:50,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor:"#e8e1e1",
        paddingHorizontal:24,
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
    select:{
        width:width,
        height:50,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor:"#e8e1e1",
    }

})