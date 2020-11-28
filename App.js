import React, {Component} from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {DrawerCustomNavigator} from './Navigators/DrawerCustomNavigator.js';
import LoginScreen from './Screens/LoginScreen.js';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {isLoggedIn:true}
}
  setLogin(){
    this.setState({isLoggedIn:true});
}

setLogout(){
    this.setState({isLoggedIn:false});
}
  
  render(){

    let screen;
    if(this.state.isLoggedIn){
        screen = 
      
        <NavigationContainer>
          <DrawerCustomNavigator onLogout={() => this.setLogout()}/>
        </NavigationContainer>
    } else {
        screen = <LoginScreen onLogin={() => this.setLogin()}/>
    }
    return screen;
  
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
