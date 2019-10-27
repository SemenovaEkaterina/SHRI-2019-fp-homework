/**
 * Необходимо имплементировать компонент и его логику путем композиции хоков и stateless компонента BaseButton
 */
import {compose} from 'recompose';
import BaseButton from './BaseButton';
import withLargeSize from "../hocs/withLargeSize";
import withPrimaryColor from "../hocs/withPrimaryColor";
import withOnClickSpin from "../hocs/withOnClickSpin";
import withRotate from "../hocs/withRotate";
import withCounter from "../hocs/withCounter";


export default compose(
    withLargeSize,
    withPrimaryColor,
    withCounter(0),
    withRotate,
    withOnClickSpin,
)(BaseButton)
