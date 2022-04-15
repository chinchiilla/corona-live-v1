import React from "react";
import styled from "styled-components";
const Style = styled.div`
    width: 20px;
    height: 20px;
    margin-right: 8px;
    border-radius: 14px;
    background: rgba(0, 0, 0, 0.2);
    position: relative;
    cursor: pointer;
    div {
        width: 1px;
        height: 14px;
        background: white;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
    }
    div:first-child {
        transform: translate(-50%, -50%) rotate(-45deg);
    }
    div:last-child {
    }
`;

const CloseButton = ({ onClick }) => {
    return (
        <Style onClick={onClick} black={false}>
            <div></div>
            <div></div>
        </Style>
    );
};

export default CloseButton;
