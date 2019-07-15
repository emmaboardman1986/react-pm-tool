import React from 'react';
import classes from './TaskDetail.module.css';

const taskDetail = (props) => {

    const generateClientColourClasses = (clientName) => {
        let color;
        switch (clientName) {
            case "Client A":
                color = "#C6F400";
                break;
            case "Client B":
                color = "#F48A18";
                break;
            case "Client C":
                color = "#B087FF";
                break;
            case "Client D":
                color = "#1DA4C1";
                break;
            default:
                color = "#1DA4C1";
                break;
        }
        let backgroundColor = {
            backgroundColor: color
        };
        return backgroundColor;
    }

    const generateImpactColourClasses = (impact) => {
        let color;
        switch (impact) {
            case "low":
                color = "#CFDBC5";
                break;
            case "medium":
                color = "#FBEC5D";
                break;
            case "high":
                color = "#FF6A6A";
                break;
        }
        let backgroundColor = {
            backgroundColor: color
        };
        return backgroundColor;
    }

    return (

        <div className={classes.TaskDetail} data-cy="task-detail">
            <div className={classes.TaskDetailTopBar} style={generateClientColourClasses(props.clientName)}>
                <div>{props.taskClientName}</div>
                <div className={classes.TaskDetailTopBarCloseBtn} onClick={props.closeModal}>x</div>
            </div >
            <div className={classes.TaskDetailTaskContent}>
                <p className={classes.TaskDetailTaskContentTaskTitle} data-cy="task-title">
                    {props.taskTitle}
                    <span
                        className={classes.TaskDetailTaskContentImpact}
                        style={generateImpactColourClasses(props.taskImpact)}>
                        {props.taskImpact}
                    </span>
                </p>
                <dl>
                    <dt>Project</dt>
                    <dd>{props.taskProjectTitle}</dd>
                    <dt>Error</dt>
                    <dd>{props.taskError}</dd>
                    <dt>Scheduled for</dt>
                    <dd>{props.taskStartTime} - {props.taskEndTime}</dd>
                </dl>
            </div >
        </div >
    );
}

export default taskDetail;