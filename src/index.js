import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class Index extends Component{
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyAWriKnitfLT-KR-BXBCYJD8G2RTh9Sa4U',
            authDomain: 'manager-87c87.firebaseapp.com',
            databaseURL: 'https://manager-87c87.firebaseio.com',
            projectId: 'manager-87c87',
            storageBucket: 'manager-87c87.appspot.com',
            messagingSenderId: '365809451172'
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
          <Provider store={createStore(reducers)}>
              <View>
                  <LoginForm/>
              </View>
          </Provider>
        );
    }

}

export default Index;