import React, { Component } from "react";
import { Image, View, TouchableOpacity, Text, ScrollView, TextInput, Button, Platform } from "react-native";
import styles from "../styles/HomeStyle";
import { PullView } from 'react-native-pull';
import ScrollViewTop from "../../common/components/ScrollViewTop";
import MessageView from "../../user/components/MessageView";
import WebLetterView from  "../../user/components/WebLetterView"
// import FetchData from "../../data/components/FetchData"
import DetailView from "../../user/components/DetailView"

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json';
export default class HomeView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '关键字搜索',
            datalist: [],

        };
    }
    onPullRelease(resolve) {
        //do something
        setTimeout(() => {
            resolve();
        }, 3000);
    }
    // componentDidMount() {
    //     var that = this;
    //     var data = [];
    //     that._renderAllData((aa) => {
    //         var datalist = aa;
    //         that.setState({
    //             datalist: datalist
    //         });
    //     })
    //     //  console.log(that.state.datalist)
    //     var dataList = that.state.datalist;
    //     for (var i = 0; i < dataList.length; i++) {
    //         data.push(
    //             <TouchableOpacity style={styles.every} key={i} onPress={() => {
    //                 this.props.navigator.push({
    //                     params: { name: "detail" },
    //                     component: DetailView
    //                 })

    //             }}>
    //                 <View style={styles.imgBorder}>
    //                     <Image style={styles.teaImg} source={{ uri: dataList[i].posters.thumbnail }} />
    //                 </View>
    //                 <View style={styles.teaText}>
    //                     <Text style={styles.teaTitle}>{dataList[i].title}</Text>
    //                     <View style={styles.teaPrice}>
    //                         <View style={styles.bigPrice}>
    //                             <Text style={styles.qian}>{dataList[i].release_dates.release_dates}</Text>
    //                             <Text style={styles.sales}>{dataList[i].release_dates.theater}</Text>
    //                         </View>
    //                         <View style={styles.smallPrice}>
    //                             <Text style={styles.qian}>{dataList[i].year}</Text>
    //                             <Text style={styles.gifts}>礼盒价</Text>
    //                         </View>
    //                     </View>
    //                 </View>
    //             </TouchableOpacity>
    //         )
    //     }
    //     return data;
    // }
    // _renderAllData(callback) {
    //     fetch(REQUEST_URL)
    //         .then((response) => response.json())
    //         .then((responseData) => {
    //             var data = responseData.movies;
    //             typeof callback == 'function' && callback(data);
    //         })
    // }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => {
                        this.props.navigator.push({
                            params: { name: "webLetter" },
                            component: WebLetterView
                        })
                    }} style={styles.newsImg}>
                        <Image style={styles.newImg} source={require("../../user/image/index/navbutton.png")} />
                    </TouchableOpacity>
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
                <PullView style={styles.content} onPullRelease={this.onPullRelease}>
                    <View style={styles.conBox}>
                        <ScrollViewTop />
                    </View>
                    <View style={styles.classify}>
                        <View style={styles.classList}>
                            <Image style={styles.listImg} source={require("../../user/image/index/btnoolong.png")} />
                            <Text style={styles.listText}>寿宁高山乌龙茶</Text>
                        </View>
                        <View style={styles.classList}>
                            <Image style={styles.listImg} source={require("../../user/image/index/btnblacktea.png")} />
                            <Text style={styles.listText}>寿宁高山乌龙茶</Text>
                        </View>
                        <View style={styles.classList}>
                            <Image style={styles.listImg} source={require("../../user/image/index/btugreen.png")} />
                            <Text style={styles.listText}>寿宁高山乌龙茶</Text>
                        </View>
                        <View style={styles.classList}>
                            <Image style={styles.listImg} source={require("../../user/image/index/btuwhite.png")} />
                            <Text style={styles.listText}>寿宁高山乌龙茶</Text>
                        </View>
                        <View style={styles.classList}>
                            <Image style={styles.listImg} source={require("../../user/image/index/btuCatalog.png")} />
                            <Text>分类</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.noticeList} onPress={()=>{
                          this.props.navigator.push({
                            params: { name: "message" },
                            component: MessageView
                        })
                    }}>
                        <Image style={styles.noticeLeft} source={require("../../user/image/index/ioonNotice.png")} />
                        <View style={styles.noticeRight}>
                            <View style={styles.hotText}>
                                <Text style={styles.hot}>新</Text>
                                <Text style={styles.hot}>热</Text>
                            </View>
                            <View style={styles.hotList}>
                                <Text style={styles.list}>寿宁高山乌龙茶最新产品....</Text>
                                <Text style={styles.list}>2017年新茶 碧螺春即将上市....</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.bigImg}>
                        <Image style={styles.picImg} source={require("../../user/image/index/getBanner.jpg")} />
                    </View>
                    <View style={styles.detailList}>
                        {/* {this.componentDidMount()} */}

                        <TouchableOpacity style={styles.every} onPress={() => {
                            this.props.navigator.push({
                                params: { name: "detail" },
                                component: DetailView
                            })

                        }}>
                            <View style={styles.imgBorder}>
                                <Image style={styles.teaImg} source={require("../image/tea/gift.jpg")} />
                            </View>
                            <View style={styles.teaText}>
                                <Text style={styles.teaTitle}>茶叶</Text>
                                <View style={styles.teaPrice}>
                                    <View style={styles.bigPrice}>
                                        <Text style={styles.qian}>￥255</Text>
                                        <Text style={styles.sales}>556</Text>
                                    </View>
                                    <View style={styles.smallPrice}>
                                        <Text style={styles.qian}>50</Text>
                                        <Text style={styles.gifts}>礼盒价</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </PullView>
            </View>
        )
    }

}
