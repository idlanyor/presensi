const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');
const { getApiDoa } = require('./utils/api/doaHarian');
const { getApiShalat } = require('./utils/api/jadwalShalat');

// Menginisialisasi fungsi Client dan folder auth
const client = new Client({
  authStrategy: new LocalAuth({ dataPath: 'auth' }),
});

// Menampilkan qrcode
client.on('qr', qr => {
  qrcode.generate(qr, { small: true });
});

// Menampilkan pesan jika WhatsApp bot sudah login
client.on('ready', () => {
  console.log('WhatsApp bot siap');
});

// Menampilkan pesan yang baru masuk
client.on('message', async msg => {
  console.log(msg.body);

  // Fungsi untuk mereply atau membalas pesan
  if (msg.body === 'dh') {
    const dh = await getApiDoa();
    msg.reply(dh);
  }
  if (msg.body === 'js bms') { // Ubah "bms" menjadi lokasi yang sesuai
    const jsBms = await getApiShalat('bms'); // Ubah parameter menjadi lokasi yang sesuai
    msg.reply(jsBms);
  }
  if (msg.body === 'js pbg') { // Ubah "pbg" menjadi lokasi yang sesuai
    const jsPbg = await getApiShalat('pbg'); // Ubah parameter menjadi lokasi yang sesuai
    msg.reply(jsPbg);
  }
  if (msg.body === 'js') { // Ubah "pbg" menjadi lokasi yang sesuai
    const js = await getApiShalat(); // Ubah parameter menjadi lokasi yang sesuai
    msg.reply(js);
  }
  // Tambahkan blok if untuk lokasi lain jika diperlukan

});

client.initialize();
