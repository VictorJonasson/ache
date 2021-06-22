import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import {
    Button,
    Input,
    Layout,
    Text,
    Icon,
} from "@ui-kitten/components";
import LogoProviderComponent from "../Components/LogoProviderComponent";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import LoginFormComponent from "../Components/LoginComponents/LoginFormComponent";
import SignupFormComponent from "../Components/LoginComponents/SignupFormComponent";

const LandingScreen = () => {
    const [accountExist, setAccountExist] = useState(false);
    return (
        <Layout style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }}>


            {!accountExist ?
                (<><LoginFormComponent />
                <TouchableOpacity
                    style={styles.signUp}
                    onPress={() => setAccountExist(true)}
                >
                    <Text category="s2">Inget konto?</Text>
                </TouchableOpacity></>
                )
                : (<><SignupFormComponent />
                <TouchableOpacity
                style={styles.signUp}
                onPress={() => setAccountExist(true)}
                >
                <Text category="s2"></Text>
                </TouchableOpacity></>
                )
            }

        </Layout>
    );
};

const styles = StyleSheet.create({
    inputEmail: {
        width: "80%",
        marginTop: "30%",
    },
    signUp: {
        marginTop: "20%",
    },
    inputPassword: {
        width: "80%",
        marginTop: 20,
    },
    loginButton: {
        marginTop: "20%",
    },
});

export default LandingScreen;
