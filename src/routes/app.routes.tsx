import React from 'react'
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack'
import { ParamListBase } from '@react-navigation/native'

import { Home } from '../screens/home'
import { Details } from '../screens/details'
import { Register } from '../screens/register'

interface RootStackParamList extends ParamListBase {
  Home: undefined
  Register: undefined
  Details: { orderId: string }
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export type RouteNavigationProps = NativeStackScreenProps<RootStackParamList>

export const AppRoutes: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="home">
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="new" component={Register} />
      <Stack.Screen name="details" component={Details} />
    </Stack.Navigator>
  )
}
