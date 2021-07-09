import {
    Layout, Text, useTheme,
    ViewPager,
} from "@ui-kitten/components";
import React, { useState, useContext, useEffect } from "react";
import DatePicker from "react-native-date-picker";
import Context from "../../store/context";
import Dots from "react-native-dots-pagination";
import { IconLeft, IconRight } from "../IconHelper/IconProvider";
import { TouchableOpacity } from "react-native";

const DateSelectorComponent = () => {
    const [date, setDate] = useState(new Date());
    const [maxDate, setMaxDate] = useState(new Date());
    const theme = useTheme();

    const {
        type,
        actions,
    } = useContext(Context);
    const state = useContext(Context);

    const [selectedIndex, setSelectedIndex] = React.useState(0);

    return (
        <>
            <ViewPager selectedIndex={selectedIndex}
                       onSelect={
                           index => setSelectedIndex(index)
                       }
                       style={{ marginTop: "0%" }}
            >
                <>
                    <Text status="primary" category={"h5"} appearance={"default"} style={{
                        alignSelf: "center",
                        fontFamily: "AdventPro-Regular",
                        marginBottom: "5%",
                        marginTop: "10%",
                    }}>Start-tid</Text>
                    <Layout style={{
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                    }}>
                        <DatePicker
                            style={{
                                alignSelf: "center",
                                alignItems: "center",
                                justifyContent: "center",
                                width: 300,
                            }}
                            date={date}
                            onDateChange={date => {
                                actions({
                                    type: "setState",
                                    payload: {
                                        ...state,
                                        startingTime: JSON.stringify("" + date),
                                    },
                                });
                            }}
                            maximumDate={maxDate}
                            timeZoneOffsetInMinutes={120}
                            fadeToColor={"#222B44"}
                        />
                        <TouchableOpacity
                            onPress={() => setSelectedIndex(1)}
                        >
                            <IconRight />
                        </TouchableOpacity>
                    </Layout>
                </>
                <>
                    <Text status="primary" category={"h5"} appearance={"default"} style={{
                        alignSelf: "center",
                        fontFamily: "AdventPro-Regular",
                        marginBottom: "5%",
                        marginTop: "10%",
                    }}>Slut-tid</Text>
                    <Layout style={{
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                    }}>
                        <TouchableOpacity
                            onPress={() => setSelectedIndex(0)}
                        >
                            <IconLeft />
                        </TouchableOpacity>
                        <DatePicker
                            style={{
                                alignSelf: "center",
                                alignItems: "flex-end",
                                justifyContent: "flex-end",
                                width: 300,
                            }}
                            date={date}
                            onDateChange={date => {
                                actions({
                                    type: "setState",
                                    payload: {
                                        ...state,
                                        endingTime: JSON.stringify("" + date),
                                    },
                                });
                            }}
                            maximumDate={maxDate}
                            timeZoneOffsetInMinutes={120}
                            fadeToColor={"#222B44"}
                        />
                    </Layout>
                </>
            </ViewPager>
            <Layout style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
            }}>
                <Dots length={2}
                      active={selectedIndex}
                      activeDotWidth={10} passiveDotWidth={10}
                      passiveDotHeight={10} activeDotHeight={10}
                      activeColor={theme["color-primary-600"]}
                      passiveColor={theme["color-primary-200"]}
                      paddingVertical={20}
                      style={{
                          alignSelf: "flex-end",
                          marginTop: 10,
                          justifySelf: "center",
                      }}
                />
            </Layout>
        </>
    );
};

export default DateSelectorComponent;
