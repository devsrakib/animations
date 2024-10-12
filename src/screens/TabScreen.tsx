/* eslint-disable import/order */
import { View } from 'react-native';
import React, { useState } from 'react';
import AnimatedTab from '~/pages/AnimatedTab';

const TabScreen = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
      }}>
      <AnimatedTab
        data={[
          { icon: 'LifeBuoy', label: 'Buoy' },
          { icon: 'Fish', label: 'Fresh fish' },
          { icon: 'Sailboat', label: 'Soil' },
          { icon: 'Ship', label: 'Ship it' },
          { icon: 'ShipWheel', label: 'Manage it' },
        ]}
        onChange={(index) => setSelectedIndex(index)}
        selectedIndex={selectedIndex}
      />
    </View>
  );
};

export default TabScreen;
