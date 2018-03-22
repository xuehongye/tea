import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Dimensions
} from 'react-native';
 
//获取设备的宽度和高度
var {
    height: deviceHeight,
    width: deviceWidth
} = Dimensions.get('window');
 
export default class NaviBar extends Component {
  componentWillMount() {
    //通过属性得知哪个导航按钮是当前的导航也，这个导航按钮将用灰色背景
    this.buttonColors = this.props.naviBarStatus.map(
      function(aNumber) {
        if (aNumber == 0) return '#000';
        return '#ea4a4a';
      }
    );
    this.btnColors = this.props.naviBarStatus.map(
        function(aNumber) {
          if (aNumber == 0) return '#fff';
          return '#ea4a4a';
        }
      );
  }
 
  //四个按钮被按下时处理函数
  _naviTab0Pressed() {
    this.props.onNaviBarPress(0);
  }
 
  _naviTab1Pressed() {
    this.props.onNaviBarPress(1);
  }
 
  _naviTab2Pressed() {
    this.props.onNaviBarPress(2);
  }
 
  _naviTab3Pressed() {
    this.props.onNaviBarPress(3);
  }
  _naviTab4Pressed() {
    this.props.onNaviBarPress(4);
  }
  render() {
    return (
    //根View
    <View style={styles.naviRow}>
      <TouchableHighlight onPress={this._naviTab0Pressed.bind(this)}>
          <View style={[styles.button,{borderBottomColor:this.btnColors[0]}]}>
              <Text style={[styles.textStyle1,{color:this.buttonColors[0]}]}>
                  全部
              </Text>
          </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={this._naviTab1Pressed.bind(this)}>
          <View style={[styles.button,{borderBottomColor:this.btnColors[1]}]}>
              <Text style={[styles.textStyle1,{color:this.buttonColors[1]}]}>
                  待收货
              </Text>
          </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={this._naviTab2Pressed.bind(this)}>
          <View style={[styles.button,{borderBottomColor:this.btnColors[2]}]}>
              <Text style={[styles.textStyle1,{color:this.buttonColors[2]}]}>
                  待发货
              </Text>
          </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={this._naviTab3Pressed.bind(this)}>
          <View style={[styles.button,{borderBottomColor:this.btnColors[3]}]}>
              <Text style={[styles.textStyle1,{color:this.buttonColors[3]}]}>
                  待付款
              </Text>
          </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={this._naviTab4Pressed.bind(this)}>
          <View style={[styles.button,{borderBottomColor:this.btnColors[4]}]}>
              <Text style={[styles.textStyle1,{color:this.buttonColors[4]}]}>
                  待评价
              </Text>
          </View>
      </TouchableHighlight>
    </View>
    );
  }
}
 
//样式
const styles = StyleSheet.create({
  naviRow: {
      flexDirection: 'row'
  },
  button: {
      width: deviceWidth / 5, //导航栏每个标签宽度为屏幕1/4
      height:36,
      justifyContent: 'center',
      borderBottomWidth:1,
  },
  textStyle1: {
      fontSize:13,
      textAlign: 'center',
  }
});