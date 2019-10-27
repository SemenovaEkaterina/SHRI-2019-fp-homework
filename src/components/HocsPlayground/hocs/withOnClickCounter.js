import {withHandlers} from 'recompose';
import React from "react";

export default withHandlers({
    onClick: ({setCounter, counter, setOuterColor, setInnerColor}) => () => {
        const color = counter % 2 ? 'gray' : 'green';
        setOuterColor(color);
        setInnerColor(color);
        setCounter(counter + 1);
    },
});
