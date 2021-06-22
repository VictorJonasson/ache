import React from 'react';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import { AppNavigator } from "../Navigation/BottomTabsNavigation";
export const HomeScreen = () => {

    const [selectedIndex, setSelectedIndex] = React.useState(0);

    return (
        <AppNavigator></AppNavigator>

    );
};
