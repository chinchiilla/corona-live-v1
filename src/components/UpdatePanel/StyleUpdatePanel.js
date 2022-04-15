import styled, { keyframes } from "styled-components";
import { findByLabelText } from "@testing-library/react";

const keyFrameExampleOne = keyframes`
  0% {
    transform:translate(-50.-50%)  scale(1);
    opacity: 0.3;
  }
  
  70% {
    transform:translate(-50.-50%)  scale(0.5);
    opacity: 0;


  }
  100% {
    transform: translate(-50.-50%) scale(1);
    opacity: 0.3;


  }
`;

const keyFrameNew = keyframes`
  0% {
    background: rgb(118, 194, 255,0.3);
  }
  
 
  100% {
    background: rgba(255,255,255,1);



  }
`;

const Style = styled.div`
    @media (max-width: 768px) {
        .container {
            width: 100% !important;
            height: 100% !important;
        }
    }
    .live-container{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .gap{
        width: 10px;
        height: 100%;
    }
    .search-container{
        position: relative;
        .delete-icon{
            position: absolute;
            right: 30px;
            top: 50%;
            transform: translateY(-70%)
        }
        .search-icon{
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-60%)
        }
    }
    .desc{
        div{
            font-size: 10px;
            text-align: center;
            opacity: 0.8;
            &:first-child{
                font-weight: bold;
                margin-bottom: 10px;
                opacity: 1;
                font-size: 14px;
            }
        }
    }
    .stats{
        .container{
            top: 0px;
        }
        
        display: flex;
        flex-direction: row;
        flex: 1;
        align-items: center;
        justify-content: center;
        .stats-container{
            display: flex;
            flex-direction: row;
            flex: 1;
            align-items: center;
            justify-content: space-between;
            padding: 6px 0px;
            /* border: 1p */
            /* &>div:last-child{
                        border-right: 0px solid rgba(0,0,0,0.2);

                    } */
            &>div{
                display: flex;
                flex-direction: row;
                align-items: flex-end;
                &>div{
                    &.recovered{
                        span{
                            color: green;
                            font-weight: bold;
                            opacity: 0.8;
                            }
                        }
                        &.death{
                            span{
                                color: red;
                                font-weight: bold;
                                opacity: 0.8;
                            }
                        }
                        &.confirmed{
                            span{
                                color: black;
                                font-weight: bold;
                            }
                        }
                        &.last{
                        border-right: 0px solid rgba(0,0,0,0.2);

                        }
                        border-right: 1px solid rgba(0,0,0,0.2);
                        min-width: 40px;
                        padding: 4px;
                        font-size:8px;
                        padding: 0px 6px;
                        
                    }
                    &:last-child{
                        border-right: 0px solid rgba(0,0,0,0.2)!important;

                    }
                    span{
                        font-size: 14px;
                        opacity: 1;
                        color: black;
                        /* font-weight: bold; */
                    }
                }
            
        }
    }
    .display-time{
        span{
            font-size:10px;
        }
        font-size:12px;
        color:black;
    }
    /* display: ${(props) => (props.open ? "block" : "none")}; */
    /* display: none; */
    .popup{
            position: fixed;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            max-height: 90%;
            min-width: 300px;
            background: white;
            
            z-index:10001;
            display: flex;
            flex-direction: column;
            padding: 20px;
            border-radius: 10px;
            
            /* justify-content: space-evenly; */
    }
    .language-container {
            
            display: flex;
            flex-direction: row;
            
            flex-direction: row;
            justify-content: space-evenly;
            align-items: center;
            margin: 10px 0px;
            margin-top: 12px;
            .language {
                cursor: pointer;

                display: flex;
                flex-direction: column;
                border-radius: 10px;
                width: 60px;
                height: 60px;
                align-items: center;
                justify-content: center;
                border: 2px solid rgba(0, 0, 0, 0.1);
                /* background: rgba(0, 0, 0, 0.05); */
                &.selected {
                    border: 2px solid #4286f5;
                    background: rgba(66, 134, 245, 0.1);
                    .text {
                        color: #4286f5;
                    }
                }
                .icon {
                }
                .text {
                    font-weight: 900;
                    font-size: 10px;
                    color: rgba(0, 0, 0, 0.3);
                }
            }
        }
    .details {
        display: flex;
        flex-direction: row;
        /* min-height: 30px; */
        margin-top: 8px;
        text-align: center;
        justify-content: center;
        align-items: center;
        opacity: 0.7;
        padding: 10px 0px;
        /* border-top: 1px solid rgba(0, 0, 0, 0.2); */

        & > div:first-child {
            font-size: 12px;
            font-weight: bold;
            margin-right: 10px;
            a {
                font-weight: 400;
                color: inherit;
            }
        }
        & > div:nth-child(2) {
            font-size: 12px;
            font-size: 12px;
            font-weight: bold;
            margin-right: 10px;
            div {
                display: inline-flex;
                flex-direction: row;
                font-weight: 400;
            }
        }
    }
    .report-button {
        border-radius: 50px;
        padding: 4px 10px;
        border: 2px solid rgba(0, 0, 0, 0.8);
        position: absolute;
        right: 6px;

        top: 50%;
        transform: translateY(-50%);
        font-weight: 900;
        /* transform: translateY(-6px); */
        cursor: pointer;
    }
    .live-icon {
            width: 6px;
            height: 6px;
            /* opacity: 0.6; */
            border-radius: 10px;
                background: red;
            border: 1px solid red;
            display: flex;
            flex-direction: row;
            align-self: center;
            justify-content: center;
            position: relative;
            /* transform: translate(4px,-6px); */
            margin-right: 4px;
            div {
                /* display: none; */
                position: absolute;
                left: 50%;
                top: 50%;
                z-index: 100;
                transform: translate(-50%, -50%);
                width: 10px!important;
                height: 10px!important;
                opacity: 0.3;
                animation: ${keyFrameExampleOne} 2s ease-in-out infinite;
                border-radius: 10px;
                background: red;
            }
        }
    .message-title {
        text-align: center;
        margin-bottom: 4px;
        font-size: 10px;
        width:100%;
        /* background: red; */
        /* letter-spacing: 2px; */
        border-radius: 2px;
        padding: 2px 6px;
        display: flex;
        align-self: center;

        /* min-height: 40px; */
        justify-content: center;

        .live-text {
            margin-left: 6px;

            /* &:before {
                content: "";
                display: inline-block;
                width: 6px;
                height: 6px;
                border-radius: 10px;
                background: red;
                position: absolute;
                top: 50%;
                transform: translate(-7px, -50%);
            }
            &:after {
                content: "";
                display: inline-block;
                width: 10px;
                height: 10px;
                opacity: 0.6;
                border-radius: 10px;
                position: absolute;
                border: 1px solid red;
                top: 50%;
                transform: translate(-10px, -50%);
            } */
            color: white;
            color: black;
            font-weight: 900;
        }
    }
    .overlay {
        position: fixed;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: 1000;
        top: 0;
        background: rgba(0, 0, 0, 0.6);
    }
    .update,
    .news,
    .official,
    .report,
    .developer {
        border-radius: 50px;
        padding: 2px 8px;
        color: white;
        font-size: 10px !important;
        font-weight: bold;
        opacity: 0.8;
        margin-right: 4px;
    }
    .report {
        background: #2f902f;
    }
    .update {
        background: #7c7cff;
    }
    .news {
        background: #ff5454;
    }
    .official {
        background: black;
    }
    .developer {
        color: black;
        border: 1px solid black;
    }
    .title {
            /* min-height: 30px; */
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
                margin-bottom:8px;
                padding-bottom:4px;

            .logo {
                margin-right: 6px;
            }
            .text {
                /* border: 1px */
                font-size: 24px;
                text-align: center;
                display: flex;
                align-content: center;
                flex-direction: row;
                /* font-style: italic; */
                align-content: center;

                span:first-child {
                    text-transform: uppercase;
                    align-content: center;

                    font-weight: 900;
                    margin-right: 4px;
                }
                span:nth-child(2) {
                    font-style: italic;

                    color: red;
                    display: flex;
                    flex-direction: row;
                    
                    span {
                        border: 2px solid red;
                        font-size: 10px;
                        padding: 0px 4px;
                        border-radius: 5px;
                        display: flex;
                        font-weight: 900;
                        height: 17px;
                        text-transform: uppercase;
                    }
                }
            }
        }
    .container {
        position: absolute;
        width: 400px;
        max-height: 100%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background: white;
        z-index: 1000;
        padding: 20px;
        color: #2e3948;
        display: flex;
        flex-direction: column;
        .coronamap-live{
            height: 30px;
            border: 1px solid black;
            border-radius: 5px;
            margin-left: 10px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            background: black;
            padding: 2px 10px;
            opacity: 0.8;   
            div{
                font-size:12px;
                color: white;
                text-decoration: none;

                span{
                    font-weight: bold;
                    font-weight: white;
                }
            }
        }
        .header-title {
            text-align: center;
            /* width: 100%; */
            /* border-bottom: 1px solid rgba(0, 0, 0, 0.2); */
            /* margin-top: 8px; */
            /* padding-bottom: 4px; */
            font-size: 12px;
            letter-spacing: 2px;
            opacity: 0.8;
            /* border: 1px solid rgba(0, 0, 0, 0.3); */
            border-radius: 20px;
            color: white;
            color: black;
            /* background: rgba(0, 0, 0, 0.1); */
            font-weight: 400;
            opacity: 0.8;

            /* font-style: italic; */
            /* opacity: 0.7; */
            /* background: #2e3948; */
        }

       
        .messages-container{
            box-shadow: 0 0 20px #00000029;
            padding: 14px 14px;
            flex: 1;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            border-radius: 10px;
            input{
                width: 100%;
                min-height: 40px;
                margin-bottom: 10px;
                padding-left:10px;
                padding-right: 60px;
                border-radius: 5px;
                border: 1px solid rgba(0,0,0,0.2);
            }

        }
        .link{
            background: white;
            padding: 10px;
            margin-bottom: 10px;
            border-radius: 5px;
            span:first-child{
                font-weight: bold;
            }
            max-height: 40px;
            overflow: hidden;
        }
        .messages {
            overflow-y: scroll;
            /* border: 1px solid rgba(0, 0, 0, 0.2); */
            margin: 4px 0px;

            .message {
                &.hide{
                    display: none;
                }
                &.new{
                    animation: ${keyFrameNew} 2s ease-in-out;
                }
                div.source{
                    width:100%;
                    display: flex;
                    flex-direction:row;
                    justify-content: flex-end;
                }
                a{
                    font-size: 12px;
                    /* border: 1px solid black; */
                    color:#6a6af7;
                    color: black;
                    cursor: pointer;
                    padding: 4px 10px;
                    float:right;
                    border-radius: 5px;
                }
                /* user-select: none; */
                &:first-child {
                    padding-top: 0px;
                }
                display: flex;
                /* align-items: center;
                justify-content: center; */
                flex-direction: column;
                /* border-bottom: 1px solid rgba(0, 0, 0, 0.2); */
                /* border-radius: 100px; */
                padding: 14px 0px;
                /* border: 1px solid rgba(0, 0, 0, 0.2); */
                border-bottom: 1px solid rgba(0, 0, 0, 0.1);
                justify-content: flex-start;
                align-items: flex-start;
                /* margin-bottom: 10px; */
                .icon-container {
                    .icon {
                        width: 6px;
                        height: 6px;
                        background: black;
                        transform: translateY(6px);
                    }
                    margin-right: 10px;
                }
                .time {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    margin-bottom: 4px;
                    /* border: 1px solid rgba(0, 0, 0, 0.2); */
                    border-radius: 20px;
                    /* div:first-child {
                        font-size: 12px;
                        opacity: 0.8;
                        font-weight: 700;
                        margin: 0px 6px;
                    } */
                    div:last-child {
                        /* margin: 0px 6px; */

                        font-size: 9px;
                        letter-spacing: 0px;
                        opacity: 0.8;
                        margin-right: 8px;
                    }
                }
                .text {
                    /* padding-left: 6px; */
                    /* border-left: 1px solid rgba(0, 0, 0, 0.2); */
                    /* white-space: nowrap; */
                    font-size: 12px;
                    flex-direction: row;
                    display: flex;
                    /* justify-content: center; */
                    align-items: flex-start;

                    .info {
                        margin-left: 2px;
                        color: black;
                        flex: 1;
                        font-weight: bold;
                        opacity: 0.75;
                        font-size: 11px;
                        /* opacity: 0.7; */
                        /* background: rgba(0, 0, 0, 0.05);
                        padding: 10px 14px;
                        border-radius: 50px; */
                    }
                }
            }
        }
        .btn-container {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            margin-top: 10px;
            min-height: 50px;
            position: relative;
            a {
                display: flex;
            }
        }
       

       
    }
    .close-btn {
            min-height: 30px;

            margin-right: 10px;
            background: rgba(0, 0, 0, 1);
            background: #2e3948;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 4px;
            cursor: pointer;
            /* border-radius: 50px; */
            div {
                font-size: 16px;
                color: white;
                /* color: #2e3948; */
                font-size: 900;
            }
        }
`;

export default Style;
