import React from "react";
import { Button } from "../../templates/Button/Button.style";
import { HelloWorldContainer } from "./HelloWorld.style";

const HelloWorld = () => (
    <HelloWorldContainer>
        <p>Hello, world! <Button color="">Sample Button</Button></p>
    </HelloWorldContainer>
)

export default HelloWorld;