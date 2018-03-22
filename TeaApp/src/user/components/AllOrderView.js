import React, { Component } from "react";
import { Image, View, TouchableOpacity, Text, TextInput, ScrollView, Button } from "react-native";
import styles from "../styles/AllOrderStyle";
import HeadView from "../../common/components/HeadView"
import { Navigator } from 'react-native-deprecated-custom-components';
import Page1 from '../../common/components/Page1';
import Page2 from '../../common/components/Page2';
import Page3 from '../../common/components/Page3';
import Page4 from '../../common/components/Page4';
import Page5 from '../../common/components/Page5';

// import Page3 from '../../common/components/page3';
// import Page4 from '../../common/components/page4';


export default class AllOrderView extends React.Component {
    //告知Navigator 模块切换时的效果
    configureScene() {
        return Navigator.SceneConfigs.FadeAndroid;
    }

    //根据传递的信息, 处理界面的切换
    renderScene(router, navigator) {
        switch (router.name) {
            case 'Page1':
                return <Page1 navigator={navigator} />;
            case 'Page2':
                return <Page2 navigator={navigator} />;
            case 'Page3':
                return <Page3 navigator={navigator} />;
            case 'Page4':
                return <Page4 navigator={navigator} />;
            case 'Page5':
                return <Page5 navigator={navigator} />;
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <HeadView navigator={this.props.navigator} name="全部订单" />
                <Navigator
                    initialRoute={{ name: 'Page1' }}
                    configureScene={this.configureScene}
                    renderScene={this.renderScene} />
            </View>
        )
    }

}