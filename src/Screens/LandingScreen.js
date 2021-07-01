import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import {
    Layout,
    Text,
} from "@ui-kitten/components";
import LogoProviderComponent from "../Components/LogoProviderComponent";
import LoginFormComponent from "../Components/LoginComponents/LoginFormComponent";
import SignupFormComponent from "../Components/LoginComponents/SignupFormComponent";
import { Account } from "../Cognito/Accounts";

const LandingScreen = () => {
    const [accountExist, setAccountExist] = useState(false);
    return (
        <Layout style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }}>
            {!accountExist ?
                (<Account>
                        <LogoProviderComponent />
                        <LoginFormComponent />
                        <TouchableOpacity
                            style={styles.signUp}
                            onPress={() => setAccountExist(true)}
                        >
                            <Text category="s2">Inget konto?</Text>
                        </TouchableOpacity>
                    </Account>
                )
                : (<Account>
                        <LogoProviderComponent />
                        <SignupFormComponent />
                        <TouchableOpacity
                            style={styles.signUp}
                            onPress={() => setAccountExist(false)}
                        >
                            <Text category="s2">Logga in</Text>
                        </TouchableOpacity>
                    </Account>
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
    bypass: {
        marginTop: "10%",
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
