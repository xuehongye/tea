import React, { Component } from "react";
import { Image, View, TouchableOpacity, Text, TextInput, Button, ScrollView } from "react-native";
import PropTypes from 'prop-types';


import styles from "../style/HeadStyle";
export default class HeadView extends React.Component {
    static propTypes = {
        hidenleftBtn: PropTypes.bool,
    }
    static defaultProps = {
        hidenleftBtn: false
    };

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.headerTitle}>{this.props.name}</Text>

                {this.props.hidenleftBtn ? null :
                    <View style={styles.backbtn}>
                        <TouchableOpacity onPress={() => {
                            this.props.navigator.pop();
                        }}>
                            <Image style={styles.backImg} source={require("../../home/image/tea/back.png")} />
                        </TouchableOpacity>
                    </View>
                }
                <TouchableOpacity disabled={!!this.props.save} style={styles.leftBtn}>
                    {this.props.hidenleftBtn ? null : <Text style={styles.save} aa={this.props.aa}>{this.props.save}</Text>}
                </TouchableOpacity>
            </View>
        )
    }

}