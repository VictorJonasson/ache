import React from "react";
import { CheckBox } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

export const MigraineSymptomsComponent = () => {

    const [checked, setChecked] = React.useState(false);

    return (
        <>
            <CheckBox
                style={styles.CheckBox}
                checked={checked}
                onChange={nextChecked => setChecked(nextChecked)}
                status='primary'
            >
                {`Checked: ${checked}`}

            </CheckBox>
            <CheckBox
                style={styles.CheckBox}
                checked={checked}
                onChange={nextChecked => setChecked(nextChecked)}
                status='primary'
            >
                {`Checked: ${checked}`}
            </CheckBox>
            <CheckBox
                style={styles.CheckBox}
                checked={checked}
                onChange={nextChecked => setChecked(nextChecked)}
                status='primary'
            >
                {`Checked: ${checked}`}
            </CheckBox>
            <CheckBox
                style={styles.CheckBox}
                checked={checked}
                onChange={nextChecked => setChecked(nextChecked)}
                status='primary'
            >
                {`Checked: ${checked}`}
            </CheckBox>
        </>
    );
};

const styles = StyleSheet.create({
    CheckBox: {
        margin:10
    },
});
