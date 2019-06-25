import React from 'react';
import classes from './Hours.module.css';
import Hour from './Hour/Hour';

const Hours = () => (
	<div className={classes.Hours}>
		<Hour>9</Hour>
		<Hour>10</Hour>
		<Hour>11</Hour>
		<Hour>12</Hour>
		<Hour>13</Hour>
		<Hour>14</Hour>
		<Hour>15</Hour>
		<Hour>16</Hour>
		<Hour></Hour>
	</div>
	);

export default Hours;