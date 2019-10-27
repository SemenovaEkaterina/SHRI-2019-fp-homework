import {withState} from "recompose";

export default (initial) =>
    withState('counter', 'setCounter', initial);
