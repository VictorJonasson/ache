import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomNavigation, BottomNavigationTab} from "@ui-kitten/components";
import DailyAcheScreen from "../Screens/DailyAcheScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import CalendarScreen from "../Screens/CalendarScreen";
import {BottomTabCalendarIcon,BottomTabAcheIcon,BottomTabUserIcon } from "../Components/IconHelper/IconProvider";

const {
    Navigator,
    Screen,
} = createBottomTabNavigator();

const BottomTabBar = ({
    navigation,
    state,
}) => (
    <BottomNavigation
        selectedIndex={state.index}
        onSelect={index => navigation.navigate(state.routeNames[index])}>
        <BottomNavigationTab title="" icon={BottomTabAcheIcon} />
        <BottomNavigationTab title="" icon={BottomTabUserIcon} />
        <BottomNavigationTab title="" icon={BottomTabCalendarIcon} />
    </BottomNavigation>
);

const TabNavigator = () => (
    <Navigator tabBar={props => <BottomTabBar {...props} />}>
        <Screen name="DailyAcheScreen" component={DailyAcheScreen} />
        <Screen name="ProfileScreen" component={ProfileScreen} />
        <Screen name="CalendarScreen" component={CalendarScreen} />
    </Navigator>
);

export const BottomTabNavigator = () => (
    <TabNavigator />
);
