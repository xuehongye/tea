import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    ScrollView
} from 'react-native';

import NaviBar from './NavBar';
import State3 from "./State3"

export default class Page5 extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.onNaviBarPress = this.onNaviBarPress.bind(this);
        // 不同的Page,需要修改下面的这个数组, 通过数组控制导航栏条目显示状态
        this.naviStatus = [0, 0, 0, 0, 1];
    }

    onNaviBarPress(aNumber) {
        //不同的page需要修改下面这个switch的处理逻辑
        switch (aNumber) {
            case 0:
                this.props.navigator.replace({
                    name: 'Page1'
                });
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

                return;
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <NaviBar naviBarStatus={this.naviStatus}
                    onNaviBarPress={this.onNaviBarPress} />
                <ScrollView>
                    <State3/>
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
        backgroundColor: '#acdcdd' //每个界面背景颜色不一样
    }
});
