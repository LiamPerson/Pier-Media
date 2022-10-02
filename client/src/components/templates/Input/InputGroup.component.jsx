import {InputIcon, InputWrapper, Input} from "./InputGroup.style";

const InputGroup = ({ icon, placeholder, width }) => {
    return (<InputWrapper width={width}>
        {icon && <InputIcon icon={icon}/>}
        <Input type="text" placeholder={placeholder}/>
    </InputWrapper>)
}

export default InputGroup;