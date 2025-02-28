
import React from "react";

import InternalHelloWorld, { InternalHelloWorldProps } from "internal/HelloWorld.react";


type Props = {} & InternalHelloWorldProps;

export default function HelloWorld({
    name
}: Props): React.ReactElement {
    return (
        <InternalHelloWorld name={name} />
    );
}

