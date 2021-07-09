import { useEffect, useState } from "react";

const useGlobalState = () => {
    const [state, setState] = useState({
        value: "",
        startingTime: JSON.stringify("" + new Date()),
        endingTime:JSON.stringify("" ),
        intensityLevel:0,
        test:"test",
        list: [],
    });

    useEffect(() => {
        console.log("Intensitet " + state.intensityLevel)
        console.log("StartTid " + state.startingTime)
        console.log("Sluttid " + state.endingTime)
    }, [state]);

    const actions = (action) => {
        const {
            type,
            payload,
        } = action;
        switch (type) {
        case "setState":
            return setState(payload);
        default:
            return state;
        }
    };
    return {
        state,
        actions,
    };
};
export default useGlobalState;
