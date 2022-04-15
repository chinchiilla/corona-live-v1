import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
const Style = styled.div`
    position: fixed;
    z-index: 1000000;
    background: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    transform: translateY(0);
    & > div:nth-child(1) {
        animation: spin 2s infinite;
        border: 6px solid rgba(255, 255, 255, 1);
        border-right: 6px solid transparent;
    }
    & > div:nth-child(3) {
        animation: spin 2s 1s infinite;
        border: 6px solid rgba(255, 255, 255, 0.3);
    }
    & > div:nth-child(2) {
        animation: spinback 2s 1s infinite;

        border: 6px solid rgba(255, 255, 255, 1);
        border-right: 6px solid transparent;
        border-left: 6px solid transparent;
    }
    & > div {
        background: transparent;
        padding: 0px !important;
        width: 40px;
        height: 40px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 20px;
        border-top: 6px solid transparent !important;
    }

    @keyframes spin {
        0% {
            transform: translate(-50%, -50%) rotate(0deg);
        }
        100% {
            transform: translate(-50%, -50%) rotate(720deg);
        }
    }

    @keyframes spinback {
        0% {
            transform: translate(-50%, -50%) rotate(0deg);
        }
        100% {
            transform: translate(-50%, -50%) rotate(360deg);
        }
    }
`;
const LoadingContainer = () => {
    return (
        <Style>
            <div></div>
            <div></div>
            <div></div>
        </Style>
    );
};

LoadingContainer.propTypes = {};

export default LoadingContainer;
