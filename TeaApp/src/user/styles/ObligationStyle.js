import { StyleSheet } from "react-native";
var dimensions = require("Dimensions");
var { width, height } = dimensions.get("window");
export default styles = StyleSheet.create({
    container: {
        flex:1,
        width: width,
        justifyContent:"space-between",
    },
    // scroll:{
    //     flex:1,
    // },
    news: {
        width: width,
        height: 47,
        flexDirection: 'row',
        paddingLeft: 18,
        alignItems: 'center',
        backgroundColor: "#ee4f4f"
    },
    clock: {
        width: 17,
        height: 17,
    },
    notice: {
        fontSize: 14,
        color: "#fff",
        lineHeight: 47,
        marginLeft: 7,
    },
    xiaoer: {
        fontSize: 12,
        color: "#f9c6c6",
        lineHeight: 47,
        marginLeft: 7,
    },
    product: {
        width: width,
        height: 161,
        backgroundColor: "#fff",
        marginTop: 17,
        alignItems: "center",
        marginBottom: 10,
    },
    pro_up: {
        width: 340,
        height: 110,
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#f6f6f8",
        alignItems: "center",
    },
    pro_down: {
        width: 355,
        height: 50,
    },
    price: {
        fontSize: 13,
        color: "#333",
        textAlign: "right",
        paddingRight: 12,
        lineHeight: 50,
    },
    teaImg: {
        width: 90,
        height: 90,
        marginRight: 10,
    },
    teaText: {
        flex: 1,
        height: 90,
    },
    teaTitle: {
        fontSize: 14,
        color: "#333",
        lineHeight: 16,
        flexWrap: 'wrap',
    },
    teaHold: {
        fontSize: 12,
        color: "#888",
        marginTop: 10,
    },
    teaDetail: {
        marginTop: 20,
        flexDirection: "row",
        height: 14,
    },
    tea1: {
        fontSize: 8,
        color: "#333",
        lineHeight: 14,
    },
    tea2: {
        fontSize: 13,
        color: "#333",
        lineHeight: 14,
    },
    tea4: {
        fontSize: 10,
        color: "#888",
        lineHeight: 14,
    },
    tea5: {
        fontSize: 12,
        color: "#b71627",
        lineHeight: 14,
    },
    tea3: {
        flex: 1,
        textAlign: "right",
        fontSize: 10,
        color: "#888",
        lineHeight: 14,
    },
    logistics: {
        width: width,
        height: 86,
        backgroundColor: "#fff",
        marginTop: 10,
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    logiImg: {
        width: 12,
        height: 9,
        marginLeft: 24,
        marginBottom:12,
    },
    logiText:{
        flex:1,
        height:58,
        marginLeft:20,
        justifyContent:'space-between',
    },
    logi1:{
        fontSize:14,
        color:"#333",
    },
    logi2:{
        fontSize:14,
        color:"#4f95ca",
    },
    logi3:{
        fontSize:10,
        color:"#999",
    },
    next: {
        width: 9,
        height: 17,
        marginRight:20,
    },
    order:{
        width:width,
        height:178,
        alignItems:"center",
        flexDirection:"row",
        backgroundColor:"#fff",
        paddingRight:10,
        marginBottom:10,
    },
    orderText:{
        flex:1,
        height:156,
        justifyContent:"space-between",
        marginLeft:20,
    },
    state:{
        flexDirection:"row",
    },
    state1:{
        fontSize:14,
        color:"#333",
    },
    state2:{
        fontSize:14,
        color:"#ea4a4a",
    },
    state3:{
        fontSize:14,
        color:"#888",  
        
    },
    state4:{
        width:218,
        fontSize:14,
        color:"#888",
        marginRight:10,  
    },
    pay:{
        width:width,
        height:156,
        marginBottom:36,
        backgroundColor:"#fff",
        alignItems:"center",
    },
    payTop:{
        width:width-20,
        height:52,
        flexDirection:"row",
        justifyContent:"space-between",
        borderBottomColor:"#f6f6f8",
        borderBottomWidth:1,
    },
    payTop1:{
        fontSize:14,
        color:"#333",
    },
    payTop2:{
        fontSize:14,
        color:"#ea4a4a",
    },
    payBottom:{
        flex:1,
        width:width-20,
        paddingTop: 20,
        paddingBottom: 20,
        justifyContent:"space-between",
    },
    paytitle:{
        flexDirection:"row",
        justifyContent:"space-between",
    },
    payTop3:{
        fontSize:12,
        color:"#888",
    },
    payTop4:{
        fontSize:12,
        color:"#b71627",
    },
    payTop7:{
        flexDirection:"row",
    },
    payTop5:{
        fontSize:12,
        color:"#b71627",
    },
    payTop6:{
        fontSize:12,
        color:"#333",
    },
    remind:{
        width:width,
        height:50,
        backgroundColor:"#fff",
        borderTopWidth:1,
        borderTopColor:"#cacacb",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-end",
    },
    remindText:{
        width:108,
        height:32,
        borderRadius:3,
        backgroundColor:"#ea4a4a",
        fontSize:15,
        color:"#fff",
        textAlign:"center",
        lineHeight:32,
        marginRight:10,
    }
})