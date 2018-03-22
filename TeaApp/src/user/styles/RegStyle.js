import {StyleSheet} from "react-native";
// 获取屏幕信息
var dimensions=require("Dimensions");
// 获取屏幕的宽度和高度
var {width,height}=dimensions.get("window");
export default styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
        backgroundColor:"#fff",
        alignItems: 'center',
    },
    bglogo:{
        width:width,
        height:167.5,
        position:"absolute",
        top:0,
        left:0,
    },
    // tabContainer:{
    //     width:width,
    //     marginTop: 189.5,
    //     flexDirection:"row",
    //     alignItems:"center",
    //     justifyContent:"space-between",
    //     paddingLeft: 113,
    //     paddingRight: 90,
    // },
    // tabColor:{
    //     color:"#ea4c48",
    //     fontSize:18,
    // },
    // quickTabColor:{
    //     color:"#999",
    //     fontSize:18,
    // },
    member:{
        width:width,
        marginTop:244,
        paddingLeft:60,
        paddingRight:60,
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"space-between",
    },
    textInputs:{
        position:"relative",
        marginBottom: 15,
    },
    textInput:{
        width:255,
        height:31,
        paddingLeft:40,
    },
    iconphone:{
        width:21,
        height:21,
        position:"absolute",
        left:4,
        bottom:10,
    },
    error:{
        width:width,
        color:"#ea4c48",
        paddingLeft:68,
        fontSize:12,
        display: 'none',
    },
    btnStyle:{
        height:40,
        width:width-122,
        borderRadius:20,
        marginTop: 43,
        backgroundColor:"#ea4c48",
        justifyContent:"center",
      },
      loginText:{
        textAlign:"center",
        color:'white',
        textAlignVertical:"center",
      },
      login:{
        width:width,
        paddingRight:80,
        marginTop:15,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-end",
      },
      btncode:{
          width:60,
          height:18,
          borderRadius:20,
          position:"absolute",
          bottom:8,
          right:0,
          backgroundColor:"#ea4c48",
      },
      setcode:{
        textAlign:"center",
        color:'white',
        textAlignVertical:"center",
        fontSize:11,
        lineHeight:18,
      },
})