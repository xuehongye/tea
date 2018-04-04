import React, { Component } from "react";
import { Image, View, TouchableOpacity, Text, TextInput, Button, ScrollView } from "react-native";
import HeadView from '../../common/components/HeadView';
import AddressView from '../../common/components/AddressView';
import styles from "../styles/shipAddressView";
import AddAddressView from "./AddAddressView";


export default class shipAddressView extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <HeadView navigator={this.props.navigator} name="收货地址" />
                <ScrollView>
                    <AddressView hidenleftBtn={false} navigator={this.props.navigator} morenBtn={false}/>
                    <AddressView hidenleftBtn={false} 
                    navigator={this.props.navigator} morenBtn={true}/>
                    <AddressView hidenleftBtn={false} 
                    navigator={this.props.navigator} morenBtn={true}/>
                </ScrollView>
                <View style={styles.add}>
                    <Text style={styles.addText} onPress={()=>{
                        this.props.navigator.push({
                            params:{name:"addAddress"},
                            component:AddAddressView
                        })
                    }}>添加收货地址</Text>
                </View>
            </View>
        )
    }
}