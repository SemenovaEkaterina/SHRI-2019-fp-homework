/**
 * Необходимо имплементировать компонент и его логику путем композиции хоков и stateless компонента BaseButton
 */
import {compose} from 'recompose';
import BaseButton from './BaseButton';
import withSmallSize from "../hocs/withSmallSize";
import withDefaultColor from "../hocs/withDefaultColor";
import withOnClickDownCounter from "../hocs/withOnClickDownCounter";
import withTopCounter from "../hocs/withTopCounter";
import withCounter from "../hocs/withCounter";
import {MAX_DOWN_COUNTER} from "../../../constants";


export default compose(
    withSmallSize,
    withDefaultColor,
    withCounter(MAX_DOWN_COUNTER),
    withOnClickDownCounter,
    withTopCounter,
)(BaseButton)
