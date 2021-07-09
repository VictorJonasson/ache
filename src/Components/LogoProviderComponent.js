import React, { useState } from "react";
import {
    Dimensions,
    Image,
    StyleSheet,
    TouchableHighlight,
    TouchableOpacityComponent,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import one from "../Assets/Images/Logotype/bodo.png";
import two from "../Assets/Images/Logotype/advent.png";
import three from "../Assets/Images/Logotype/mont.png";
const { width, height } = Dimensions.get('window')

const LogoProviderComponent = () => {
    const [logo, setLogo] = useState([]);
    const logos = [one, two, three];



    useFocusEffect(
        React.useCallback(() => {
            setLogo(logos[Math.floor(Math.random() * logos.length)]);
        }, [logo]),
    );
    return (
        <Image style={styles.logo} source={logo} />
    );
};
const styles = StyleSheet.create({
    logo: {
        alignSelf: "center",
        marginRight: 0,
        marginTop: "10%",
        width: width * 0.8,
        height: height * 0.3,
        resizeMode: "contain",
    },
});

export default LogoProviderComponent;
