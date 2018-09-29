/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { observable } from "mobx";
import { observer } from "mobx-react";

class AppTime {
  @observable
  timer = 0;
  constructor(num){  
    this.timer = num;  
  }

  addTimer(){
    this.timer+=1;
    console.log('>>>>>>>>',this.timer);
  }

  minusTimer(){
    this.timer-=1;
    console.log('>>>>>>>>',this.timer);
  }
}

@observer
class NumItem extends Component {
  render() {
    return (
      <View style={styles.NumItemStyle}>
          <Text style={styles.welcome} onPress={()=>{
            this.props.appTime&&this.props.appTime.addTimer();
          }}>+</Text>
          <Text style={styles.instructions}>  {this.props.appTime&&this.props.appTime.timer}  </Text>
          <Text style={styles.welcome} onPress={()=>{
            this.props.appTime&&this.props.appTime.minusTimer();
          }}>-</Text>
        
      </View>
    );
  }
}

export default class App extends Component {
  constructor(props){
    super(props);
    this.data = [];
    for(var i=0;i<3;i++){
      this.data.push(new AppTime(0));
    }
  }
  render() {
    return (
      <View style={styles.container}>
        {this.data.length>0&&this.data.map((item,index)=>{
           return <NumItem key={'item'+index} appTime={item}/>
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  NumItemStyle:{
    flexDirection:'row',
    alignItems:'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    borderWidth:1,
    borderColor:'lightblue'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
