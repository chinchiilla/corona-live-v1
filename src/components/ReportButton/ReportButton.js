import React, { useEffect, Fragment, useState, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import { EditSvg } from "../../svgs";
import LangContext from "../../context/LangContext";

const Style = styled.div`
    @media (max-width: 768px) {
        .report-container {
            padding: 20px !important;
        }
        .report-toggle {
            display: flex !important;
        }
    }
    .report-toggle {
        /* position: absolute;
        right: 4px;
        top: calc(54px); */
        cursor: pointer;

        display: flex !important;
        width: 46px;
        height: 46px;
        border-radius: 5px;
        background: rgb(70, 85, 110, 0.9);
        background: white;
        color: white;
        color: rgb(70, 85, 110, 0.9);
        /* box-shadow: 0 0 20px 0px black; */
        justify-content: center;
        align-items: center;
        flex-direction: column !important;
        ${(props) => props.sidebar && " position: static;width:100%;background: transparent;"}
        & > div {
            color: white;
            color: rgb(70, 85, 110, 0.9);

            font-size: 10px;
            font-weight: bold;
            ${(props) => props.language == "en" && "font-size:7px;"}
            & > div {
            }
        }
        /* writing-mode: vertical-lr; */
    }

    .report-container {
        position: fixed;
        width: 100%;
        left: 0;
        top: 0;
        height: 100%;
        background: rgb(70, 85, 110, 0.9);

        padding: 0% 25%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        backdrop-filter: blur(70px);

        .report-title {
            font-weight: bolder;
            font-size: 30px;
            color: white;
            margin-bottom: 10px;
        }
        .report-message-input {
            width: 100%;
            height: 200px;
        }
        .report-contact-input {
        }
        input,
        textarea {
            width: 100%;
            padding: 10px 20px;
            border-radius: 5px;
            margin: 10px 0px;
            background: rgba(0, 0, 0, 0.24);
            color: rgba(255, 255, 255, 1);
            font-size: 16px;
            box-shadow: unset;
            border: unset;
            padding: 20px 20px;
            /* box-shadow: inset 0 0 20px #0000005e; */
        }
        input::placeholder,
        textarea::placeholder {
            color: rgba(255, 255, 255, 0.8);
        }
        .report-type-container {
            display: flex;
            width: 100%;
            flex-direction: row !important;
            justify-content: center;
            align-items: center;
            border: 1px solid rgba(255, 255, 255, 0.3);
            margin: 10px 0px;
            height: 50px;
            border-radius: 5px;

            div {
                flex: 1;
                color: white;
                font-size: 16px;
                background: rgba(255, 255, 255, 0);
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;
                &:first-child {
                    border-right: 1px solid rgba(255, 255, 255, 0.5);
                }
            }
            div.selected {
                background: rgba(255, 255, 255, 0.2);
            }
        }
        .report-submit-button {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            background: rgba(0, 0, 0, 0.5);
            border-radius: 5px;
            padding: 20px 20px;
            margin: 10px 0px;
            border-radius: 5px;

            div {
                font-weight: bold;
                color: white;
            }
        }
        .error {
            margin: 6px;
            font-size: 16px;
            color: red;
            background: rgba(0, 0, 0, 0.5);
            padding: 4px;
            width: 100%;
            text-align: center;
            margin: 6px;
            font-size: 13px;
            color: #ff8c8c;
            background: rgba(0, 0, 0, 0.33);
            padding: 8px;
            width: 100%;
            border-radius: 10px;
            text-align: center;
        }
    }
    div.close-btn {
        right: 40px;
        top: 54px;
        width: 30px;
        height: 30px;
        cursor: pointer;
        bottom: unset;
        position: absolute;
        /* color: white;
        font-weight: 900;
        
        */
        cursor: pointer;
        &::after,
        &::before {
            content: "";
            position: absolute;
            left: 50%;
            right: 50%;

            width: 1px;
            height: 20px;
            background: white;
            border-bottom-color: transparent;
            border-left-color: transparent;
            transform: rotate(45deg);
            transition: 0.3s;
        }
        &::before {
            transform: rotate(-45deg);
        }
    }
`;

const ReportButton = ({ sidebar, reportTabIsOpen, setReportTabOpen }) => {
    const [data, setData] = useState({ contact: "", message: "", type: "report" });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [finished, setFinished] = useState(false);
    // const [reportTabIsOpen, setReportTabOpen] = useState(false);
    const { contact, message, type } = data;

    const { language, langData } = useContext(LangContext);
    const requiredLangData = langData["feedback-tab"];
    const [link, setLink] = useState(null);
    const typeHandler = (e) => {
        let currentTarget = e.target;
        let type = currentTarget.attributes.name.value;
        setData((prevData) => {
            return { ...prevData, type };
        });
    };
    useEffect(() => {
        if (navigator) {
            navigator.clipboard
                .readText()
                .then((text) => {
                    setLink(text);
                })
                .catch((err) => {
                    console.error("Failed to read clipboard contents: ", err);
                });
        }
    }, []);

    const inputHandler = (e) => {
        keyDownHandler(e);
        let currentTarget = e.target;
        // let type = currentTarget.attributes.name.value;
        setData((prevData) => {
            return { ...prevData, [currentTarget.name]: currentTarget.value };
        });
    };

    const keyDownHandler = (e) => {
        if (e.keyCode === 13) {
            // e.currentTarget.blur();
            // onBtnClick();
            e.preventDefault();
        }
    };

    const initData = () => {
        setReportTabOpen(true);
        setLoading(false);
        setFinished(false);
        setData({ contact: "", message: "", type: "report" });
        setError(null);
    };
    const addLink = () => {
        setData((prevData) => {
            return { ...prevData, message: prevData.message + " " + link };
        });
        setLink(null);
    };
    const onBtnClick = () => {
        if (!finished) {
            if (message != "" && type != "") {
                let insertData = { ...data, message: data.message + " ", contact: data.contact + " " };
                setLoading(true);
                axios.post("https://asia-northeast1-corona-aaa3e.cloudfunctions.net/api/report", data).then((res) => {
                    setLoading(false);
                    setFinished(true);
                });
            } else {
                setError(requiredLangData["error"]);
            }
        } else {
            setReportTabOpen(false);
        }
    };
    return (
        <Style language={language} sidebar={sidebar}>
            <div onClick={initData} className='report-toggle'>
                <div>
                    <EditSvg fill={"rgb(70, 85, 110, 0.9)"} size={14}>
                        {" "}
                    </EditSvg>
                </div>
                <div>{requiredLangData["feedback"]}</div>
            </div>

            {reportTabIsOpen && (
                <div className='report-container'>
                    <div className='report-title'>{!finished ? requiredLangData["feedback"] : requiredLangData["thank-you"]}</div>
                    {!finished && (
                        <Fragment>
                            <div className='close-btn' onClick={() => setReportTabOpen(false)}></div>
                            {error != null && <div className='error'>{error}</div>}

                            <div className='report-type-container '>
                                <div name='feedback' className={`${type == "feedback" ? "selected" : ""}`} onClick={typeHandler}>
                                    피드백
                                </div>
                                <div name='report' className={`${type == "report" ? "selected" : ""}`} onClick={typeHandler}>
                                    제보
                                </div>
                            </div>
                            {link && (
                                <div className='link' onClick={addLink}>
                                    <span>복사내용 추가하기 </span>
                                    <span>{link}</span>
                                </div>
                            )}
                            <textarea
                                type='text'
                                name='message'
                                onChange={inputHandler}
                                value={data.message}
                                placeholder={requiredLangData["feedback-input"]}
                                className='report-message-input'
                            />
                            <input
                                type='text'
                                name='contact'
                                onKeyDown={inputHandler}
                                placeholder={requiredLangData["email-input"]}
                                className='report-contact-input'
                            />
                        </Fragment>
                    )}

                    <div onClick={onBtnClick} className='report-submit-button'>
                        {!loading ? (
                            <div>{!finished ? requiredLangData["send"] : requiredLangData["go-back"]}</div>
                        ) : (
                            <div>{requiredLangData["loading"]}...</div>
                        )}
                    </div>
                </div>
            )}
        </Style>
    );
};
export default ReportButton;
