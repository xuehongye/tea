'use strict'

import React, {Component, PropTypes} from 'react'
import { Navigator } from 'react-native-deprecated-custom-components'
import { View, StyleSheet, Platform, BackAndroid} from 'react-native'
import RCTDeviceEventEmitter from 'RCTDeviceEventEmitter';
import ModalDropdown from 'react-native-modal-dropdown';
import Index from 'TeaApp/src/index';
import _ from 'underscore';

class _Navigator extends React.Component {
	constructor(props) {
		super(props);
		this._renderScene = this._renderScene.bind(this);

	}
	componentDidMount() {

	}
	componentWillUnmount() {	

	}
	
	render() {

		const NoBackSwipe ={
			...Navigator.SceneConfigs.PushFromRight,
			gestures: {
				pop: {},
			}
		};

		return (	
			<Navigator
				ref='navigator'
				// 初始化component
				initialRoute={{ params: { name: 'Home页面' }, component: Index }}
				configureScene={(route) => {
					// 切换动画可定制

					console.log('>>>>>route.component.displayName', route.component.displayName)
					if (route.sceneConfig) {
						return route.sceneConfig;
					}
					if( route.component.displayName == 'Imformation' || route.component.displayName == 'Connect(Imformation)'){
						return NoBackSwipe;
					}else{
						return Navigator.SceneConfigs.PushFromRight;
					}
					
				} }
				renderScene={this._renderScene}
				/>
		);
	}

	_renderScene(route, navigator) {
		//切换视图可定制
		let Component = route.component;
		// 注意: 此处的标签是通过对象传递过来的,不可写死！
		return <Component navigator={navigator} params={route.params} />
	}
}

export default _Navigator;
