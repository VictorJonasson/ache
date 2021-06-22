import {
    Layout, Text,
} from "@ui-kitten/components";
import React, { useState } from "react";
import DatePicker from "react-native-date-picker";



const DateSelectorScreen = () => {
    const [date, setDate] = useState(new Date());
    return (
        <Layout style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }}>
            <Text>Date</Text>
            <DatePicker
                date={date}
                onDateChange={setDate}
            />
        </Layout>
    );
};

export default DateSelectorScreen;
