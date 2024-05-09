import axios from "axios";

const HEADERS = {
    Accept: "application/json",
    "Content-Type": "application/json",
};
export default {
    async getBigTable(count) {
        let res = await axios.get(`http://localhost:3000/getTable`, {
            params: {
                count: count,
            },
            headers: HEADERS
        });
        return res.data;
    },
    async addData(count) {
        let res = await axios.get(`http://localhost:3000/add`, {
            params: {
                count: count,
            },
            headers: HEADERS
        });
        return res.data;
    },
    async updateRow(all) {
        let res = await axios.post(`http://localhost:3000/updateRow`, {
            all: all
            },
            {
            headers: HEADERS
        });
        return res.data;
    },
    async clear() {
        let res = await axios.post(`http://localhost:3000/clear`, {},
            {
                headers: HEADERS
            });
        return res.data;
    },
    async addElement(el) {
        let res = await axios.post(`http://localhost:3000/createElement`, {
                symbol: el.symbol,
                weight: el.weight
            },
            {
                headers: HEADERS
            });
        return res.data;
    }
}
