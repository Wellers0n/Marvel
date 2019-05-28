import React, {useEffect} from 'react';
import { TouchableOpacity, View, Button, FlatList, Text, Image, StyleSheet } from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Fetching, Offset} from './../action/index'
import Loading from './Loading'

const Home = ({navigation, stateOffset, offsetIncrement, fetching, stateFetch}) => {
    useEffect(() => {
        console.log(stateFetch.loading, stateFetch.error)
        fetching()
    }, [stateOffset])

    const _renderItem = ({item}) => {
        return  (
            <TouchableOpacity onPress={() => _onItemPress(item)}
              style={styles.container}
            >
                <Image style={styles.img}
                    source={{uri: `${item.thumbnail.path}.${item.thumbnail.extension}` }}
                />
                <Text style={{marginLeft: 10}}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    const _onItemPress = (item) => {
        navigation.navigate('Description', {hero: item})
    }


    if(stateFetch.loading){
        return <Loading/>
    }else{
        return (
            <View>
                <FlatList
                    data={stateFetch.data}
                    renderItem={_renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    onEndReached={offsetIncrement}
                    onEndReachedThreshold={1}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        padding: 10,
        alignItems:'center',
        borderColor: 'lightgray',
        borderBottomWidth: 1,
    },
    img:{
        height: 50,
        width: 50,
        borderRadius: 25
    }
})

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
