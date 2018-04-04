import { StyleSheet } from "react-native";
// 获取屏幕信息
var dimensions = require("Dimensions");
// 获取屏幕的宽度和高度
var { width, height } = dimensions.get("window");
export default styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        backgroundColor: "#f6f6f8",
    },
    header: {
        width: width,
        height: 44,
        backgroundColor: "#fff",
        borderBottomColor: "#d6d6d8",
        borderBottomWidth: 1
    },
    headerTitle: {
        width: width,
        height: 44,
        fontSize: 15,
        color: "#000",
        lineHeight: 44,
        textAlign: "center",
    },
    save: {
        position: "absolute",
        height: 44,
        right: 12,
        top: 0,
        color: "#333",
        fontSize: 14,
        lineHeight: 44,
    },
    scroll: {
        width: width,
        marginTop: 10,
        flex: 1,
    },
    count: {
        width: width,
        height: 49,
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderTopColor: "#e5bec3",
        borderBottomColor: "#d6d6d8",
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between"
    },
    checkText: {
        flex: 1,
        height: 49,
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    checkBox: {
        width: 65,
        height: 49,
        flexDirection: "row",
        alignItems: "center",
    },
    checkBtn: {
        width: 114,
        height: 51,
        backgroundColor: "#ea4a4a",
    },
    check: {
        textAlign: "center",
        lineHeight: 49,
        fontSize: 15,
        color: "#fff",
    },
    checkImg: {
        width: 24,
        height: 24,
    },
    checkAll: {
        height: 51,
        fontSize: 13,
        lineHeight: 49,
        alignItems: 'center',
        color: "#000",
        marginLeft: 6,
    },
    checkPrice: {
        width: 103,
        height: 29,
    },
    acount: {
        fontSize: 12,
        color: "#000",
        textAlign: "right",
    },
    else: {
        fontSize: 12,
        color: "#999",
        textAlign: "right",
    },
    move: {
        width: 174,
        height: 26,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    addmove: {
        width: 99,
        height: 26,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#f7ae3c",
    },
    addText: {
        width: 99,
        height: 26,
        color: "#f7ae3c",
        fontSize: 13,
        textAlign: "center",
        lineHeight: 26,
    },
    delete: {
        width: 60,
        height: 26,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#ea4a4a",
    },
    deleteText: {
        width: 60,
        height: 26,
        color: "#ea4a4a",
        fontSize: 13,
        textAlign: "center",
        lineHeight: 26,
    },
    checkImg1: {
        width: 24,
        height: 24,
        marginTop:2,
    },
})