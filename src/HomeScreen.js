// @flow
import React from 'react';
import {SafeAreaView, ScrollView, Text, StyleSheet} from 'react-native';

export const HomeScreen = () => (
  // <StatusBar barStyle="dark-content" /> how does this component work?
  <SafeAreaView>
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}>
      <Text>I am home screen!</Text>
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  scrollView: {},
});
