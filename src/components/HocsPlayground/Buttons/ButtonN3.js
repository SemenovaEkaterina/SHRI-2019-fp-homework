/**
 * Необходимо имплементировать компонент и его логику путем композиции хоков и stateless компонента BaseButton
 */
import {compose} from 'recompose';
import BaseButton from './BaseButton';
import withSmallSize from "../hocs/withSmallSize";
import withOnClickCounter from "../hocs/withOnClickCounter";
import withPrimaryColor from "../hocs/withPrimaryColor";
import withLeftCounter from "../hocs/withLeftCounter";
import withCounter from "../hocs/withCounter";


export default compose(
    withSmallSize,
    withPrimaryColor,
    withCounter(0),
    withOnClickCounter,
    withLeftCounter
)(BaseButton)
