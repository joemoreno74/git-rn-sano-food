import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import  SANOMEAL from '../shared/SanoMeal';

  
class FoodMenu extends Component {
    static navigationOptions = {
        title: 'FoodMenu'
    };
    render() {
      return (
            <View>
            {
                SANOMEAL.map((item, i) => (
                <ListItem key={i} bottomDivider
                onPress={() => { this.props.navigation.navigate('Meal', { mealType: item.meal })}}
                >
                <Icon
                name={ item.icon }
                type="font-awesome"
                size={24}
              />
                    <ListItem.Content>
                        <ListItem.Title>{item.meal}</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
                ))
            }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    recommendationTitle: {
      fontSize: 24,
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: 20,
    },
    recommendationText: {
      textAlign: "center",
      justifyContent: "center",
    },
    chefCardText: {
      textAlign: "center",
      justifyContent: "center",
    },
  });

export default FoodMenu;






