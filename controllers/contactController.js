const ContactModel = require('../models/contactModel')


const ContactCTRL = {
    createContact: async(req, res) => {
        const ContactMsg = req.body;
        const newContactMsg = new ContactModel({
            ...ContactMsg,
            createdAt: new Date().toISOString(),
        });
        try {
            await newContactMsg.save();
            console.log(newContactMsg)
            res.status(201).json({
                messege: `Messege is Send Sucessfully`,
                newContactMsg: newContactMsg
            });
        } catch (error) {
            res.status(409).json({
                messege: error.messege,
            });
        }
    },
    getLists: async(req, res) => {

        try {
            const AllContactList = await ContactModel.find();
            res.status(200).json({
                messege: "All user contacts",
                allcontact: AllContactList,
            });
        } catch (error) {
            res.status(404).json({
                messege: error.messege,
            });
        }
    },
    getList: async(req, res, next) => {
        const { id } = req.params;
        console.log(req.params);
        try {
            const SingleContact = await ContactModel.findById();
            console.log(SingleContact);
            res.status(200).json({
                messege: `Contact of this ${id} found`,
                SingleContact,
            });
        } catch (error) {
            res.status(404).json({
                messege: error.messege,
            });
        }
    },

};

module.exports = ContactCTRL;