import axios from "axios";
import { buildCobaltDataFromPage } from "./cobalt-helpers";

export async function getCobaltPageByUrl(site, url) {

    let pageData = null;
    const requestUrl = '/api/pages/?url=' + url + '&emk.site=' + site
    console.log("Getting cobalt data from " + requestUrl)
    pageData = await cobaltRequest(requestUrl)

    const cobaltData = buildCobaltDataFromPage(pageData, site, url);

    return cobaltData;
}

export async function cobaltRequest(url) {

    let result = null;

    try {
        const options = {
            method: 'GET',
            url: process.env.COBALT_BASE_HOST + url,
            mode: 'no-cors',
        };

        const response = await axios.request(options)
        result = response.data
    }
    catch (e) {
        console.log(e)
    }
    return result
}