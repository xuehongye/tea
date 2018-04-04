import React, { Component } from "react";
import Video from 'react-native-video';
import { Image, View, TouchableOpacity, Text, TextInput, Button, ScrollView } from "react-native";
import styles from "../styles/TeaStyle";
export default class TeaView extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>茶园</Text>
                </View>
                <ScrollView style={styles.scroll}>
                    <View style={styles.vedio}>
                        <Text style={styles.vedioTit}>福建省厦门市茶园基地一</Text>
                        <View style={styles.vedioImg}>
                            <Video
                                ref={(ref: Video) => {
                                    this.video = ref
                                }}
                                source={require('../../data/components/video.mp4')}
                                style={styles.fullScreen}
                                rate={1}
                                paused={false}
                                volume={1}
                                muted={true}
                                resizeMode='cover'
                                // onLoad={this.onLoad}
                                // onLoadStart={this.loadStart}
                                // onProgress={this.onProgress}
                                // onEnd={this.onEnd}
                                // onError={this.videoError}
                                // onAudioBecomingNoisy={this.onAudioBecomingNoisy}
                                // onAudioFocusChanged={this.onAudioFocusChanged}
                                repeat={false}
                            />
                        </View>
                    </View>
                    <View style={styles.vedio}>
                        <Text style={styles.vedioTit}>福建省厦门市茶园基地二</Text>
                        <View style={styles.vedioImg}></View>
                    </View>
                    <View style={styles.foot}>
                        <Text style={styles.f1}>吴先生</Text>
                        <Text style={styles.f2}>0592-5622267</Text>
                        <Text style={styles.f2}>hailanxiang001@163.com</Text>
                        <Text style={styles.f2}>中国(福建)自由贸易试验区厦门片区高崎北二路61号3楼3A23号</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}