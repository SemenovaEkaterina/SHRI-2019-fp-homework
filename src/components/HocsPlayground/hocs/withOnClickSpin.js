import {withHandlers} from "recompose";

const FULL_ROTATE_COUNTER = 12;
const COLORS = ['red', 'yellow', 'blue', 'green', 'black', 'orange', 'magenta'];
const getRandomColor = () => {
        return COLORS[Math.round(Math.random() * (COLORS.length - 1))];
};

export default withHandlers({
        onClick: ({setCounter, counter, setOuterColor, setInnerColor}) => () => {
                if (counter === FULL_ROTATE_COUNTER - 1) {
                        const color = getRandomColor();

                        setInnerColor(color);
                        setOuterColor(color);
                        setCounter(0);
                } else {
                        setCounter(counter + 1);
                }
        },
});


