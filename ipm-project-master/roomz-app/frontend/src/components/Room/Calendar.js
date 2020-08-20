import React, {Component} from 'react';
import {
	Inject, 
	ScheduleComponent,
	Day,
	Week,
	Month
} from '@syncfusion/ej2-react-schedule';
// import {DataManager, WebApiAdaptor} from '@syncfusion/ej2-data'


class Calendar extends Component {
	constructor() {
		super(...arguments);
		this.data = [{
						Id: 1,
						Subject: 'Scrum Meeting',
						StartTime: new Date(2020, 6, 28, 10, 0),
						EndTime: new Date(2020, 6, 28, 12, 30),
						IsAllDay: false,
						// RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=8',
						// RecurrenceException: '20180130T043000Z'
				}];
}
// const remoteDate = new DataManager({
// 	url: call to out back end uel
// 	adaptor: new WebApiAdaptor,
// 	crossDomain: true
// })
		state ={
			data: [{
				Id: 2,
				Subject: 'Meeting',
				StartTime: new Date(2020, 6, 29, 10, 0),
				EndTime: new Date(2020, 6, 29, 12, 30),
				IsAllDay: false,
				// Status: 'Completed',
				// Priority: 'High'
			}]
		}

	render(){
		return(
			<ScheduleComponent currentView='Week'
				startHour="07:00" endHour="18:00"
				height='600' 
				eventSettings={{ dataSource: this.state.data }}
			>
				<Inject services={[Day, Week, Month]} />

			</ScheduleComponent>
		)
	}
}

export default Calendar;