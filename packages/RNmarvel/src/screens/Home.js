import React, {useEffect} from 'react';
import { TouchableOpacity, View, Button, FlatList, Text, Image, StyleSheet } from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Fetching, Offset} from './../action/index'
import Loading from './Loading'
import { Header } from 'react-native-elements';
import Card from './../components/Card'

const Home = ({navigation, stateOffset, offsetIncrement, fetching, stateFetch}) => {

    useEffect(() => {
        console.log(stateFetch.data)
        fetching()
    }, [stateOffset])

    if(stateFetch.loading){
        return <Loading/>
    }else{
        return (
            <View>
                <Header backgroundColor={'#f1f1f1'} centerComponent={{text: 'Home', h4: true}}
                  leftComponent={{ icon: 'home', h4: true, style: { color: '#fff' } }}
                />
                <FlatList
                    data={stateFetch.data}
                    renderItem={({item}) => <Card item={item} navigation={navigation} />}
                    keyExtractor={(item, index) => index.toString()}
                    onEndReached={offsetIncrement}
                    onEndReachedThreshold={1}
                    
                />                
            </View>
        )
    }
}



const mapStateToProps = (state) => ({
    stateFetch: state.fetching,
    stateOffset: state.offset.offset
})

const mapDispatchToProps = (dispatch) => {
    return {
        fetching: bindActionCreators(Fetching, dispatch),
        offsetIncrement: bindActionCreators(Offset, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
