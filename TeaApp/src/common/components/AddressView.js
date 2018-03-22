import React, { Component } from "react";
import { Image, View, TouchableOpacity, Text, TextInput, Button, ScrollView } from "react-native";
import PropTypes from 'prop-types';

import styles from "../style/AddressStyle";
import shipAddressView from "../../user/components/shipAddressView";
export default class AddressView extends React.Component {

    static propTypes = {
        hidenleftBtn: PropTypes.bool,
        morenBtn: PropTypes.bool,
    }
    static defaultProps = {
        hidenleftBtn: false,
        morenBtn: false,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.address}>
                <View style={styles.messageIcon}
                >
                    <Image style={styles.user} source={require("../../user/image/car/iconhead.png")} />
                    <Image style={styles.user} source={require("../../user/image/car/iconocation.png")} />
                </View>
                <View style={styles.message}>
                    <View style={styles.mesTop}>
                        <Text style={styles.name}>
                            西西
                        </Text>
                        <Text style={styles.name1}>
                            13045851745
                        </Text>
                        {this.props.morenBtn ? null :
                            <Image source={require("../../user/image/car/iconmoren.png")} style={styles.moren} />
                        }
                    </View>
                    <Text style={styles.mesBottom}>
                        上海市宝山区通河二村35号306室（1号线通河新村地铁站下车）
                </Text>
                </View>
                {this.props.hidenleftBtn ? null :
                    <TouchableOpacity onPress={() => {
                        this.props.navigator.push(
                            {
                                params: { name: "shipAddress" },
                                component: shipAddressView,
                            }
                        )
                    }}>
                        <Image style={styles.next} source={require("../../home/image/tea/next.png")} />
                    </TouchableOpacity>
                }
            </View>
        )
    }
}