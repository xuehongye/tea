import React, {
    Component,
} from 'react';

import {
    AppRegistry,
    Image,
    FlatList,
    StyleSheet,
    Text,
    View,
} from 'react-native';

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json';

export default class FetchData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loaded: false,
        };
        // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向会变为空
        // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
        this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
                console.log(responseData);
                let datalist = responseData.movies;
                let dataBlog = [];
                let i = 0;

                datalist.map((item) => {
                    dataBlog.push({
                        key: i + "sa",
                        value: item
                    })
                    i++;
                })

                this.setState({
                    data: dataBlog,
                    loaded: true,
                });
            });
    }

    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }

        return (
            <FlatList
                data={this.state.data}
                renderItem={this.renderMovie}
                style={styles.list}
            />
        );
    }

    renderLoadingView() {
        return (
            <View style={styles.container}>
                <Text>
                    Loading movies...
                </Text>
            </View>
        );
    }

    renderMovie({ item: ItemT, index: number }) {
        return (
            <View style={styles.every}>
                <View style={styles.imgBorder}>
                    <Image style={styles.teaImg} source={{ uri: ItemT.value.posters.thumbnail }} />
                </View>
                <View style={styles.teaText}>
                    <Text style={styles.teaTitle}>{ItemT.value.title}</Text>
                    <View style={styles.teaPrice}>
                        <View style={styles.bigPrice}>
                            <Text style={styles.qian}>{ItemT.value.release_dates.release_dates}</Text>
                            <Text style={styles.sales}>{ItemT.value.release_dates.theater}</Text>
                        </View>
                        <View style={styles.smallPrice}>
                            <Text style={styles.qian}>{ItemT.value.year}</Text>
                            <Text style={styles.gifts}>礼盒价</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    list: {
        flexDirection: "row",
        flexWrap: 'wrap',
    },
    every: {
        width: 160,
        height: 260,
        // backgroundColor: "red",
        marginBottom: 25,
    },
    imgBorder: {
        width: 160,
        height: 178,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: "#000",
        alignItems: "center",
    },
    teaImg: {
        width: 160,
        height: 178,
    },
    teaText: {
        width: 160,
        flex: 1,
        flexDirection: "column",
        justifyContent: 'space-between',
        alignItems: "center",
        marginTop: 9,
    },
    teaTitle: {
        width: 160,
        height: 14,
        fontSize: 12,
        color: "#282828",
    },
    teaPrice: {
        width: 160,
        height: 43,
        flexDirection: "column",
        justifyContent: 'space-between',
        alignItems: "center",
    },
    bigPrice: {
        width: 160,
        height: 15,
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    sales: {
        fontSize: 10,
        color: "#888",
    },
    smallPrice: {
        width: 160,
        height: 15,
        flexDirection: "row",
        justifyContent: 'flex-start',
    },
    qian: {
        fontSize: 13,
    },
    gifts: {
        fontSize: 10,
        color: "#888",
        lineHeight: 20,
        marginLeft: 15,
    },
});