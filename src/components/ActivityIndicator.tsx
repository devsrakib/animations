/* eslint-disable import/order */
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';

const ActivityIndicator = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text>ActivityIndicator</Text>
      </View>
    </SafeAreaView>
  );
};

export default ActivityIndicator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
