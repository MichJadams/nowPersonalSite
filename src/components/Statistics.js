import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/Statistics.css';
import strava from 'strava';
// import { Chart } from "react-charts";
// import {BarChart} from 'react-easy-chart';
import {Bar} from 'react-chartjs-2';
import lastSevenDays from './lastSevenDays'
export default class Statistics extends Component {
  constructor(){
    super()
    this.state={
      runs: [],
      currentDate: new Date(),
      arrofDistances:[0,0,0,0,0,0,0],
      datesInRange:lastSevenDays().slice(0,3),
      dayOfTheWeek: new Date().getDay() //update this to be dynamic
    }
  }
  componentWillMount(){
    strava({
      client_id: "26319",	 //26319
      client_secret: "990a0f2c01b1bc94a92abeb8b04055155bd181e9", //990a0f2c01b1bc94a92abeb8b04055155bd181e9
      redirect_uri: "http://localhost:3000/Statistics",
      access_token: "ebdfc2125da5a1e23e578989db2c0fa8ab9aa0d5" //ebdfc2125da5a1e23e578989db2c0fa8ab9aa0d5
    }).athlete.activities.get((err, res)=> {
      console.log("fds",res);
      let arrOfDistance = res.filter((run)=> this.state.datesInRange.indexOf(run.start_date.slice(0,10))> -1).map((run)=>run.distance)
      this.setState({runs:arrOfDistance})
      console.log("the dates in range", this.state.runs)
    })
      
  }
  
  render() {
    let StravaData = {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    
      datasets: [
        {
          label: 'Miles Run',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: this.state.runs
        }
      ]
    }
    // let runs = this.state.runs|| null
    return (
      <div>
      <Link to={'/MainMenu'} className='backLink'>Back</Link>
        <div>Statistics</div>
        <div>A granular and numeric display of what I've been up to</div>
        <div className ='stat'>
        <Bar
        data={StravaData}
        width={50}
        height={50}
        options={{
            maintainAspectRatio: false
        }}
    />
      <div className='statLedger'>Miles Run in the last week</div>
      <div className='statLedger'>number of days to go back: {this.state.datesInRange.length}</div>
      {
        this.state.runs.map((distance)=>{
          return <div key={this.state.runs.indexOf(distance)}>this run on this day is being shown, this week I ran {distance} </div>
           
        })
      }
        </div>
      </div>
    );
  }
}




