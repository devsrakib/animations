/* eslint-disable import/order */
import { View } from 'react-native';
import React from 'react';
import ActivityIndicator from '~/pages/ActivityIndicator';

const ActivityScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <ActivityIndicator />
    </View>
  );
};

export default ActivityScreen;
