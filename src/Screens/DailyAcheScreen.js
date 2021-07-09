import {
    Divider,
    DrawerItem,
    Layout, Text,
} from "@ui-kitten/components";
import React from "react";
import DateSelectorComponent from "../Components/HomeComponents/DateSelectorComponent";
import { AcheSlider } from "../Components/HomeComponents/AcheSlider";
import IntensitySlider from "../Components/HomeComponents/IntensitySlider";
import { ScrollView } from "react-native";

const DailyAcheScreen = () => (

    <Layout style={{ flex: 1 }}>
        <ScrollView>
            <AcheSlider />
            <Divider style={{marginTop:"-5%", marginBottom:"5%", width:"90%", alignSelf:"center"}}/>
            <IntensitySlider />
            <Divider style={{marginTop:"6%", marginBottom:"5%", width:"90%", alignSelf:"center"}}/>
            <DateSelectorComponent />
            <Divider style={{marginTop:"6%", marginBottom:"5%", width:"90%", alignSelf:"center"}}/>
        </ScrollView>
    </Layout>

);

export default DailyAcheScreen;
