const axios = require('axios');

async function getApiDoa() {
    let url = "https://doa-doa-api-ahmadramadhan.fly.dev/api/doa/v1/random";

    try {
        const response = await axios.get(url);
        const data = response.data;
        let res = "";
        for (let i = 0; i < data.length; i++) {
            res += `*${data[i].doa}*\n`;
            res += `${data[i].ayat}\n`;
            res += `Latin : _*${data[i].latin}*_\n`;
            res += `Artinya : ${data[i].artinya}\n\n`;
        }
        return res;
    } catch (error) {
        console.error("Error fetching doa data:", error);
        return "Error fetching doa data.";
    }
}

module.exports = {
    getApiDoa
}
