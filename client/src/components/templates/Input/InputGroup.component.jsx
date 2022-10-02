import {InputIcon, InputWrapper, Input} from "./InputGroup.style";

const InputGroup = ({ icon, placeholder }) => {
    return (<InputWrapper>
        {icon && <InputIcon icon={icon}/>}
        <Input type="text" placeholder={placeholder}/>
    </InputWrapper>)
}

export default InputGroup;