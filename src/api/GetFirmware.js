import fetchJsonp from "fetch-jsonp";

export const getHardware = async () => {
    const response = await fetchJsonp("https://www1.miwifi.com/statics/json/index.json");
    return await response.json();
}

export const getSoftware = async (hardware) => {
    const response = await fetchJsonp("https://api.miwifi.com/upgrade/log/list?typeList=" + hardware);
    const result = await response.json();
    return result.data;
}
