import React, { useEffect } from "react";
import { Image, StyleSheet} from "react-native";
import { Layout, Text, ViewPager } from "@ui-kitten/components";
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
        elevation: 5,
    },
    acheText: {
        fontFamily: "AdventPro-Regular",
        fontSize: 65,
        alignSelf: "center",
        marginTop: 20,
        elevation: 5,
    },
});
