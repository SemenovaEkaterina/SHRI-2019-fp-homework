import React from "react";
import styles from './styles.module.css';

export default (Base) => props => {
    const {counter} = props;
    return (
        <div className={styles.wrapper}>
            <div className={styles.counter}>{counter}</div>
            <Base {...props} />
        </div>
    );
}
