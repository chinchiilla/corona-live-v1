import React, { useEffect, useState, useRef } from "react";
import fire from "./Config";
import "./App.css";
import { ReportButton, UpdatePanel, LoadingContainer } from "./components";
import LangContext from "./context/LangContext";
import translations from "./translations";
import axios from "axios";

axios.defaults.baseURL = "https://asia-northeast1-corona-aaa3e.cloudfunctions.net/api";

const App = () => {
    const [language, setLanguage] = useState("kr");
    const [data, setData] = useState(null);
    const [infos, setInfos] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [length, setLength] = useState(null);
    const [reportTabIsOpen, setReportTabOpen] = useState(false);
    const [loading, setDataLoading] = useState(true);

    useEffect(() => {
        console.log("go");

        axios
            .post("getnews", {
                authid: "ghdwnstj",
            })
            .then((res) => {
                return res.data.data;
            })
            .then((res) => {
                setData(res);
            })
            .catch((err) => {
                console.log(err);
            });

        axios
            .post("getstats", {
                authid: "ghdwnstj",
            })
            .then((res) => {
                return res.data.data.data;
            })
            .then((res) => {
                setInfos(res);
            })
            .catch((err) => {
                console.log(err);
            });
        let messagesRef = fire.database().ref("data");
        let infoRef = fire.database().ref("info");
        const listener = messagesRef.on("value", (snapshot) => {
            if (snapshot.val() !== null) {
                let obj = snapshot.val().map((val, index) => {
                    let className = "";
                    return { ...val, className };
                });
                length1.current = obj.length;
                setData(obj.reverse());
            }
        });
        const listenerInfo = infoRef.on(
            "value",
            (snapshot) => {
                if (snapshot.val() !== null) {
                    let obj = snapshot.val();
                    setInfos(obj);
                }
            },
            (errorObject) => {
                console.log(errorObject);
            }
        );
        return () => {
            listener();
            listenerInfo();
        };
    }, []);

    return (
        <LangContext.Provider value={{ language, langData: translations[language] }}>
            <div>
                {isLoading && <LoadingContainer></LoadingContainer>}
                <UpdatePanel
                    reportTabIsOpen={reportTabIsOpen}
                    setReportTabOpen={setReportTabOpen}
                    language={language}
                    setLanguage={setLanguage}
                    setLoading={setLoading}
                    messageData={data}
                    loading={loading}
                    infos={infos}
                ></UpdatePanel>
            </div>
        </LangContext.Provider>
    );
};

export default App;
