import React, { Component, Fragment } from "react";
import D3CalendarHeatMap from "./components/D3CalendarHeatMap";
import D3HeatMap from './components/D3HeatMap'

//this class is just for demo purposes to show the charts in different usage
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.setData = this.setData.bind(this);
    this.randomDate = this.randomDate.bind(this);
  }

  //randomizes set of data for our heatmap
  setData(dateStart, dateEnd, nb) {
    const data = [];
    const dates = [];
    for (let i = 0; i < nb; i++) {
      let date = this.randomDate(dateStart, dateEnd);
      while (dates.includes(dates)) {
        date = this.randomDate(dateStart, dateEnd);
      }
      dates.push(date);
      const count = Math.floor(Math.random() * 14);
      data.push({ date: new Date(date), count });
    }
    console.log(data);
    return data;
  }

  //randomizes a date in range of startdate and end date
  randomDate = (start, end) => {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  };

  render() {
    const startDate = new Date();
    startDate.setFullYear(startDate.getFullYear() - 1);
    const endDate = new Date();

    return (
      <Fragment>
        <D3CalendarHeatMap
          dataDescription="codes pushed"
          mapColor="#66ff33"
          title="Heat Map for code commits"
          data={this.setData(startDate, endDate, 231)}
          startDate={startDate}
          endDate={endDate}
        ></D3CalendarHeatMap>
        <D3CalendarHeatMap
          dataDescription="movies showing"
          mapColor="#FF7F50"
          title="Number of movies showing"
          data={this.setData(startDate, endDate, 231)}
          startDate={startDate}
          endDate={endDate}
        ></D3CalendarHeatMap>
        <D3CalendarHeatMap
          dataDescription="codes pushed"
          mapColor="#66ff33"
          title="Heat Map for code commits"
          data={this.setData(startDate, endDate, 231)}
          startDate={startDate}
          endDate={endDate}
        ></D3CalendarHeatMap>
        <D3CalendarHeatMap
          dataDescription="weddings"
          mapColor="	#8A2BE2"
          title="Wedding Dates"
          data={this.setData(startDate, endDate, 231)}
          startDate={startDate}
          endDate={endDate}
        ></D3CalendarHeatMap>
<div> <D3HeatMap></D3HeatMap></div>
    
      </Fragment>
    );
  }
}
