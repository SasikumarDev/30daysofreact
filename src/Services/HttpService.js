import axios from "axios";

export default function get(url) {
    return axios.get(url).then((x) => {
        return x;
    }).catch(err => {
        console.log(err);
    });
}