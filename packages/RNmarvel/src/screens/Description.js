import React, { Component } from 'react'
import { ScrollView, Image, Dimensions, Text } from 'react-native'
import { Header, Icon, Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('screen').width

export default class Description extends Component {

    render() {
        const { hero } = this.props.navigation.state.params
        
        const MyCustomLeftComponent = () => (
            <Icon name={'arrow-back'} onPress={() => this.props.navigation.goBack()}/>
        )
        
        return (
            <>
                <Header backgroundColor={'#f1f1f1'} centerComponent={{text: 'Description', h4: true}}
                    leftComponent={<MyCustomLeftComponent/>}
                />
                <ScrollView>
                    <Image 
                            source={{uri: `${hero.thumbnail.path}.${hero.thumbnail.extension}`}} 
                            style={{width:SCREEN_WIDTH, height:SCREEN_WIDTH}}
                        />
                        <Text style={{padding:10, fontSize:20}}>{hero.name}</Text>
                        <Text style={{padding:10}}>{hero.description}</Text>
                </ScrollView> 
           </>
        )
    }
    
}

