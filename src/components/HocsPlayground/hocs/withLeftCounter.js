import React from "react";

export default (Base) => ({children, ...props}) => {
    const {counter} = props;
    return <Base {...props}>{counter} {children}</Base>;
}
