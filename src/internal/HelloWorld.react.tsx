
import React from "react";

export type InternalHelloWorldProps = {
    name: string
};

export default function InternalHelloWorld({
    name
}: InternalHelloWorldProps): React.ReactElement {
    return (
        <div>
            Hello {name}!
        </div>
    );
}


