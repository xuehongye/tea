import React, { Component } from 'react'
import { View, StyleSheet, Text, Platform } from 'react-native'
import RefreshListView, { RefreshState } from 'react-native-refresh-list-view'
import Cell from '../../data/components/Cell'
// import testData from './data'
import HeadView from "../../common/components/HeadView"

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json';

class Demo extends Component {
    // state: {
    //     dataList: Array<any>,
    //     refreshState: number,
    // }

    constructor(props) {
        super(props)

        this.state = {
            dataList: [],
            refreshState: RefreshState.Idle,
            tabs: [
                { tabName: "全部", id: 1 },
                { tabName: "待收货", id: 2 },
                { tabName: "待发货", id: 3 },
                { tabName: "待付款", id: 4 },
                { tabName: "待评价", id: 5 },
            ],
            currentIndex: 1,
        }
    }

    componentDidMount() {
        this.onHeaderRefresh()
    }
    componentWillMount() {
        this._isMounted = true
    }
    componentWillUnmount() {
        this._isMounted = false
    }
    tabChoiced(id) {
        // tab切换的方法
        this.setState({
            currentIndex: id
        });
    }
    onHeaderRefresh = () => {
        this.setState({ refreshState: RefreshState.HeaderRefreshing })
        // 模拟网络请求
        //获取测试数据
        this.getTestList(true, (aa) => {
            var that = this;
            var dataList = aa;
            if (this._isMounted) {
                that.setState({
                    dataList: dataList,
                    refreshState: dataList.length < 1 ? RefreshState.EmptyData : RefreshState.Idle,
                })
            }
        })
    }

    onFooterRefresh = () => {
        this.setState({ refreshState: RefreshState.FooterRefreshing })

        // 模拟网络请求
        //获取测试数据
        this.getTestList(false, (aa) => {
            var that = this;
            var dataList = aa;
            if (this._isMounted) {
                this.setState({
                    dataList: dataList,
                    refreshState: dataList.length > 5 ? RefreshState.NoMoreData : RefreshState.Idle,
                })
            }
        })

    }

    // 获取测试数据
    getTestList(isReload: boolean, callback): Array<Object> {

        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                var movies = responseData.movies;

                let newList = movies.map((data) => {
                    return {
                        imageUrl: data.posters.thumbnail,
                        title: data.title,
                        subtitle: `[${data.release_dates.release_dates}]${data.release_dates.theater}`,
                        price: data.year,
                    }
                })
                typeof callback == 'function' && callback(newList);
                return isReload ? newList : [...this.state.dataList, ...newList]
            }).catch((error) => {
                this.setState({ refreshState: RefreshState.Failure })
            });
    }

    keyExtractor = (item: any, index: number) => {
        return index + '';
    }

    renderCell = (info: Object) => {
        return <Cell info={info.item} />
    }

    render() {
        var _this = this;
        var tabList = this.state.tabs.map(function (res, index) {
            // 遍历标签页，如果标签的id等于tabid，那么该标签就加多一个active的className
            var tabStyle = res.id == this.state.currentIndex ? styles.activeColor : styles.tabColor;

            return <Text onPress={this.tabChoiced.bind(_this, res.id)} style={tabStyle} key={index}>{res.tabName}</Text>

        }.bind(_this));

        return (
            <View style={styles.container}>
                <HeadView name="全部订单" hidenleftBtn={false} navigator={this.props.navigator} />
                <View style={styles.tabTitle}>
                    {tabList}
                </View>
                <RefreshListView
                    data={this.state.dataList}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderCell}
                    refreshState={this.state.refreshState}
                    onHeaderRefresh={this.onHeaderRefresh}
                    onFooterRefresh={this.onFooterRefresh}

                    // 可选
                    footerRefreshingText='玩命加载中 >.<'
                    footerFailureText='我擦嘞，居然失败了 =.=!'
                    footerNoMoreDataText='-我是有底线的-'
                    footerEmptyDataText='-好像什么东西都没有-'
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS == 'ios' ? 20 : 0,
        backgroundColor: "#f6f6f8",
    },
    title: {
        fontSize: 18,
        height: 84,
        textAlign: 'center',
    },
    tabTitle: {
        height: 37.5,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: "space-between",
        backgroundColor: "#fff",
        paddingLeft: 15,
        paddingRight: 15,
    },
    tabColor: {
        width: 45,
        fontSize: 14,
        color: "#333",
        lineHeight: 37.5,
        textAlign: "center"
    },
    activeColor: {
        width: 45,
        fontSize: 14,
        color: "#ea4a4a",
        borderBottomWidth: 1,
        borderBottomColor: "#ea4a4a",
        lineHeight: 37.5,
        textAlign: "center"
    }
})

export default Demo