import React, { useEffect } from "react";
import { Image, StyleSheet, Switch, TouchableOpacity } from "react-native";
import { Divider, Layout, Text, ViewPager } from "@ui-kitten/components";
import anxiety from "../../Assets/Images/Aches/anxiety1.png";
import backPain from "../../Assets/Images/Aches/backPain1.png";
import migraine from "../../Assets/Images/Aches/migraine4.png";
import headache from "../../Assets/Images/Aches/headache1.png";
import dizziness from "../../Assets/Images/Aches/dizziness2.png";

export const AcheSlider = () => {

    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [selectedAche, setSelectedAche] = React.useState(0);

    useEffect(() => {
        switch (selectedIndex) {
        case 0:
            setSelectedAche("Migrän");
            break;
        case 1:
            setSelectedAche("Huvudvärk");
            break;
        case 2:
            setSelectedAche("Yrsel");
            break;
        case 3:
            setSelectedAche("Ångest");
            break;
        case 4:
            setSelectedAche("Ryggont");
            break;
        default:
            console.log("NUMBER NOT FOUND");
        }
    }, [selectedIndex]);

    return (
        <>
            <ViewPager
                selectedIndex={selectedIndex}
                onSelect={
                    index => setSelectedIndex(index)
                }
            >
                <Layout
                    style={styles.tab}
                    level="2">
                    <TouchableOpacity
                        onPress={() => console.log("Migrän")}
                    >
                        <Image
                            style={styles.acheIcon}
                            source={migraine}
                        />
                    </TouchableOpacity>
                    {/*<Text category="s2" appearance="hint" status="primary"*/}
                    {/*      style={{ marginTop: 1 }}>Migrän</Text>*/}
                </Layout>
                <Layout
                    style={styles.tab}
                    level="2">
                    <TouchableOpacity
                        onPress={() => console.log("Huvudvärk")}
                    >
                        <Image
                            style={styles.acheIcon}
                            source={headache}
                        />
                    </TouchableOpacity>
                    {/*<Text category="s2" appearance="hint" status="primary"*/}
                    {/*      style={{ marginTop: 1 }}>Huvudvärk</Text>*/}
                </Layout>
                <Layout
                    style={styles.tab}
                    level="2">
                    <TouchableOpacity
                        onPress={() => console.log("Yrsel")}
                    >
                        <Image
                            style={styles.acheIcon}
                            source={dizziness}
                        />
                    </TouchableOpacity>
                    {/*<Text category="s2" appearance="hint" status="primary"*/}
                    {/*      style={{ marginTop: 1 }}>Yrsel</Text>*/}
                </Layout>
                <Layout
                    style={styles.tab}
                    level="2">
                    <TouchableOpacity
                        onPress={() => console.log("Ångest")}
                    >
                        <Image
                            style={styles.acheIcon}
                            source={anxiety}
                        />
                    </TouchableOpacity>
                    {/*<Text category="s2" appearance="hint" status="primary"*/}
                    {/*      style={{ marginTop: 1 }}>Ångest</Text>*/}
                </Layout>
                <Layout
                    style={styles.tab}
                    level="2">
                    <TouchableOpacity
                        onPress={() => console.log("Ryggont")}
                    >
                        <Image
                            style={styles.acheIcon}
                            source={backPain}
                        />
                    </TouchableOpacity>
                    {/*<Text category="s2" appearance="hint" status="primary"*/}
                    {/*      style={{ marginTop: 1 }}>Ryggont</Text>*/}
                </Layout>
            </ViewPager>
            <Text category={"h2"} appearance="hint" status="primary"
                  style={styles.acheText}>{selectedAche}</Text>
        </>
    );
};

const styles = StyleSheet.create({
    tab: {
        marginTop: "13%",
        height: 130,
        alignItems: "center",
        justifyContent: "center",
    },
    acheIcon: {
        width: 110,
        height: 110,
    },
    acheText: {
        fontFamily: "AdventPro-Regular",
        fontSize: 65,
        alignSelf: "center",
        marginTop: 20,

    },
});
