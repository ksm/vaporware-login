// @flow
import React from 'react';
import {SafeAreaView, ScrollView, Text, StyleSheet, Button} from 'react-native';

export const LoginScreen = ({navigation}) => (
  // <StatusBar barStyle="dark-content" /> how does this component work?
  <SafeAreaView>
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}>
      <Text>Hello, World from the login screen!</Text>
      <Text>Hello, World from the login screen!</Text>
      <Button
        title="Log me in"
        onPress={() => {
          navigation.navigate('Home');
        }}></Button>
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  scrollView: {},
});
