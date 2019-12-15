import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import HeatMapDate from "react-d3-heatmap";
import Card from "react-bootstrap/Card";

export default class D3CalendarHeatMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedDate: {}
    };
    this.onClick = this.onClick.bind(this);
    this.calendarDataDisplay = this.calendarDataDisplay.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  //renders the calendar data in jsx when onClick is triggered
  calendarDataDisplay() {
    if (this.state.clickedDate.date === undefined) {
      return (
        <div style={{ width: "50%" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>pick a date from the heatmap</th>
                <th>{this.props.dataDescription} on this date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0</td>
                <td>0</td>
              </tr>
            </tbody>
          </Table>
        </div>
      );
    }
    return (
      <div style={{ width: "50%" }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Date</th>
              <th>{this.props.dataDescription} on this date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.state.clickedDate.date + ""}</td>
              <td>{this.state.clickedDate.count + ""}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }

  // when the user clicks on the calendar date
  onClick(data, index) {
    this.updateState(data);
  }
  
  //sets the state of the clickedDate
  updateState = data => {
    this.setState({
      clickedDate: data
    });
  };

  render() {
    const startDate = this.props.startDate;
    const endDate = this.props.endDate;
    const data = this.props.data;
    const colors = [];

    colors.push({
      count: 2,
      color: this.props.mapColor,
      text: this.props.dataDescription
    });

    return (
      <div>
        <Card style={{ width: "65rem" }}>
          <Card.Header>{this.props.title}</Card.Header>
          <Card.Body>
            <HeatMapDate
              startDate={startDate}
              endDate={endDate}
              data={data}
              colors={colors}
              onClick={this.onClick}
              true
              shouldStartMonday
            />
            {this.calendarDataDisplay()}
          </Card.Body>
        </Card>
      </div>
    );
  }
}
