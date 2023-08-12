const axios = require('axios');
const { getCurrentDate } = require('../dateUtils')

function getApiShalat(param) {
    let id = 0;
    if (param == "bms" || param == "Bms") {
        id = 1402;
    } else if (param == "pbg" || param == "Pbg") {
        id = 1420;
    } else if (param == "clp" || param == "Clp") {
        id = 1407;
    } else if (param == "tgl" || param == "Tgl") {
        id = 1407;
    } else {
        id = 1420;
    }

    let url = "https://api.myquran.com/v1/sholat/jadwal/" + id + "/" + getCurrentDate();

    return axios.get(url)
        .then(async (response) => {
            const data = await response.data.data;
            let res = "";
            res += `*Kabupaten/Kota   : ${data.lokasi}*\n`;
            res += `*Hari / Tanggal   : ${data["jadwal"].tanggal}*\n\n`;
            res += `Jadwal :\n`;
            res += `*Imsak\t: ${data["jadwal"].imsak}*\n`;
            res += `*Subuh\t: ${data["jadwal"].subuh}*\n`;
            res += `*Terbit\t: ${data["jadwal"].terbit}*\n`;
            res += `*Dhuha\t: ${data["jadwal"].dhuha}*\n`;
            res += `*Dzuhur\t: ${data["jadwal"].dzuhur}*\n`;
            res += `*Ashar\t: ${data["jadwal"].ashar}*\n`;
            res += `*Maghrib\t: ${data["jadwal"].maghrib}*\n`;
            res += `*Isya\t: ${data["jadwal"].isya}*\n`;

            return res;
        })
        .catch(error => {
            console.error("Error fetching shalat data:", error);
            return "Error fetching shalat data.";
        });
}
// async function main() {
//     try {
//         const shalatSchedule = await getApiShalat();
//         console.log(shalatSchedule);
//     } catch (error) {
//         // Tangani kesalahan jika terjadi
//     }
// }

// main();
module.exports = {
    getApiShalat
};
