const Waktu = () => {
    var date = new Date();
    var days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    var months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

    var day = days[date.getDay()];
    var month = months[date.getMonth()];
    var year = date.getFullYear();

    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    var formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    var formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

    var formattedTimestamp = day + ', ' + date.getDate() + ' ' + month + ' ' + year + ' ' + hours + ':' + formattedMinutes + ':' + formattedSeconds;

    return formattedTimestamp;
}
module.exports = Waktu