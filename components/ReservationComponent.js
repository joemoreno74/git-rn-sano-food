import React, { Component } from "react";
import {
  Text,
  TextInput,
  View,
  ScrollView,
  StyleSheet,
  Picker,
  Switch,
  Button,
  Alert,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as Animatable from "react-native-animatable";

class Reservation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      guests: 1,
      kids: false,
      date: new Date(),
      time: 1,
      firstName: "",
      lastName: "",
      phoneNum: "",
      showCalendar: false,
      showDatepicker: false,
    };
  }

  static navigationOptions = {
    title: "Reserve Table",
  };

  resetForm() {
    this.setState({
      guests: 1,
      kids: false,
      date: new Date(),
      time: 1,
      firstName: "",
      lastName: "",
      phoneNum: "",
      showCalendar: false,
      showDatepicker: false,
      showModal: false,
    });
  }

  createTwoButtonAlert = () =>
    Alert.alert(
      "Reserve Table Now?",
      "Number of Guests: " +
        this.state.guests +
        "\n\n" +
        "Including children: " +
        this.state.kids +
        "\n\n" +
        "Date: " +
        this.state.date.toLocaleDateString("en-US") +
        "\n\n" +
        "Your Name: " +
        this.state.firstName +
        " " +
        this.state.lastName +
        "\n\n" +
        "Contact: " +
        this.state.phoneNum,
      [
        {
          text: "Cancel",
          onPress: () => this.resetForm(),
          style: "cancel",
        },
        { text: "Yes", onPress: () => this.resetForm() },
      ],
      { cancelable: false }
    );

  render() {
    return (
      <ScrollView>
        <Animatable.View animation="zoomIn" duration={2000} delay={1000}>
          <View style={styles.formRow}>
            <Text style={styles.formLabel}>Number of Guests</Text>
            <Picker
              style={styles.formItem}
              selectedValue={this.state.guests}
              onValueChange={(itemValue) =>
                this.setState({ guests: itemValue })
              }
            >
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5" value="5" />
              <Picker.Item label="6" value="6" />
            </Picker>
          </View>
          <View style={styles.formRow}>
            <Text style={styles.formLabel}>With children below age 12?</Text>
            <Switch
              style={styles.formItem}
              value={this.state.kids}
              trackColor={{ true: "#559617", false: null }}
              onValueChange={(value) => this.setState({ kids: value })}
            />
          </View>
          <View style={styles.formRow}>
            <Text style={styles.formLabel}>Date</Text>
            <Button
              onPress={() =>
                this.setState({ showCalendar: !this.state.showCalendar })
              }
              title={this.state.date.toLocaleDateString("en-US")}
              color="#559617"
              accessibilityLabel="Tap me to select a reservation date"
            />
          </View>
          {this.state.showCalendar && (
            <DateTimePicker
              value={this.state.date}
              mode={"date"}
              display="default"
              onChange={(event, selectedDate) => {
                selectedDate &&
                  this.setState({ date: selectedDate, showCalendar: false });
              }}
              style={styles.formItem}
            />
          )}
          <View style={styles.formRow}>
            <Text style={styles.formLabel}>Time</Text>
            <Picker
              style={styles.formItem}
              selectedValue={this.state.time}
              onValueChange={(itemValue) => this.setState({ time: itemValue })}
            >
              <Picker.Item label="10 AM" value="1" />
              <Picker.Item label="11 AM" value="2" />
              <Picker.Item label="12 PM" value="3" />
              <Picker.Item label="1 PM" value="4" />
              <Picker.Item label="2 PM" value="5" />
              <Picker.Item label="3 PM" value="6" />
              <Picker.Item label="4 PM" value="7" />
              <Picker.Item label="5 PM" value="8" />
              <Picker.Item label="6 PM" value="9" />
              <Picker.Item label="7 PM" value="10" />
              <Picker.Item label="8 PM" value="11" />
              <Picker.Item label="9 PM" value="12" />
            </Picker>
          </View>
          <View style={styles.formRow}>
            <Text style={styles.formLabel}>Your Name</Text>
            <TextInput
              style={styles.formItem}
              placeholder="First Name"
              onChangeText={(value) => this.setState({ firstName: value })}
              defaultValue={this.state.firstName}
            />
            <TextInput
              style={styles.formItem}
              placeholder="Last Name"
              onChangeText={(value) => this.setState({ lastName: value })}
              defaultValue={this.state.lastName}
            />
          </View>
          <View style={styles.formRow}>
            <Text style={styles.formLabel}>Contact No.</Text>
            <TextInput
              style={styles.formItem}
              placeholder="Phone Number"
              maxLength={10}
              onChangeText={(value) => this.setState({ phoneNum: value })}
              defaultValue={this.state.phoneNum}
            />
          </View>
          <View style={styles.formRow}>
            <Button
              onPress={this.createTwoButtonAlert}
              title="Reserve"
              color="#559617"
              accessibilityLabel="Tap me to search for available table to reserve"
            />
          </View>
        </Animatable.View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  formRow: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
    margin: 20,
  },
  formLabel: {
    fontSize: 18,
    flex: 2,
  },
  formItem: {
    flex: 1,
  },
  modal: {
    justifyContent: "center",
    margin: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    backgroundColor: "#5637DD",
    textAlign: "center",
    color: "#fff",
    marginBottom: 20,
  },
  modalText: {
    fontSize: 18,
    margin: 10,
  },
});

export default Reservation;
