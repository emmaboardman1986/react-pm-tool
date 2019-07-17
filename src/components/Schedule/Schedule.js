import React from 'react'
import classes from './Schedule.module.css';

const Schedule = () => {

    return (
        <p>SCHEDULE</p>
    //     <form>
    //     <li className={classes.FormRow}>
    //     <label htmlFor="resourceId">Resource</label>
    //     <select
    //       name="taskResource"
    //       onChange={handleInputChange}
    //       id="resourceId"
    //       value={formInput.resourceId}
    //       required
    //     >
    //       {generatedResourceOptions}
    //     </select>
    //   </li>
    //   <li className={classes.FormRow}>
    //     <label htmlFor="taskEstimate">Estimate</label>
    //     <input
    //       type="text"
    //       id="taskEstimate"
    //       name="taskEstimate"
    //       onChange={handleInputChange}
    //       onBlur={() => {
    //         props.handleSchedulePlacement({
    //           resourceId: formInput.taskResource,
    //           taskEstimate: formInput.taskEstimate
    //         });
    //       }}
    //       required
    //     />
    //   </li>
    //   <li className={classes.FormRow}>
    //     <label htmlFor="taskSchedule">
    //       First Available Time Slot
    //     </label>
    //     <p class={classes.DefaultMessage}>
    //       {props.availableTimes.endTime
    //         ? generateTimeSlots(props.availableTimes)
    //         : "Requires resource and estimate input"}
    //     </p>
    //   </li>
    //   </form>
    );
}

export default Schedule;