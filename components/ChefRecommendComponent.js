import React, { Component } from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import { Card } from "react-native-elements";

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
        <Card>
          <Card.Title>Boost Up Breakfast</Card.Title>
          <Card.Divider />
          <Card.Image source={require("./img/breakfast-sano-food.jpg")} />
          <Text style={styles.chefCardText}>
            Boost up your morning with Sano ultimate breakfast!
          </Text>
        </Card>
        <Card>
          <Card.Title>Power Lunch</Card.Title>
          <Card.Divider />
          <Card.Image source={require("./img/asparagus-sano-food.jpg")} />
          <Text style={styles.chefCardText}>
            Light and healthy lunch that will keep you going for the day.
          </Text>
        </Card>
        <Card>
          <Card.Title>Sweet Dessert</Card.Title>
          <Card.Divider />
          <Card.Image source={require("./img/fruit-sano-food.jpg")} />
          <Text style={styles.chefCardText}>
            Simply and healthy fruits that's all you need.
          </Text>
        </Card>
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
});

export default ChefRecommended;
