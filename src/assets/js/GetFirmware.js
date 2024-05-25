import fetchJsonp from "fetch-jsonp";
import {ref} from "vue";

export let softwareList = ref()

export const getSoftware = async (hardware) => {
    const response = await fetchJsonp("https://api.miwifi.com/upgrade/log/list?typeList=" + hardware);
    const result = await response.json();
    softwareList.value = result.data.list;
}
