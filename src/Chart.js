

import { Line } from "react-chartjs-2";
import Typography from "@material-ui/core/Typography";
import cloneDeep from 'lodash/cloneDeep';

const abbreviateNumber = (number) => {
    const lookup = [
        { value: 1, symbol: "" },
        { value: 1e3, symbol: "k" },
        { value: 1e6, symbol: "M" },
        { value: 1e9, symbol: "G" },
        { value: 1e12, symbol: "T" },
        { value: 1e15, symbol: "P" },
        { value: 1e18, symbol: "E" }
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup.slice().reverse().find(function (item) {
        return number >= item.value;
    });
    return item ? (number / item.value).toFixed(1).replace(rx, "$1") + item.symbol : "0";
};

let options = {
    legend: {
        display: false,
    },
    elements: {},
    tooltips: {
        mode: "index",
        intersect: false,
    },
    scales: {
        xAxes: [
            {
                type: "time",
                time: {
                    format: "YY-MM-DD",
                    tooltipFormat: "ll",
                },
            },
        ],
        yAxes: [
            {
                gridLines: {
                    display: false,
                },
                ticks: {
                    callback: function (value, index, values) {
                        return abbreviateNumber(value);
                    },
                    beginAtZero: true,
                },
            },
        ],
    },
},
    optionsForWeeklyChart = cloneDeep(options);
optionsForWeeklyChart.scales.xAxes[0].time.unit = "day";

const Chart = ({ label, backgroundColor, borderColor, data, duration }) => {
    return <div>
        <Typography variant="h6" gutterBottom style={{ color: borderColor }}>
            {label}
        </Typography>
        <Line
            data={{
                datasets: [
                    {
                        label,
                        backgroundColor,
                        borderColor,
                        data
                    },
                ],
            }}
            options={duration === 7 ? optionsForWeeklyChart : options}
        />
    </div>

}

export default Chart;