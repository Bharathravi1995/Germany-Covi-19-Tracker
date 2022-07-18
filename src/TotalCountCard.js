import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from "@material-ui/core/Typography";

const toLocaleString = number => number?.toLocaleString('en');

const TotalCountCard = ({ allRegionCovidData, chosenRegion }) => {
    return <Card sx={{ minWidth: 275, mt:2,  mb:2 }}>
        <CardContent>
            <table>
                <tbody>
                    <tr><th scope="row"><Typography variant="h6" component="div">
                        Total Cases
                    </Typography></th>
                        <td><Typography variant="h6" component="div">{toLocaleString(allRegionCovidData?.[chosenRegion]?.cases)}</Typography></td>
                    </tr>
                    <tr><th scope="row"><Typography variant="h6" component="div">
                        Total Deaths
                    </Typography></th>
                        <td><Typography variant="h6" component="div">{toLocaleString(allRegionCovidData?.[chosenRegion]?.deaths)}</Typography></td>
                    </tr>
                    <tr><th scope="row"><Typography variant="h6" component="div">
                        Total Recovered
                    </Typography></th>
                        <td><Typography variant="h6" component="div">{toLocaleString(allRegionCovidData?.[chosenRegion]?.recovered)}</Typography></td>
                    </tr>

                </tbody>
            </table>

        </CardContent>
    </Card>

};

export default TotalCountCard