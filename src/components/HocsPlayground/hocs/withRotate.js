import React from "react";
import styles from './styles.module.css';

export default (Base) => props => {
    const {counter} = props;
    return (
        <div className={styles.wrapper} style={{transform: `rotate(-${30 * counter}deg)`}}>
            <Base {...props} />
        </div>
    );
}

