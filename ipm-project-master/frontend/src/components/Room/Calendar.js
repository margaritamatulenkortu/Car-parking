import React, { Component } from "react";
import {
  ScheduleComponent,
  Day,
  Week,
  TimelineViews,
  TimelineMonth,
  Month,
  Agenda,
	DragAndDrop,
	Resize,
  ViewsDirective,
  ViewDirective,
  Inject,
} from "@syncfusion/ej2-react-schedule";
import { extend } from "@syncfusion/ej2-base";
import { DataManager, WebApiAdaptor } from "@syncfusion/ej2-data";
import { Consumer } from "../Context";
import {insertRecords} from '../Actions/RoomActions'
import { toast } from 'react-toastify';


class Calendar extends Component {
  constructor(props) {
    super(props);

    this.dataManager = new DataManager({
      insertUrl: "/roomz-api/booking-api/bookings",
      adaptor: new WebApiAdaptor(),
      crossDomain: true,
    });

  }

  onActionBegin(args) {
    
    if(this.roomId === 0 ) {
      toast.info("Please select the room!")
      return  null
    }

		if (args.requestType === 'eventCreate' && args.data.length > 0) {
      let eventData = args.data[0];
      let eventField = this.scheduleObj.eventFields;

      let record = {}
      record.title = eventData[eventField.subject];
      record.startDate = new Date(eventData[eventField.startTime]);
      record.endDate = new Date(eventData[eventField.endTime]);
      record.comments = eventData[eventField.description];
      let id = eventData[eventField.id];
      
      record.roomId = this.roomId;        
      record.userId = Number.parseInt(localStorage.getItem("currentUserId"));
      args.cancel = !this.scheduleObj.isSlotAvailable(record.startDate, record.endDate);
      
      if(args.cancel) {
        toast.info('Oops, Room Already booked!');
        return null
      }

      const convertIndianTime = (time) =>  {
        return new Date(new Date(time).getTime() + 180*60*1000)
      }
  
      record.startDate = convertIndianTime(record.startDate)
      record.endDate = convertIndianTime(record.endDate)
      insertRecords(record)
		}
}

  render() {
    return (
      <Consumer>
        {({ bookingsByRoom, actions, roomId}) => {
          this.roomId = roomId
          return (
            <ScheduleComponent
							ref={schedule => this.scheduleObj = schedule}
              currentView="Week"
              startHour="07:00"
              endHour="18:00"
              height="600"
              eventSettings={{
                dataSource: bookingsByRoom,
                editFollowingEvents: true,
							}}
							actionBegin={this.onActionBegin.bind(this)}
            >
              <Inject services={[Day, Week, Month, DragAndDrop, Resize]} />
            </ScheduleComponent>
          );
        }}
      </Consumer>
    );
  }
}

export default Calendar;
