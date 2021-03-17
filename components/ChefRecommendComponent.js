import React, { Component } from "react";
import { ScrollView, Text, StyleSheet, View, Image, Dimensions } from "react-native";
import { Card } from "react-native-elements";
import CHEFRECOMMEND from "../shared/ChefRecommend"

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

function Recommendation() {
  return (
    <Card title={"Chef Recommended"} wrapperStyle={{ margin: 15 }}>
      <Text style={styles.recommendationTitle}>Don't know where to start?</Text>
      <Text style={styles.recommendationText}>
        Check out our Chef Recommended healthy food!
      </Text>
    </Card>
  );
}

class ChefRecommended extends Component {
  static navigationOptions = {
    title: "Chef Recommended",
  };

  render() {
    return (
      <ScrollView>
        <Recommendation />
        {
         CHEFRECOMMEND.map((item, i) => (
          <View key={i} style={styles.user}> 
            <Card>
              <Card.Title>{ item.name }</Card.Title>
              <Card.Divider />
              <Image
                  source={{ uri: item.image }}
                  style={styles.image}
               />
              <Text style={styles.chefCardText}>
                { item.description }
              </Text>
            </Card>
           </View> 
        ))
      } 
      </ScrollView>
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
  image: {
    width: ITEM_WIDTH,
    height: 300,
  },  
});

export default ChefRecommended;
