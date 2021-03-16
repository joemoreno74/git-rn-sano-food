
import React, { Component } from "react";
import {
  View,
  Platform,
  Text,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";
import { Icon } from "react-native-elements";
import SafeAreaView from "react-native-safe-area-view";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "./HomeComponent";
import Reservation from "./ReservationComponent";
import ChefRecommended from "./ChefRecommendComponent";
import FoodMenu from "./FoodMenuComponent";
import Locations from './LocationsComponent';
import Meal from './MealComponent';



const CustomDrawerContentComponent = (props) => (
  <ScrollView>

      <View style={styles.drawerHeader}>
        <View style={{ flex: 1 }}>
          <Image
            source={require("./img/sano-food-logo.png")}
            style={styles.drawerImage}
          />
        </View>
        <View style={{ flex: 2 }}>
          <Text style={styles.drawerHeaderText}>Sano Food</Text>
        </View>
      </View>
      <DrawerItems {...props} />

  </ScrollView>
);

const HomeNavigator = createStackNavigator(
  {
    Home: { screen: Home },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#559617",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
      headerLeft: (
        <Icon
          name="home"
          type="font-awesome"
          iconStyle={styles.stackIcon}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  }
);

const FoodMenuNavigator = createStackNavigator(
  {
    FoodMenu: { screen: FoodMenu },
    Meal: { screen: Meal },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#559617",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
      headerLeft: (
        <Icon
          name="cutlery"
          type="font-awesome"
          iconStyle={styles.stackIcon}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  }

);

const ReservationNavigator = createStackNavigator(
  {
    Reservation: { screen: Reservation },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#559617",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
      headerLeft: (
        <Icon
          name="table"
          type="font-awesome"
          iconStyle={styles.stackIcon}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  }
);

const LocationsNavigator = createStackNavigator(

  {
    Locations: { screen: Locations },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#559617",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
      headerLeft: (
        <Icon
          name="map-marker"
          type="font-awesome"
          iconStyle={styles.stackIcon}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  }

);

const ChefFoodNavigator = createStackNavigator(
  {
    ChefFood: { screen: ChefRecommended },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#559617",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
      headerLeft: (
        <Icon
          name="check-square-o"
          type="font-awesome"
          iconStyle={styles.stackIcon}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  }
);




const MainNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon name="home" type="font-awesome" size={24} color={tintColor} />
        ),
      },
    },
    FoodMenu: {
      screen: FoodMenuNavigator,
      navigationOptions: {
        drawerLabel: "Menu",
        drawerIcon: ({ tintColor }) => (
          <Icon
            name="cutlery"
            type="font-awesome"
            size={24}
            color={tintColor}
          />
        ),
      },
    },
    ChefFood: {
      screen: ChefFoodNavigator,
      navigationOptions: {
        drawerLabel: "Chef Recommended",
        drawerIcon: ({ tintColor }) => (
          <Icon
            name="check-square-o"
            type="font-awesome"
            size={24}
            color={tintColor}
          />
        ),
      },
    },
    Reservation: {
      screen: ReservationNavigator,
      navigationOptions: {
        drawerLabel: "Reserve a Table",
        drawerIcon: ({ tintColor }) => (
          <Icon name="table" type="font-awesome" size={24} color={tintColor} />
        ),
      },
    },
    Locations: {
      screen: LocationsNavigator,
      navigationOptions: {
        drawerLabel: "Locations",
        drawerIcon: ({ tintColor }) => (
          <Icon
            name="map-marker"
            type="font-awesome"
            size={24}
            color={tintColor}
          />
        ),
      },
    },
  },
  {
    drawerBackgroundColor: "#92b472",
    contentComponent: CustomDrawerContentComponent,
  }
);

const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop:
            Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight,
        }}
      >
        <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: "#fff",
    height: 140,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
  },
  drawerHeaderText: {
    color: "#000",
    fontSize: 24,
    fontWeight: "bold",
  },
  drawerImage: {
    margin: 1,
    height: 120,
    width: 120,
  },
  stackIcon: {
    marginLeft: 10,
    color: "#fff",
    fontSize: 24,
  },
});

export default Main;
