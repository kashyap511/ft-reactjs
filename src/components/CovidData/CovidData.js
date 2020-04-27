import React, { Component } from "react";
import axios from 'axios';
import classes from './CovidData.module.scss';
import Row from './Row/Row';
import { LinearProgress } from "@material-ui/core";

function createData(name, active, confirmed, deceased, recovered) {
    return { name, active, confirmed, deceased, recovered };
}

class CovidData extends Component {

    state = {
        covidKarnataka: [],
        loading: false
    }

    componentDidMount() {
        this.setState({ ...this.state, loading: true });
        axios.get('https://api.covid19india.org/state_district_wise.json')
            .then((response) => {
                const districtData = response.data.Karnataka.districtData;
                const rows = [];
                for (let data in districtData) {
                    const d = districtData[data];
                    rows.push(createData(data, d.active, d.confirmed, d.deceased, d.recovered));
                }
                setTimeout(() => {
                    this.setState({ ...this.state, covidKarnataka: [...rows.sort((a, b) => b.confirmed - a.confirmed)], loading: false });
                }, 2000);
            });
    }

    render() {
        let allRows = this.state.covidKarnataka.map((dist, key) => (
            <Row dist={dist} key={key} />
        ));
        let header = {
            name: 'District',
            confirmed: 'T',
            recovered: 'R',
            deceased: 'D',
            active: 'A'
        }

        let progressBar = '';
        if (this.state.loading) {
            progressBar = <LinearProgress/>
        }
        return (
            <div className={classes.main}>
                {progressBar}
                <Row header="true" dist={header} />
                {allRows}
                <div>
                    <div className={classes.bullets}>
                        T - Total
                    </div>
                    <div className={classes.bullets}>
                        R - Recovered
                    </div>
                    <div className={classes.bullets}>
                        D - Deceased
                    </div>
                    <div className={classes.bullets}>
                        A - Active
                    </div>
                </div>
            </div>
        )
    }
}
export default CovidData;