import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
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
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
          <Provider store={store}>
                  <LoginForm/>
          </Provider>
        );
    }

}

export default Index;