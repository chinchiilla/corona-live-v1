import React, { useState, useContext, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Style from "./StyleUpdatePanel";
import { ReportButton } from "../index";
import { LogoSvg, KoreaSvg, UkSvg, ChinaSvg, EditSvg, SearchSvg } from "../../svgs";
import LangContext from "../../context/LangContext";
import a from "../../context/LangContext";
import { CloseBtn, LoadingContainer } from "../index";
const countries = {
    kr: { text: "한국어", icon: <KoreaSvg size={20}></KoreaSvg> },
    // ch: { text: "中文", icon: <ChinaSvg size={20}></ChinaSvg> },
    // ch: {
    //     text: "中文",
    //     icon: (
    //         <div>
    //             <span>简体</span>
    //             <span>中文</span>
    //         </div>
    //     )
    // },
    // tch: {
    //     text: "中文",
    //     icon: (
    //         <div>
    //             <span>繁體</span>
    //             <span>中文</span>
    //         </div>
    //     )
    // },
    en: { text: "English", icon: <UkSvg size={20}></UkSvg> },
};

const UpdatePanel = (props) => {
    const { setLanguage, setLoading, setReportTabOpen, messageData, reportTabIsOpen, loading, infos } = props;
    const [open, setOpen] = useState(true);
    const [time, setTime] = useState(null);
    const [updateData, setUpdateData] = useState(null);
    const [search, setSearch] = useState("");
    const { language, langData } = useContext(LangContext);
    const requiredLangData = langData["update"];
    const statsLangData = langData["display-info"];
    useEffect(() => {
        setUpdateData(messageData);
    }, [messageData]);
    const onChangeHandler = (e) => {
        let currentTarget = e.currentTarget;
        setSearch(currentTarget.value);
    };
    const onInputKeyDown = (e) => {
        if (e.keyCode == 13) {
            onSearchClick();
        }
    };

    const onSearchClick = () => {
        let newData = Object.keys(messageData).map((dataId) => {
            const data = messageData[dataId];
            if (data) {
                let message = data.info[language];
                let className = "";
                if (message.toUpperCase().indexOf(search.toUpperCase()) == -1) {
                    className = "hide";
                }
                return { ...data, className };
            }
        });
        setUpdateData(newData);

        // debugger;
    };
    useEffect(() => {
        (function () {
            function checkTime(i) {
                return i < 10 ? "0" + i : i;
            }
            function startTime() {
                var today = new Date(),
                    mm = today.getMonth(),
                    dd = today.getDate(),
                    h = checkTime(today.getHours()),
                    m = checkTime(today.getMinutes()),
                    s = checkTime(today.getSeconds());
                setTime(mm + "/" + dd + " " + h + ":" + m + ":" + s);
                setTime(`${h}:${m}:${s} <span>${mm + 1}/${dd}</span>`);
                let t = setTimeout(function () {
                    startTime();
                }, 500);
            }
            startTime();
        })();
    }, []);

    const onClearInput = () => {
        setUpdateData(messageData);
        setSearch("");
    };

    const getDisplayTime = (date) => {
        let hours = date.getHours();
        let minutesTmp = date.getMinutes();
        let minutes = minutesTmp.toString().length == 2 ? minutesTmp : `0${minutesTmp}`;
        let displayTime = `${hours}:${minutes}`;

        let second = 1000;
        let minute = 60 * second;
        let hour = 60 * minute;
        let day = 24 * hour;
        let week = 7 * day;
        let month = 30 * day;

        var timeDifference = new Date().getTime() - date.getTime();

        let value;
        let unit;
        let ago = requiredLangData["ago"];
        if (timeDifference < minute) {
            value = timeDifference / second;
            unit = requiredLangData["second"];
        } else if (timeDifference < hour) {
            value = timeDifference / minute;
            unit = requiredLangData["minute"];
        } else if (timeDifference < day) {
            value = timeDifference / hour;
            unit = requiredLangData["hour"];
        } else if (timeDifference < week) {
            value = timeDifference / day;
            unit = requiredLangData["day"];
        } else if (timeDifference < month) {
            value = timeDifference / week;
            unit = requiredLangData["week"];
        }
        let displayDiff;
        let plural = value < 2 ? "" : "s";

        if (language == "kr") {
            displayDiff = `${Math.floor(value)}${unit} ${ago}`;
        } else if (language == "en" || language == "ch") {
            displayDiff = `${Math.floor(value)} ${unit}${plural} ${ago}`;
        }
        return [displayTime, displayDiff];
    };

    const messageTemplate = (displayTime, info, displayDiff, type, ref, className) => {
        return (
            <div className={`message ${className}`}>
                <div className='time'>
                    {type && <div className={type}>{requiredLangData[type]}</div>}
                    <div>{displayDiff}</div>
                </div>
                <div className='text'>
                    <div className={"info"} dangerouslySetInnerHTML={{ __html: info }}></div>
                </div>
                {ref && (
                    <div className='source'>
                        <a style={{ marginLeft: "4px" }} href={ref}>
                            {requiredLangData["ref"]}
                        </a>
                    </div>
                )}
            </div>
        );
    };
    return (
        <Style>
            <div className='container'>
                <div className='title'>
                    <div className='logo'></div>
                    <div className='text'>
                        <span>corona</span>
                        <span>
                            <span>
                                <div className='live-icon'>
                                    <div></div>
                                </div>
                                {requiredLangData["live"]}
                            </span>
                        </span>
                    </div>
                </div>
                <div className='message-title'>
                    <div className='live-container'></div>
                    <div className='stats'>
                        {infos && (
                            <div className='stats-container'>
                                <div>
                                    <div>
                                        <div>{statsLangData["suspected-case"]}</div>
                                        <span>{infos.suspected}</span>
                                    </div>
                                    <div>
                                        <div>{statsLangData["being-diagnosed"]}</div>

                                        <span>{infos.diagnose}</span>
                                    </div>
                                    <div className='last'>
                                        <div>{statsLangData["tested-negative"]}</div>

                                        <span>{infos.negative}</span>
                                    </div>
                                </div>
                                <div>
                                    <div className='confirmed'>
                                        <div>{statsLangData["confirmed-cases"]}</div>

                                        <span>{infos.cases}</span>
                                    </div>
                                    <div className='death'>
                                        <div>{statsLangData["death"]}</div>

                                        <span>{infos.death}</span>
                                    </div>
                                    <div className='recovered last'>
                                        <div>{statsLangData["recovered"]}</div>
                                        <span>{infos.recovered}</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className='messages-container'>
                    <div className='search-container'>
                        <input
                            onKeyDown={onInputKeyDown}
                            onChange={onChangeHandler}
                            value={search}
                            placeholder={requiredLangData["search-keyword"]}
                            type='text'
                        ></input>
                        <div className='delete-icon' onClick={onClearInput}>
                            <CloseBtn size={12} fill={"rgba(0,0,0,0.9)"}></CloseBtn>
                        </div>
                        <div className='search-icon' onClick={onSearchClick}>
                            <SearchSvg size={16} fill={"rgba(0,0,0,0.7)"}></SearchSvg>
                        </div>
                    </div>
                    <div className='messages'>
                        {updateData &&
                            Object.keys(updateData)
                                .sort((a, b) => b - a)
                                .map((messageId) => {
                                    let message = updateData[messageId];
                                    if (message) {
                                        let { date, info, type, ref, className } = message;
                                        if (!info) return <div></div>;
                                        let [displayTime, displayDiff] = getDisplayTime(new Date(date));
                                        if (info[language] !== "") return messageTemplate(displayTime, info[language], displayDiff, type, ref, className);
                                    }
                                })}
                    </div>
                </div>
                <div className='btn-container'>
                    <a href='javascript:sendLink()' id='kakao-link-btn'>
                        <img src='//developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png' width='30' height='30' />
                    </a>
                    <div className='gap'></div>
                    <div class='fb-share-button' data-href='https://corona-live.com/' data-layout='button' data-size='large'>
                        <a
                            target='_blank'
                            href='https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fcorona-live.com%2F&amp;src=sdkpreparse'
                            class='fb-xfbml-parse-ignore'
                        ></a>
                    </div>
                    <a className='coronamap-live' href='https://coronamap.live/'>
                        {" "}
                        <div>
                            <span>{statsLangData["coronamap"]}</span>
                            {statsLangData["live"]}
                        </div>
                    </a>
                    <div className='report-button' onClick={() => setReportTabOpen(true)}>
                        <EditSvg fill={"rgb(70, 85, 110, 0.9)"} size={14}>
                            {" "}
                        </EditSvg>
                        <span style={{ marginLeft: "6px" }}>{requiredLangData["report"]}</span>
                    </div>
                    <ReportButton reportTabIsOpen={reportTabIsOpen} setReportTabOpen={setReportTabOpen}></ReportButton>
                </div>
            </div>
            {open && (
                <>
                    <div className='overlay'></div>
                    <div className='popup'>
                        <div className='title'>
                            <div className='logo'></div>
                            <div className='text'>
                                <span>corona</span>
                                <span>
                                    <span>
                                        <div className='live-icon'>
                                            <div></div>
                                        </div>
                                        {requiredLangData["live"]}
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className='desc'>
                            <div> {requiredLangData["description1"]}</div>
                            <div dangerouslySetInnerHTML={{ __html: requiredLangData["description2"] }}></div>
                            <div>국내 코로나 현황을 한눈에 볼수있는 사이트</div>
                            <div>뉴스 속보와 제보가 실시간으로 업데이트됩니다</div>
                            <div>많은 제보 부탁드립니다</div>
                        </div>
                        <div className='language-container'>
                            {Object.keys(countries).map((code) => {
                                return (
                                    <div
                                        className={`language ${code == language ? "selected" : ""}`}
                                        onClick={() => {
                                            setLoading(true);
                                            setTimeout(() => {
                                                setLoading(false);
                                                // setLanguage(langs[index]);
                                                setLanguage(code);
                                            }, 500);
                                        }}
                                    >
                                        <div className='icon'>
                                            {countries[code].icon}
                                            {/* <KoreaSvg size={20}></KoreaSvg> */}
                                        </div>
                                        <div className='text'>{countries[code].text}</div>
                                    </div>
                                );
                            })}
                        </div>

                        <a className='close-btn' href='https://coronamap.live/'>
                            <div>{langData["display-info"]["coronamap"]}</div>
                        </a>
                    </div>
                </>
            )}
        </Style>
    );
};

UpdatePanel.propTypes = {};

export default UpdatePanel;
