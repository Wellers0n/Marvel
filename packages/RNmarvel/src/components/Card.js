import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {Card, Avatar, Overlay} from 'react-native-elements';

const CardMain = ({item, navigation}) => {

    const _onItemPress = (item) => {
        navigation.navigate('Description', {hero: item})
    }

    return  (
        <TouchableOpacity onPress={() => _onItemPress(item)}
          
        >
            
            <Card title="Character" >
                <View style={styles.container}>
                    {/* <Image style={styles.img}
                        source={{uri: `${item.thumbnail.path}.${item.thumbnail.extension}` }}
                    /> */}
                    <Avatar size="medium"
                        rounded
                        source={{uri:`${item.thumbnail.path}.${item.thumbnail.extension}`,
                        }}
                    />
                    <Text style={{marginLeft: 10}}>{item.name}</Text>
                </View>
            </Card>
            
        </TouchableOpacity>
    )
    
}
const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    img:{
        height: 50,
        width: 50,
    },
})



export default CardMain