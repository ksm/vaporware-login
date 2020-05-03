// @flow
import React, {useContext} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  Button,
  TextInput,
} from 'react-native';
import {AuthContext} from './AuthContext';

export const LoginScreen = () => {
  const authFunc = useContext(AuthContext);

  return (
    // <StatusBar barStyle="dark-content" /> how does this component work?
    <SafeAreaView style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text>Please provide a valid username and password.</Text>
        <TextInput placeholder="Username" />
        <TextInput placeholder="Password" secureTextEntry />
        <Button title="Log me in" onPress={authFunc}></Button>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
