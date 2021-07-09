import {
    Divider,
    DrawerItem,
    Layout, Text,
} from "@ui-kitten/components";
import React from "react";
import DateSelectorComponent from "../Components/HomeComponents/DateSelectorComponent";
import { AcheSliderComponent } from "../Components/HomeComponents/AcheSliderComponent";
import IntensitySliderComponent from "../Components/HomeComponents/IntensitySliderComponent";
import { ScrollView } from "react-native";
import { MigraineSymptomsComponent } from "../Components/HomeComponents/MigraineSymptomsComponent";

const DailyAcheScreen = () => (

    <Layout style={{ flex: 1 }}>
        <ScrollView>
            <AcheSliderComponent />
            <Divider style={{
                marginTop: "-5%",
                marginBottom: "5%",
                width: "90%",
                alignSelf: "center",
            }} />
            <MigraineSymptomsComponent />
            <Divider style={{
                marginTop: "5%",
                marginBottom: "5%",
                width: "90%",
                alignSelf: "center",
            }} />
            <IntensitySliderComponent />
            <Divider style={{
                marginTop: "6%",
                marginBottom: "5%",
                width: "90%",
                alignSelf: "center",
            }} />
            <DateSelectorComponent />
            <Divider style={{
                marginTop: "6%",
                marginBottom: "5%",
                width: "90%",
                alignSelf: "center",
            }} />
        </ScrollView>
    </Layout>

);

export default DailyAcheScreen;
