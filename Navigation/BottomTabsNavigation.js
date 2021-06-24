import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomNavigation, BottomNavigationTab, Layout, Text, Icon } from "@ui-kitten/components";
import DailyAcheScreen from "../Screens/DailyAcheScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import CalendarScreen from "../Screens/CalendarScreen";

const {
    Navigator,
    Screen,
} = createBottomTabNavigator();

export const acheIcon = (props) => (
    <Icon style={{
        width: 22,
        height: 22,
        color: "rgba(77, 186, 249, 0.4)",
    }} name="thumbs-down" pack="feather" />
);

export const userIcon = (props) => (
    <Icon style={{
        width: 22,
        height: 22,
        color: "rgba(77, 186, 249, 0.4)",
    }} name="user" pack="feather" />
);

export const calendarIcon = (props) => (
    <Icon style={{
        width: 22,
        height: 22,
        color: "rgba(77, 186, 249, 0.4)",
    }} name="calendar" pack="feather" />
);

const BottomTabBar = ({
    navigation,
    state,
}) => (
    <BottomNavigation
        selectedIndex={state.index}
        onSelect={index => navigation.navigate(state.routeNames[index])}>
        <BottomNavigationTab title="" icon={acheIcon} />
        <BottomNavigationTab title="" icon={userIcon} />
        <BottomNavigationTab title="" icon={calendarIcon} />
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
