// @flow
// Code smell alert:
// react-native-gesture-handler has to be first due to RNv5
import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from './src/LoginScreen';
import {HomeScreen} from './src/HomeScreen';
import {AuthContext} from './src/AuthContext';

const LoggedOut = createStackNavigator();
const LoggedIn = createStackNavigator();

const LoggedInStack = ({logOutButton}) => {
  return (
    <LoggedIn.Navigator>
      <LoggedIn.Screen
        name="Home"
        component={HomeScreen}
        options={{headerRight: () => logOutButton}}
      />
    </LoggedIn.Navigator>
  );
};

const LoggedOutStack = () => {
  return (
    <LoggedOut.Navigator>
      <LoggedOut.Screen
        name="Login"
        component={LoginScreen}
        options={{title: 'Log in'}}
        onLogIn={() => {
          console.warn('BLAH');
        }}
      />
    </LoggedOut.Navigator>
  );
};

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const toggleLoggedIn = () => setLoggedIn(!loggedIn);

  return (
    <AuthContext.Provider value={toggleLoggedIn}>
      <NavigationContainer>
        {loggedIn ? (
          <LoggedInStack
            logOutButton={<Button title="Log Out" onPress={toggleLoggedIn} />}
          />
        ) : (
          <LoggedOutStack />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
