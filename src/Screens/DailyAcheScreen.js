import {
    Layout,
} from "@ui-kitten/components";
import React from "react";
import DateSelectorComponent from "../Components/HomeComponents/DateSelectorComponent";
import { AcheSlider } from "../Components/HomeComponents/AcheSlider";

const DailyAcheScreen = () => (
    <Layout style={{
        flex: 1,
    }}>
        <AcheSlider />
        <Layout style={{
            flex: 0,
            height:250,
            marginTop:50,
            justifyContent: "center",
            alignItems: "center",
        }}>
            <DateSelectorComponent />
        </Layout>
    </Layout>
);

export default DailyAcheScreen;
