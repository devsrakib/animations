/* eslint-disable import/order */
import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { icons } from 'lucide-react-native';
import Animated, { FadeInRight, FadeOutRight, LinearTransition } from 'react-native-reanimated';
import { MotiView } from 'moti';

type IconNames = keyof typeof icons;
type TabItem = {
  icon: string;
  label: string;
};

type TabsProps = {
  data: TabItem[];
  selectedIndex: number;
  onChange: (index: number) => void;
  activeColor: string;
  inactiveColor: string;
  activeBackgroundColor?: string;
  inactiveBackgroundColor?: string;
};

type IconProp = {
  name: IconNames;
};

function Icon({ name }: IconProp) {
  const IconComponent = icons[name];
  return <IconComponent size={20} color={'blue'} />;
}
const AnimatedTab = ({
  data,
  selectedIndex,
  onChange,
  activeColor = '#fff',
  inactiveColor = '#999',
  activeBackgroundColor = '#111',
  inactiveBackgroundColor = '#ddd',
}: TabsProps) => {
  const _spacing = 4;
  return (
    <View style={{ flexDirection: 'row', gap: _spacing }}>
      {data.map((item, index) => {
        const isSelected = selectedIndex === index;
        return (
          <Animated.View layout={LinearTransition.springify().damping(80).stiffness(200)}>
            <Pressable
              onPress={() => onChange(index)}
              style={{
                padding: _spacing * 3,
                justifyContent: 'center',
                alignItems: 'center',
                gap: _spacing,
                flexDirection: 'row',
                backgroundColor: isSelected ? activeBackgroundColor : inactiveBackgroundColor,
                borderRadius: 8,
              }}>
              <Icon name={item?.icon} />
              {isSelected && (
                <Animated.Text
                  entering={FadeInRight.springify().damping(80).stiffness(200)}
                  exiting={FadeOutRight.springify().damping(80).stiffness(200)}
                  style={{ color: isSelected ? activeColor : inactiveColor }}>
                  {item?.label}
                </Animated.Text>
              )}
            </Pressable>
          </Animated.View>
        );
      })}
    </View>
  );
};

export default AnimatedTab;
