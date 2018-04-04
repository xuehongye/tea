import React, { Component } from "react";
import { StyleSheet, View, Alert, Text, TouchableOpacity } from "react-native";
import { UltimateRefreshView } from "react-native-ultimate-listview";
import State1 from "../../common/components/State1"
export default class FlatList extends Component {
    render() {
        return (
            <UltimateRefreshView onRefresh={this.onRefresh}>
                <State1 />
            </UltimateRefreshView>
        )
    }

}