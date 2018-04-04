import React, { Component } from "react";
import { Image,Linking, View, TouchableOpacity, Text, TextInput, Button, ScrollView } from "react-native";
import styles from "../styles/ExperienceStyle";
export default class ExperienceView extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            text: '关键字搜索',
            ConsigneePhone:"15703412968",
        };
    }
    linking=(url)=>{  
        // console.log(url);  
        Linking.canOpenURL(url).then(supported => {  
            if (!supported) {  
                console.log('Can\'t handle url: ' + url);  
            } else {  
                return Linking.openURL(url);  
            }  
        }).catch(err => console.error('An error occurred', err));  
   
     }  
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image style={styles.newsImg} source={require("../../user/image/index/navbutton.png")} />
                    <View style={styles.search}>
                        <TextInput
                            onChangeText={(text) => this.setState({ text })}
                            value={this.state.text}
                            underlineColorAndroid={"transparent"}
                            style={styles.searchText}
                        />
                        <Image style={styles.searchImg} source={require("../../user/image/index/search.png")} />
                    </View>
                    <Image style={styles.RichScanImg} source={require("../../user/image/index/navscanning.png")} />
                </View>
                <ScrollView>
                    <View style={styles.store}>
                        <Image style={styles.storeImg} source={require("../image/tea/storeImg.jpg")}/>
                        <Text style={styles.storeTit}>海岚香南山分店</Text>
                        <View style={styles.address}>
                            <Image style={styles.addr} source={require("../image/tea/add.png")}/>
                            <Text style={styles.nav}>350000厦门市</Text>
                            <Image style={styles.next} source={require("../image/tea/next.png")}/>
                        </View>
                        <View style={styles.address}>
                            <Image style={styles.addr} source={require("../image/tea/lady.png")}/>
                            <Text style={styles.name}>林先生</Text>
                            <Text style={styles.phone} onPress={()=>this.linking('tel:'+this.state.ConsigneePhone)}>打电话预约</Text>
                            <Image style={styles.next} source={require("../image/tea/next.png")}/>
                        </View>
                    </View>
                    <View style={styles.store}>
                        <Image style={styles.storeImg} source={require("../image/tea/storeImg.jpg")}/>
                        <Text style={styles.storeTit}>海岚香南山分店</Text>
                        <View style={styles.address}>
                            <Image style={styles.addr} source={require("../image/tea/add.png")}/>
                            <Text style={styles.nav}>350000厦门市</Text>
                            <Image style={styles.next} source={require("../image/tea/next.png")}/>
                        </View>
                        <View style={styles.address}>
                            <Image style={styles.addr} source={require("../image/tea/lady.png")}/>
                            <Text style={styles.name}>林先生</Text>
                            <Text style={styles.phone} >打电话预约</Text>
                            <Image style={styles.next} source={require("../image/tea/next.png")}/>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}