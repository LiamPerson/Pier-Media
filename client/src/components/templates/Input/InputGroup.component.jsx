import { Icon } from "../Icon/Icon.style";
import { InputWrapper, Input } from "./InputGroup.style";

const InputGroup = ({ icon, placeholder }) => {
    return (<InputWrapper>
        {icon && <Icon icon={icon}/>}
        <Input type="text" placeholder={placeholder}/>
    </InputWrapper>)
}

export default InputGroup;