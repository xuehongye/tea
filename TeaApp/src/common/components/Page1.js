import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    ScrollView
} from 'react-native';

import NaviBar from './NavBar';
import State1 from "./State1"
import State2 from "./State2" 
import State3 from "./State3" 
import State4 from "./State4" 
import State5 from "./State5" 


export default class Page1 extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.onNaviBarPress = this.onNaviBarPress.bind(this);
        // 不同的Page,需要修改下面的这个数组, 通过数组控制导航栏条目显示状态
        this.naviStatus = [1, 0, 0, 0, 0];
    }

    onNaviBarPress(aNumber) {
        //不同的page需要修改下面这个switch的处理逻辑
        switch (aNumber) {
            case 0:
                return;
            case 1:
                //通过replace切换
                this.props.navigator.replace({
                    name: 'Page2'
                });
                return;
            case 2:
                this.props.navigator.replace({
                    name: 'Page3'
                });
                return;
            case 3:
                this.props.navigator.replace({
                    name: 'Page4'
                });
                return;
            case 4:
                this.props.navigator.replace({
                    name: 'Page5'
                });
                return;
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <NaviBar naviBarStatus={this.naviStatus}
                    onNaviBarPress={this.onNaviBarPress} />
                <ScrollView style={styles.whatLeft}>
                    <State1 navigator={this.props.navigator}/>
                    <State2/>
                    <State3/>
                    <State4/>
                    <State5/>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    whatLeft: {  // 组件定义了一个上边框
        flex: 1,
    }
});
