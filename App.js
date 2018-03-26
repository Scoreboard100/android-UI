import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScoreBoardBlink from './UI/Components/ScoreBoardBlink';
import ScoreBoardImage from './UI/Components/ScoreBoardsImage';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      {/* <Header/> */}
       <Text> Welcome To </Text>
       <Text style ={styles.textcontainer}>Score Boards</Text>
       <ScoreBoardBlink/>
       <ScoreBoardImage/>
       {/* <Footer/> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3499a8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textcontainer:{
    fontSize:45,
    fontWeight: 'bold',
  }
});
