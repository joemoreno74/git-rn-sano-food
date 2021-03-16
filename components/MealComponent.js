import React, { Component } from 'react';
import {  Avatar, ListItem } from 'react-native-elements';
import {  StyleSheet, View } from 'react-native';
import  SANOMENU  from '../shared/SanoMenu';



class Meal extends Component {
  constructor(props) {
    super(props);
  }
    static navigationOptions = ({navigation}) =>  {
      const mealType = navigation.getParam('mealType');
       return(
         { title: mealType}
       );
    };
    

render()
    {
      const  mealType  = this.props.navigation.getParam('mealType');
      const meal = SANOMENU.filter(meal => meal.foodtype === mealType);
      console.log(meal);
    return(     

      <View>
        {
          meal.map((item, i) => (
            <ListItem key={i} bottomDivider>
              <Avatar source={{uri: item.avatar}} />
              <ListItem.Content>
                <ListItem.Title>{item.name}</ListItem.Title>
                <ListItem.Subtitle>${item.cost}</ListItem.Subtitle>
              </ListItem.Content>
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



  export default Meal;