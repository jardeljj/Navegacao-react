import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TelaA from "../views/TelaA";
import TelaB from "../views/TelaB";
import TelaC from "../views/TelaC";

const Tab = createBottomTabNavigator()

export default props => (
    <Tab.Navigator

        initialRouteName="TelaB"
        screenOptions={({ route }) => ({
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {},
            tabBarActiveTintColor: 'red',     // Cor do ícone e texto quando ativo
            tabBarInactiveTintColor: 'blue',  // Cor do ícone e texto quando inativo
            tabBarLabelStyle: { fontSize: 15 },
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                switch (route.name) {
                    case 'TelaA':
                        iconName = focused
                            ? 'battery-full-outline'
                            : 'battery-dead-outline';
                        break;
                    case 'TelaB':
                        iconName = focused
                            ? 'contract-outline'
                            : 'contrast-outline';
                        break;
                    case 'TelaC':
                        iconName = focused ? 'ellipsis-horizontal-outline' : 'ellipsis-vertical-outline';
                        break;
                }
                return <Ionicons name={iconName} size={size} color={color} />;
            },
        })}
    >

        <Tab.Screen name="TelaA" component={TelaA} options={{ title: 'Inicial' }} />
        <Tab.Screen name="TelaB" component={TelaB} options={{ title: 'Meio' }} />
        <Tab.Screen name="TelaC" component={TelaC} options={{ title: 'Final' }} />
    </Tab.Navigator>
)