import { StyleSheet } from "react-native";
var dimensions = require("Dimensions");
var { width, height } = dimensions.get("window");
export default styles = StyleSheet.create({
    container: {
        flex:1,
        width: width,
        justifyContent:"space-between",
    },
    
})