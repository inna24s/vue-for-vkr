import axios from "axios";

const HEADERS = {
    Accept: "application/json",
    "Content-Type": "application/json",
};

const URL = `https://e7205ef3-4d9a-44c4-a4ae-6e73be13a39f-00-2f6q3y0g5jhhc.sisko.replit.dev/`;
// const URL = `http://localhost:3000/`;
export default {
    async getBigTable(count) {
        let res = await axios.get(URL + `getTable`, {
            params: {
                count: count,
            },
            headers: HEADERS
        });
        return res.data;
    },
    async addData(count) {
        let res = await axios.get(URL + `add`, {
            params: {
                count: count,
            },
            headers: HEADERS
        });
        return res.data;
    },
    async updateRow(all) {
        let res = await axios.post(URL + `updateRow`, {
            all: all
            },
            {
            headers: HEADERS
        });
        return res.data;
    },
    async clear() {
        let res = await axios.post(URL + `clear`, {},
            {
                headers: HEADERS
            });
        return res.data;
    },
    async addElement(el) {
        let res = await axios.post(URL + `createElement`, {
                symbol: el.symbol,
                weight: el.weight
            },
            {
                headers: HEADERS
            });
        return res.data;
    }
}
