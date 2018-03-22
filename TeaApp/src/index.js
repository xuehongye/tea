import React, { Component } from "react";
import { Image, View, TouchableOpacity, Text, TextInput, Button, DeviceEventEmitter } from "react-native";


// import LoginView from './user/components/LoginView';
import styles from "./user/styles/indexStyle";
import TabNavigator from 'react-native-tab-navigator';


import HomeView from "./home/components/HomeView";
import TeaView from "./home/components/TeaView";
import ExperienceView from "./home/components/ExperienceView";
import ShopCarView from "./home/components/ShopCarView";
import MineView from "./home/components/MineView";

import FetchView from "./data/components/FetchData";
import DataView from "./data/components/DataView";

const TAB_NORMAL_1 = require("./user/image/index/tabbuttonhome.png");
const TAB_PRESS_1 = require("./user/image/index/tabbuttonhomedefault.png");
const TAB_NORMAL_2 = require("./user/image/index/tabbuttonteaplantation2.png");
const TAB_PRESS_2 = require("./user/image/index/tabbuttonteaplantation1.png");
const TAB_NORMAL_3 = require("./user/image/index/tabbuttonshop2.png");
const TAB_PRESS_3 = require("./user/image/index/tabbuttonshop1.png");
const TAB_NORMAL_4 = require("./user/image/index/tabbuttonshopping2.png");
const TAB_PRESS_4 = require("./user/image/index/tabbuttonshopping1.png");
const TAB_NORMAL_5 = require("./user/image/index/tabbuttonme.png");
const TAB_PRESS_5 = require("./user/image/index/tabbuttonme1.png");

export default class index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: "home"
        };
    }
    componentWillMount() {
        console.log(this.props.navigator);
        this.switchTAB = DeviceEventEmitter.addListener('switchTAB', this.switchTABListener);
    }
    componentWillUnmount() {
        this.switchTAB.remove();
    };
    switchTABListener = (e) => {
        if (this.state.selectedTab != e.pagekey) {
            this.setState({ selectedTab: e.pagekey });
            this.props.navigator.popToTop();
        }
    }


    _renderTabarItems(selectedTab, title, icon, selectedIcon, ComponentView) {
        return (
            <TabNavigator.Item
                selected={this.state.selectedTab == selectedTab}
                title={title}
                titleStyle={styles.secondText}
                selectedTitleStyle={styles.indexText}
                renderIcon={() => <Image style={styles.tabImg} source={icon} />}
                renderSelectedIcon={() => <Image style={styles.tabImg} source={selectedIcon} />}
                onPress={() => this.setState({ selectedTab: selectedTab })}
            >
                <ComponentView {...this.props} />
            </TabNavigator.Item>
        )
    }
    render() {
        return (
            <TabNavigator style={{backgroundColor:"#fff"}}>
                {this._renderTabarItems("home", "首页", TAB_NORMAL_1, TAB_PRESS_1, HomeView)}
                {this._renderTabarItems('tea', "茶园", TAB_NORMAL_2, TAB_PRESS_2, TeaView)}
                {this._renderTabarItems("experience", "体验店", TAB_NORMAL_3, TAB_PRESS_3, ExperienceView)}
                {this._renderTabarItems("shopCar", "购物车", TAB_NORMAL_4, TAB_PRESS_4, ShopCarView)}
                {this._renderTabarItems("mine", "我的", TAB_NORMAL_5, TAB_PRESS_5, MineView)}
            </TabNavigator>
        )
    }
}
