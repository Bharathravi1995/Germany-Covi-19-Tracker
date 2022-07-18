import React, { useState, useEffect } from "react";
import { Container } from '@mui/material';
import { Box } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import Chart from "./Chart";
import DurationTabs from "./DurationTabs";
import TotalCountCard from "./TotalCountCard";
import RegionsDropDown from "./RegionsDropDown";

const MainContent = () => {

    const [allRegionCovidData, setAllRegionCovidData] = useState({});
    const [chosenRegion, setChosenRegion] = useState("de");
    const [duration, setDuration] = useState(7);
    const [showLoader, setShowLoader] = useState(true);
    const [casesHistoryData, setCasesHistoryData] = useState({});
    const [deathsHistoryData, setDeathsHistoryData] = useState({});
    const [recoveredHistoryData, setRecoveredHistoryData] = useState({});


    const fetchGermanyCovidData = () => {
        let API = "https://api.corona-zahlen.org/germany";
        return fetch(API);
    };

    const fetchGermanStatesCovidData = () => {
        let API = "https://api.corona-zahlen.org/states";
        return fetch(API);
    };

    const fetchHistoryDataByRegion = (historyType) => {
        let baseAPI = chosenRegion === "de" ? "https://api.corona-zahlen.org/germany" : `https://api.corona-zahlen.org/states/${chosenRegion}`,
            historyAPIPath = duration ? `history/${historyType}/${duration}` : `history/${historyType}`,
            API = `${baseAPI}/${historyAPIPath}`;
        return fetch(API);
    };

    const handleRegionChange = event => {
        setChosenRegion(event.target.value);
    }

    const handleDurationChange = days => {
        setDuration(days);
    }

    const buildChartData = (data, historyType) => {
        let historyData = chosenRegion === "de" ? data?.data : data?.data?.[chosenRegion]?.history;
        return historyData?.map(item => ({ x: new Date(item.date), y: item[historyType] }));
    }

    useEffect(() => {
        (async () => {
            let promises = [fetchGermanyCovidData(),
            fetchGermanStatesCovidData()];

            const res = await Promise.all(promises)
            const [germanyData, regionsData] = await Promise.all(res.map(r => r.json()));
            let allRegionCovidData = { "de": { name: "Germany", ...germanyData }, ...regionsData.data };
            setAllRegionCovidData(allRegionCovidData);
        })();
    }, [])

    useEffect(() => {
        (async () => {
            setShowLoader(true);
            let promises = [fetchHistoryDataByRegion("cases"),
            fetchHistoryDataByRegion("deaths"),
            fetchHistoryDataByRegion("recovered")];

            const res = await Promise.all(promises)
            const [casesHistsoryData, deathsHistsoryData, recoveredHistsoryData] = await Promise.all(res.map(r => r.json()));
            setCasesHistoryData(buildChartData(casesHistsoryData, "cases"));
            setDeathsHistoryData(buildChartData(deathsHistsoryData, "deaths"));
            setRecoveredHistoryData(buildChartData(recoveredHistsoryData, "recovered"));
            setShowLoader(false);
        })();
    }, [duration, chosenRegion]);


    return <main>

        <Box textAlign='center' m={2}>
            <Container maxWidth="lg">
                <div className="main-content">
                    <div >
                        <RegionsDropDown allRegionCovidData={allRegionCovidData} chosenRegion={chosenRegion} handleRegionChange={handleRegionChange} />
                        <TotalCountCard allRegionCovidData={allRegionCovidData} chosenRegion={chosenRegion} />
                    </div>
                    <div>
                        <DurationTabs duration={duration} handleDurationChange={handleDurationChange} />
                        <div>
                            {showLoader ? <Box textAlign='center' m={2}><CircularProgress /></Box> :
                                <>
                                    <Chart label="Cases" backgroundColor="lightgray" borderColor="black" data={casesHistoryData} duration={duration} />
                                    <Chart label="Deaths" backgroundColor="pink" borderColor="red" data={deathsHistoryData} duration={duration} />
                                    <Chart label="Recovered" backgroundColor="lightgreen" borderColor="green" data={recoveredHistoryData} duration={duration} />
                                </>
                            }
                        </div>
                    </div>
                </div>
            </Container>
        </Box>

    </main>
};

export default MainContent;