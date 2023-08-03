const admin = require('firebase-admin')

const svcAcc = require('./secret.json')

admin.initializeApp({
    credential : admin.credential.cert(svcAcc),
    databaseURL: 'https://presensi-yntkts-default-rtdb.firebaseio.com/'
})

const db = admin.database()

module.exports = db;