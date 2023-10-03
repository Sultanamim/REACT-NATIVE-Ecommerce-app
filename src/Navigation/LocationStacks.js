import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import {
    SearchCity,
    Entry,
    CityMap,
    DrawMap

} from "../screens/index";

const Stack = createNativeStackNavigator();


export default function LocationStacks() {
    return(
        <>
            <Stack.Navigator>
                <Stack.Screen name='Entry' component={Entry}  />
                <Stack.Screen name='SearchCity' component={SearchCity}  />
                <Stack.Screen name='CityMap' component={CityMap}  />
                <Stack.Screen name='DrawMap' component={DrawMap}  />
            </Stack.Navigator>
        </>
       
      
    )
} 