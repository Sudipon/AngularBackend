const express = require ('express');
const router = express.Router()
const ContactCTRL = require('../controllers/contactController');

router.post('/create', ContactCTRL.createContact);
router.get('/admin/list',ContactCTRL.getLists);
router.get('/admin/list/:id',ContactCTRL.getList);

module.exports = router;