import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import one from "../Assets/Images/Logotype/bodo.png";
import two from "../Assets/Images/Logotype/advent.png";
import three from "../Assets/Images/Logotype/mont.png";

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
        marginRight: 10,
        marginTop: "20%",
        width: 340,
        height: 200,
        resizeMode: "contain",
    },
});

export default LogoProviderComponent;
