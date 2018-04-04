import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    DeviceEventEmitter
} from 'react-native';

export default class ShoppingItemComponent extends Component {

    static propTypes = {
        itemData: PropTypes.object.isRequired,
        money: PropTypes.func,
    };

    static defaultProps = {
        money: () => null,
    };

    componentDidMount() {
        this.subscription = DeviceEventEmitter.addListener('allSelect', (isSelAll) => {
            this.props.itemData.isSelect = isSelAll;
            this.setState({ isSel: isSelAll });
            if (isSelAll) {
                this.setMoney(this.state.money * this.state.selNum);
            }

        })
    };

    componentWillUnmount() {
        this.subscription && this.subscription.remove();
    };

    constructor(props) {
        super(props);
        this.state = {
            isSel: this.props.itemData.isSelect,
            selNum: this.props.itemData.count,
            money: this.props.itemData.money,
            costPrice: this.props.itemData.costPrice,
            name: this.props.itemData.name,
            description: this.props.itemData.description,
            img: this.props.itemData.img,
        }
    };

    itemSelect = (item) => {
        this.setState({ isSel: !this.state.isSel }, () => {
            if (this.state.isSel) {
                this.setMoney(this.state.money * this.state.selNum);
                alert(1)
            }
            else {
                this.setMoney(-this.state.money * this.state.selNum)
            }
        });
    };

    itemIncrease = (i) => {
        i++;
        this.setState({ selNum: i }, () => {
            if (this.state.isSel) {
                this.setMoney(this.state.money)
            } else {
                this.setState({ isSel: true });
                this.setMoney(this.state.money * this.state.selNum);
            }
            this.props.itemData.count = i;
        });
    };

    itemReduce = (i) => {
        if (i <= 1) {
            if (this.state.isSel) {
                this.setState({ isSel: !this.state.isSel });
                this.setMoney(-this.state.money)
            }
            return;
        }
        i--;
        this.setState({ selNum: i }, () => {
            if (this.state.isSel) {
                this.setMoney(-this.state.money)
            } else {
                this.setState({ isSel: true });
                this.setMoney(this.state.money * this.state.selNum);
            }
            this.props.itemData.count = i;
        });

    };

    setMoney = (money) => {
        if (this.props.money) {
            this.props.money(money);
        }
    };

    render() {
        let { itemData } = this.props;
        let { isSel, selNum, money,costPrice, name, description, img } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <TouchableOpacity
                        style={{ marginLeft: 15 }}
                        onPress={() => this.itemSelect(itemData)}>
                        <Image source={isSel ?
                            require('./imgs/login_radio_selected.png')
                            : require('./imgs/login_radio_normall.png')} />
                    </TouchableOpacity>
                    <Image style={styles.icon} source={{ uri: img }} />
                    <View style={styles.right}>
                        <Text style={styles.nameStyle} numberOfLines={1}>{name}</Text>
                        <Text style={styles.descriptionStyle} numberOfLines={1}>{description}</Text>
                        <View style={styles.right_bot}>
                            <View style={styles.price}>
                                <Text style={styles.moneyStyle}>￥{money}</Text>
                                <Text style={styles.coustPrice}>原价：￥{costPrice}</Text>
                                <View style={styles.giftBox}>
                                    <Text style={styles.gift}>礼盒</Text>
                                    <Text style={styles.giftTxt}>￥50.00</Text>
                                </View>
                            </View>
                            <View style={styles.numControllStyle}>
                                <TouchableOpacity style={styles.reduceStyle} onPress={() => this.itemReduce(selNum)}>
                                    <Text style={{ color: selNum <= 1 ? 'red' : 'black' }}>-</Text>
                                </TouchableOpacity>
                                <View style={styles.numberViewStyle}>
                                    <Text style={styles.numberStyle}>{selNum}</Text>
                                </View>
                                <TouchableOpacity style={styles.increaseStyle} onPress={() => this.itemIncrease(selNum)}>
                                    <Text>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <Text style={styles.bottom}>包含礼盒价 合计 ￥{selNum * money}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    top: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    bottom: {
        flex: 1,
        fontSize: 14,
        color: "#333",
        lineHeight: 38,
        borderTopColor: "#f6f6f8",
        borderTopWidth: 1,
        textAlign: "right",
        paddingRight: 12,
    },
    icon: {
        height: 90,
        width: 100,
    },
    right: {
        marginLeft: 15,
        flex: 1,
        marginTop: 10,
        marginBottom: 10,
    },
    nameStyle: {
        fontSize: 17,
        color: '#000000',
        paddingRight: 5,
    },
    descriptionStyle: {
        marginTop: 3,
        fontSize: 13,
        color: '#A9A9A9'
    },
    right_bot: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        alignItems: 'center',
    },
    price:{
        flex:1,
    },
    coustPrice:{
        fontSize: 14,
        color: '#333',
        textDecorationLine:"line-through",
    },
    moneyStyle: {
        fontSize: 14,
        color: '#333'
    },
    giftBox:{
        flexDirection:"row",
    },
    gift:{
        fontSize:12,
        color:"#ea4a4a",
    },
    giftTxt:{
        fontSize:12,
        color:"#333",
        marginLeft:5,
    },
    numControllStyle: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#e9e9e9',
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    reduceStyle: {
        height: 24,
        width: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 1,
        borderColor: '#e9e9e9',
    },
    numberViewStyle: {
        height: 24,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberStyle: {
        fontSize: 19,
    },
    increaseStyle: {
        height: 24,
        width: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderLeftWidth: 1,
        borderColor: '#e9e9e9',
    },
});