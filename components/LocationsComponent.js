import React, { Component } from 'react';
import { FlatList, Linking, Platform } from 'react-native';
import { Tile } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import SANOLOCATIONS from '../shared/SanoLocations';




class Locations extends Component {

    static navigationOptions = {
        title: 'Locations'
    }

    dialCall = (number) => {
      let phoneNumber = '';
      if (Platform.OS === 'android') { phoneNumber = `tel:${number}`; }
      else {phoneNumber = `telprompt:${number}`; }
      Linking.openURL(phoneNumber);
   };

    render() {
        const { navigate } = this.props.navigation;
        const renderLocationItem = ({item}) => {
            return (
                <Animatable.View animation='fadeInRightBig' duration={2000} >
                    <Tile
                        title={item.alt}
                        caption={ item.email + '\n'  + item.phone}   
                        captionStyle= {{ fontSize: 20, textAlign: 'center', fontWeight: 'bold', color: 'white'}}
                        featured
                        imageSrc={{uri: item.src}}
                        onPress={()=>{this.dialCall(item.phone)}}

                    />
                </Animatable.View>    
            );
        };


        return (
            <FlatList
                data={SANOLOCATIONS}
                renderItem={renderLocationItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default Locations;