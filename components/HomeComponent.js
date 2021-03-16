import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import CarouselCards from './CarouselCardsComponent'
import SafeAreaView from "react-native-safe-area-view";

// export default function Home() {
// return (

//   <SafeAreaView>
//     <CarouselCards />
//     </SafeAreaView>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 50
//   },
// });

class Home extends Component {

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (

              <CarouselCards />

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