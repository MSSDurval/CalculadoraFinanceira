 import React from 'react'
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/home';
import SimpleCalculatorScreen from '../screens/simple_calculator';
import ComposteCalculatorScreen from '../screens/composte_calculator';
import HistoryScreen from '../screens/history';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return(
    <Tab.Navigator initialRouteName='Inicio'>
        <Tab.Screen name='Inicio' component={HomeScreen} />
        <Tab.Screen name='Juros Simples' component={SimpleCalculatorScreen} />
        <Tab.Screen name='Juros Compostos' component={ComposteCalculatorScreen} />
        <Tab.Screen name='Histórico' component={HistoryScreen} />
    </Tab.Navigator>
        
    );
}