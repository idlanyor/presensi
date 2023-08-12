const express = require('express');
const router = express.Router()
const { body, validationResult } = require('express-validator')

const db = require('../config/firebaseCfg')

const Matkul = require('../models/Matkul')

router.get('/', (rq, rs) => {
    db.ref('/matkul/').once('value')
        .then(snap => {
            const matkulArray = ['Endpoint Data Mata Kuliah ']
            snap.forEach(childSnap => {
                const matkulData = childSnap.val()
                const matkul = new Matkul(
                    childSnap.key,
                    matkulData.kodeMatkul,
                    matkulData.namaMatkul,
                    matkulData.dosen,
                    matkulData.hari,
                    matkulData.jam,
                    matkulData.prodi
                )
                matkulArray.push(matkul)
            })
            rs.json(matkulArray);
        })
        .catch(e => {
            rs.status(500).json({ error: e.message })
        })
});

//input matkul
router.post(
    '/',
    [
        body('kodeMatkul').notEmpty().withMessage('Kode Mata Kuliah Harus diisi'),
        body('namaMatkul').notEmpty().withMessage('Nama Matakuliah Harus diisi'),
        body('dosen').notEmpty().withMessage('data Dosen tidak boleh kosong'),
    ],
    (rq, rs) => {
        const err = validationResult(rq)
        if (!err.isEmpty()) {
            return rs.status(400).json({ error: err.array() })
        }

        const newMatkul = rq.body;
        db.ref('/matkul').push(newMatkul)
            .then(() => {
                rs.json({ msg: ' Matkul berhasil ditambahkan' })
            })
            .catch(e => {
                rs.status(500).json({ error: e.message })
            })
    })

//update matkul
router.put(
    '/:id',
    [
        body('kodeMatkul').notEmpty().withMessage('Kode Mata Kuliah Harus diisi'),
        body('namaMatkul').notEmpty().withMessage('Nama Mata Kuliah Harus diisi'),
        body('dosen').notEmpty().withMessage('data Dosen tidak boleh kosong'),
    ],
    (rq, rs) => {
        const err = validationResult(rq)
        if (!err.isEmpty()) {
            return rs.status(400).json({ error: err.array() })
        }
        const id = rq.params.id
        const updateMatkul = rq.body;
        db.ref(`/matkul/${id}`).update(updateMatkul)
            .then(() => {
                rs.json({ msg: 'data Matkul berhasil diperbarui' })
            })
            .catch(e => {
                rs.status(500).json({ error: e.message })
            })
    });

//menghapus matkul
router.delete('/:id', (rq, rs) => {
    const id = rq.params.id
    db.ref(`matkul/${id}`).remove()
        .then(() => {
            rs.json({ msg: 'data Matkul berhasil dihapus' })
        })
        .catch(e => {
            rs.status(500).json({ error: e.message })
        });
})

module.exports = router;