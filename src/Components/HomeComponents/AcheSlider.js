import React, { useEffect } from "react";
import { Image, StyleSheet } from "react-native";
import { Layout, Text, ViewPager,useTheme } from "@ui-kitten/components";
import anxiety from "../../Assets/Images/Aches/anxiety1.png";
import backPain from "../../Assets/Images/Aches/backPain1.png";
import migraine from "../../Assets/Images/Aches/migraine4.png";
import headache from "../../Assets/Images/Aches/headache1.png";
import dizziness from "../../Assets/Images/Aches/dizziness2.png";
import Slider from "@react-native-community/slider";


export const AcheSlider = () => {

    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [selectedAche, setSelectedAche] = React.useState(0);
    const [sliderValue, setSliderValue] = React.useState(0);
    const theme = useTheme();

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
                    style={styles.acheSlideIcon}
                    level="2">
                    <Image
                        style={styles.acheIcon}
                        source={migraine}
                    />
                </Layout>
                <Layout
                    style={styles.acheSlideIcon}
                    level="2">
                    <Image
                        style={styles.acheIcon}
                        source={headache}
                    />
                </Layout>
                <Layout
                    style={styles.acheSlideIcon}
                    level="2">
                    <Image
                        style={styles.acheIcon}
                        source={dizziness}
                    />
                </Layout>
                <Layout
                    style={styles.acheSlideIcon}
                    level="2">
                    <Image
                        style={styles.acheIcon}
                        source={anxiety}
                    />
                </Layout>
                <Layout
                    style={styles.acheSlideIcon}
                    level="2">
                    <Image
                        style={styles.acheIcon}
                        source={backPain}
                    />
                </Layout>
            </ViewPager>
            <ViewPager
                style={{padding:1,marginTop:0,}}
                selectedIndex={selectedIndex}
                onSelect={
                    index => setSelectedIndex(index)
                }
            >
                <Layout
                    style={styles.acheSlideText}
                    level="1">
                    <Text category={"h2"} appearance="hint" status="primary"
                          style={styles.acheText}>{selectedAche}
                    </Text>
                </Layout>
                <Layout
                    style={styles.acheSlideText}
                    level="1">
                    <Text category={"h2"} appearance="hint" status="primary"
                          style={styles.acheText}>{selectedAche}
                    </Text>
                </Layout>
                <Layout
                    style={styles.acheSlideText}
                    level="1">
                    <Text category={"h2"} appearance="hint" status="primary"
                          style={styles.acheText}>{selectedAche}
                    </Text>
                </Layout>
                <Layout
                    style={styles.acheSlideText}
                    level="1">
                    <Text category={"h2"} appearance="hint" status="primary"
                          style={styles.acheText}>{selectedAche}
                    </Text>
                </Layout>
                <Layout
                    style={styles.acheSlideText}
                    level="1">
                    <Text category={"h2"} appearance="hint" status="primary"
                          style={styles.acheText}>{selectedAche}
                    </Text>
                </Layout>
            </ViewPager>

            <Text status="primary" category={"h6"} appearance={"default"} style={{
                alignSelf: "center",
                fontFamily: "AdventPro-Regular",
            }}>Intensitet</Text>
            <Slider
                maximumValue={10}
                minimumValue={0}
                minimumTrackTintColor={theme['color-primary-600']}
                maximumTrackTintColor={theme['color-primary-500']}
                step={1}
                value={sliderValue}
                onValueChange={(sliderValue) => setSliderValue(sliderValue)}
            />
            <Text status="primary" category={"h6"} appearance={"default"} style={{
                alignSelf: "center",
                fontFamily: "AdventPro-Regular",
            }}>{sliderValue}</Text>
        </>
    );
};

const styles = StyleSheet.create({
    acheSlideIcon: {
        elevation: 5,
        marginTop: "13%",
        height: 130,
        alignItems: "center",
        justifyContent: "center",
    },
    acheSlideText: {
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
        elevation: 5,
    },
});
