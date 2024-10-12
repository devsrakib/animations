import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ActivityIndicator from '~/components/ActivityIndicator';

export type RootStackParamList = {
  ActivityIndicator: undefined;
  Modal: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ActivityIndicator">
        <Stack.Screen
          name="ActivityIndicator"
          component={ActivityIndicator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
