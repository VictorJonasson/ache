import {
    Layout, useTheme,
} from "@ui-kitten/components";
import React, { useState } from "react";
import DatePicker from "react-native-date-picker";


const DateSelectorComponent = (props) => {
    const [date, setDate] = useState(new Date())
        return (
            <Layout style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}>
                <DatePicker
                    date={date}
                    onDateChange={setDate}
                    fadeToColor={"#222B44"}
                />
            </Layout>
        );
    };

export default DateSelectorComponent;
