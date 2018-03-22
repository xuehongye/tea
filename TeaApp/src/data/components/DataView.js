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
    ListView
} from 'react-native';
export default class DataView extends Component {

    constructor(props) {  
        super(props);  
  
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => {r1 !== r2}});  
        this.state = {  
            dataSource: ds,  
            load:false,  
            text:''  
        };  
    }  
  
    //耗时操作放在这里面  
    componentDidMount(){  
        this.getNet();  
    }  
  
    getNet(){  
        fetch('http://facebook.github.io/react-native/movies.json')//请求地址  
            .then((response) => response.json())//取数据  
            .then((responseText) => {//处理数据  
                //通过setState()方法重新渲染界面  
                console.log(responseText)
                this.setState({  
                    //改变加载ListView  
                    load: true,  
                    //设置数据源刷新界面  
                    dataSource: this.state.dataSource.cloneWithRows(responseText.movies),  
                })  
  
            })  
            .catch((error) => {  
                console.warn(error);  
            }).done();  
    }  
  
    render() {  
        if(this.state.load){  
            return (  
                <View style={{flex: 1, paddingTop: 22}}>  
                    <ListView  
                        dataSource={this.state.dataSource}  
                        
                        renderRow={(rowData)=>  
                            <View>  
                                <Text>{rowData.title}</Text>
                                <Text>{rowData.releaseYear}</Text>
                            </View>}  
                        />  
                </View>  
            );  
        } else{  
            return(  
                <View>  
                    <Text>loading......</Text>  
                </View>  
            );  
        }  
    }  
}