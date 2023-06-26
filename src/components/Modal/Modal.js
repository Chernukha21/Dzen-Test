import React from "react";
import {useDispatch} from "react-redux";
import {Wrapper} from "./Modal.style";

function Modal(props) {
    const dispatch = useDispatch();
    return (
        <Wrapper>
            {props.children}
        </Wrapper>
    );
}

export default Modal;