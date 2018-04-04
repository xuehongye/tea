import React ,{Component} from 'react';
import {View,Text,TextInput,Image,ScrollView,TouchableOpacity} from "react-native";
import styles from "../styles/WriteEvaluateStyle";
import HeadView from "../../common/components/HeadView";

export default class WriteEvaluateView extends React.Component{

render(){
    return(
        <View style={styles.container}>
            <HeadView navigator={this.props.navigator} name="写评价" save="提交"/>
            <ScrollView>

            </ScrollView>
        </View>
    )
}
};