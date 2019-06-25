import axios from 'axios';

const baseDomain = "http://40414669.wdd.napier.ac.uk";
const baseURL = `${baseDomain}/inc`;

export default axios.create({
    baseURL
});