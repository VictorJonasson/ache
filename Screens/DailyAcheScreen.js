import {
    Button,
    Layout, Text,
} from "@ui-kitten/components";
import React from "react";
import DateSelectorComponent from "../Components/HomeComponents/DateSelectorComponent";
import UserPool from "../Cognito/UserPool";

const DailyAcheScreen = () => (
    <Layout style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }}>
        <DateSelectorComponent />
    </Layout>
);

export default DailyAcheScreen;
