import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import {
  Login,
  VerifyEmail,
  VerifyPhone,
  DoneVerifyEmail,
  DoneVerifyPhone,
} from "../screens/index";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="VerifyEmail" component={VerifyEmail} />
          <Stack.Screen name="VerifyPhone" component={VerifyPhone} />
          <Stack.Screen name="DoneVerifyEmail" component={DoneVerifyEmail} />
          <Stack.Screen name="DoneVerifyPhone" component={DoneVerifyPhone} />
        </Stack.Navigator>
    </>
  );
}
