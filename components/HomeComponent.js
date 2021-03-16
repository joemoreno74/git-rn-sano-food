import React, { Component } from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import CarouselCards from './CarouselCardsComponent'



class Home extends Component {

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (

          <SafeAreaView style={styles.container}>
             <CarouselCards />
           </SafeAreaView>
        );
}
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
});



export default Home;