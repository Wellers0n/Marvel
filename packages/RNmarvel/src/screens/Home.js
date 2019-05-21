import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, Button, FlatList, Text, Image, StyleSheet } from 'react-native'
import { FetchReq } from '../FetchApi/Fetchings'
import {connect} from 'react-redux'

const Home = ({navigation, offset, onLimitClick}) => {
    const [data, setData] = useState([])

    useEffect(() => {
        console.log(offset)
        const fetchData = async () => {
            const result = await FetchReq(offset)
            setData([...data, ...result]);
        }

        fetchData()
      }, [offset]);

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


    return (
        <>
            <FlatList
                data={data}
                renderItem={_renderItem}
                keyExtractor={(item, index) => index.toString()}
                onEndReached={onLimitClick}
                onEndReachedThreshold={1}
            />
            {/* <Button onPress={onLimitClick} title={'click'}/> */}
        </>
    )
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
    offset: state.offset
})

const mapDispatchToProps = (dispatch) => ({
    onLimitClick: () => dispatch({type: 'BOTTOM_END'})
    
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
