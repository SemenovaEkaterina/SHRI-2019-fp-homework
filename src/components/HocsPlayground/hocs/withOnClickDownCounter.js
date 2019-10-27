import {withHandlers} from 'recompose';
import {MAX_DOWN_COUNTER} from "../../../constants";

export default withHandlers({
    onClick: ({setCounter, counter, setOuterColor, setInnerColor}) => () => {

        if (counter === 1) {
            const color = 'orange';
            setOuterColor(color);
            setInnerColor(color);
        }
        setCounter(counter > 0 ? counter - 1 : MAX_DOWN_COUNTER);
    },
});
